import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../EditarProduto/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

const EditarProduto = ({ navigation, route }) => {
  const [item, setItem] = useState({});

  const [produto, setProduto] = useState([]);
  const [nome, setNome] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [preco, setPreco] = useState();
  const [estoque, setEstoque] = useState();
  const [erro, setErro] = useState();

  const storeBD = async () => {
    if (item) {
      const storedItems = await AsyncStorage.getItem('@produtos');
      if (storedItems) {
        const items = JSON.parse(storedItems);
        const index = items.findIndex(i => i.id === item.id);
        items[index].nome = nome;
        await AsyncStorage.setItem('@produtos', JSON.stringify(items));
      }
    }
      navigation.goBack();
    
  };

  const onAdd = () => {
    if (
      nome == null ||
      fornecedor == null ||
      preco == null ||
      estoque == null
    ) {
      setErro("Preenchimento obrigatório");
      return;
    }
    setErro(null);

    const newData = {
      id: uuid.v4(),
      nome,
      fornecedor,
      preco: parseFloat(preco.replace(",", ".")),
      estoque: parseFloat(estoque.replace(",", ".")),
    };
    console.log("STATE", newData);
    storeBD(newData);
  };

  const handleGetProduto = async () => {
    const storedItems = await AsyncStorage.getItem("@produtos");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      const filteredItem = items.filter(
        (i) => i.id === route.params.paramKey
      )[0];
      setItem(filteredItem);
      setNome(filteredItem.nome);
      setFornecedor(filteredItem.fornecedor);
      setPreco(filteredItem.preco);
      setEstoque(filteredItem.estoque);
    }
  };
  useEffect(() => {
    handleGetProduto();
  }, []);

  const removeItem = async(item) =>{
    const response = await AsyncStorage.getItem("@produtos");
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((value)=> value.id !== item.id);
    setItem(JSON.stringify(data))
    setProduto(data)
    navigation.navigate.goBack()
  }

  const onDelete = () => {
    Alert.alert(
      `Exclusão de ${item.nome}`, "Quer mesmo excluir este registro?",[
        {
          text: 'Cancel',
          
          style: 'cancel',
        },
        {text: 'OK', onPress: () => removeItem()},
      ]
      
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Nome do produto:</Text>
        {nome == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Produto"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.inputText}>Fornecedor:</Text>
        {fornecedor == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Fornecedor"
          value={fornecedor}
          onChangeText={(text) => setFornecedor(text)}
        />
        <Text style={styles.inputText}>Preço de compra:</Text>
        {preco == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputPreco}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="Preço"
          value={preco}
          onChangeText={(text) => setPreco(text)}
        />
        <Text style={styles.inputText}>Estoque inicial:</Text>
        {estoque == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputStore}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="Estoque"
          value={estoque}
          onChangeText={(text) => setEstoque(text)}
        />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnAdd} onPress={onAdd}>
            <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={navigation.goBack}
          >
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnExcluir} onPress={onDelete}>
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditarProduto;
