import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";

import styles from "./styles";

const Configuracao = ({ navigation }) => {
  const onDelete = () => {
    Alert.alert("Quer mesmo excluir esse registro?");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Nome do vendedor:</Text>
        <TextInput style={styles.inputNome} cursorColor={"black"} />
        <Text style={styles.inputText}>Documento (CPF/CNPJ):</Text>
        <TextInput
          style={styles.inputNome}
          keyboardType="numeric"
          cursorColor={"black"}
        />
        <Text style={styles.inputText}>Endereço:</Text>
        <TextInput
          style={styles.inputEndereco}
          multiline={true}
          numberOfLines={4}
          cursorColor={"black"}
        />

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
          <TouchableOpacity style={styles.btnExcluir} onPress={onDelete}>
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Configuracao;
