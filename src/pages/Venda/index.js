import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";

const Venda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Produto:</Text>
        <TextInput style={styles.inputNome} cursorColor={"black"} />
        <Text style={styles.inputText}>Preço de venda:</Text>
        <TextInput
          style={styles.inputPreco}
          keyboardType="numeric"
          cursorColor={"black"}
        />
        <Text style={styles.inputText}>Quantidade:</Text>
        <TextInput
          style={styles.inputStore}
          keyboardType="numeric"
          cursorColor={"black"}
        />
        <Text style={styles.inputText}>Nome do cliente:</Text>
        <TextInput style={styles.inputNome} cursorColor={"black"} />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnAdd}>
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
