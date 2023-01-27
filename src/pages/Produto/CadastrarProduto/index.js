import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CadastrarProduto = ({ navigation }) => {
  const [produto, setProduto] = useState({});
  const [nome, setNome] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [preco, setPreco] = useState();
  const [estoque, setEstoque] = useState();
  const [erro, setErro] = useState();

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
    setProduto({
      id: null,
      nome: nome,
      fornecedor: fornecedor,
      preco: parseFloat(preco),
      estoque: parseFloat(estoque),
    });
    Alert.alert(
      `Produto: ${nome}, Fonecedor: ${fornecedor}, Custo: R$ ${preco}, Estoque ${estoque}`
    );
    setNome("");
    Keyboard.dismiss();
    navigation.goBack();
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
          onChangeText={setNome}
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
          onChangeText={setPreco}
        />
        <Text style={styles.inputText}>Estoque inicial:</Text>
        {estoque == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputStore}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="un"
          onChangeText={setEstoque}
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
          <TouchableOpacity style={styles.btnExcluir} onPress={onDelete}>
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CadastrarProduto;
