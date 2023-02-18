import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import Toast from "react-native-toast-message";

const CadastrarProduto = ({ navigation }) => {
  const [nome, setNome] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [preco, setPreco] = useState();
  const [estoque, setEstoque] = useState();
  const [erro, setErro] = useState();

  
  const storeBD = async(newData) =>{
    try {
    const response = await AsyncStorage.getItem('@produtos')
    const previousData = response ? JSON.parse(response) : []
    const data = [...previousData, newData];

      const produtoBD = JSON.stringify(data)
      await AsyncStorage.setItem('@produtos', produtoBD)
      console.log("Salvando::",produtoBD)
      Keyboard.dismiss();
      Toast.show({
        type:"sucess",
        text1:"Produto cadastrado com sucesso!"
      })
    navigation.goBack();
    } catch (e) {
      console.log("ERRO::", e)
    }
    
  }

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
      preco: parseFloat(preco.replace(',', '.')),
      estoque: parseFloat(estoque.replace(',','.'))
    }
    console.log("STATE", newData)
    storeBD(newData)
    
  };

  const onDelete = () => {
    Alert.alert("Quer mesmo excluir este registro?");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Nome do produto:</Text>
        {nome == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Nome"
          onChangeText={(text) =>setNome(text)}
        />
        <Text style={styles.inputText}>Fornecedor:</Text>
        {fornecedor == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Fornecedor"
          onChangeText={(text) => setFornecedor(text)}
        />
        <Text style={styles.inputText}>Preço de compra:</Text>
        {preco == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputPreco}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="R$"
          onChangeText={(text)=>setPreco(text)}
        />
        <Text style={styles.inputText}>Estoque inicial:</Text>
        {estoque == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputStore}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="un"
          onChangeText={(text)=>setEstoque(text)}
        />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnAdd} onPress={onAdd}>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={navigation.goBack}
          >
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
};

export default CadastrarProduto;
