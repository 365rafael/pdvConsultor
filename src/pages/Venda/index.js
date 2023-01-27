import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import styles from "./styles";

const Venda = ({ navigation }) => {
  const [venda, setVenda] = useState({});
  const [produto, setProduto] = useState();
  const [quantidade, setQuantidade] = useState();
  const [preco, setPreco] = useState();
  const [cliente, setCliente] = useState();
  const [erro, setErro] = useState(null);

  const onAdd = () => {
    if (
      produto == null ||
      quantidade == null ||
      preco == null ||
      cliente == null
    ) {
      setErro("Preenchimento obrigatório");
    }
    setVenda({
      id: null,
      data: new Date(),
      produto: produto,
      quantidade: parseFloat(quantidade),
      preco: parseFloat(preco),
      cliente: cliente,
    });
    alert(
      `Venda realizada: ${quantidade} ${produto} por ${
        preco * quantidade
      } para ${cliente} `
    );
    setCliente("");
    setPreco("");
    setProduto("");
    setQuantidade("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Produto:</Text>
        {produto == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Produto"
          onChangeText={(text) => setProduto(text)}
        />
        <Text style={styles.inputText}>Preço de venda:</Text>
        {preco == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputPreco}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="Preço"
          onChangeText={(text) => setPreco(text)}
        />
        <Text style={styles.inputText}>Quantidade:</Text>
        {quantidade == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputStore}
          keyboardType="numeric"
          cursorColor={"black"}
          placeholder="Quantidade"
          onChangeText={(text) => setQuantidade(text)}
        />
        <Text style={styles.inputText}>Nome do cliente:</Text>
        {cliente == null && <Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          cursorColor={"black"}
          placeholder="Cliente"
          onChangeText={(text) => setCliente(text)}
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
          <TouchableOpacity style={styles.btnExcluir}>
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Venda;
