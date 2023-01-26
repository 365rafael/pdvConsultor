import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./styles";

const CadastroFornecedor = ({ navigation }) => {
  const onDelete = () => {
    Alert.alert("Quer mesmo excluir este registro?");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Fornecedor:</Text>
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
          <TouchableOpacity style={styles.btnExcluir} onPress={onDelete}>
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CadastroFornecedor;
