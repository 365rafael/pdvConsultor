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

const CadastroFornecedor = ({ navigation }) => {
  const [fornecedor, setFornecedor] = useState({});
  const [nome, setNome] = useState();
  const [erro, setErro] = useState(null);

  const onAdd = () => {
    Keyboard.dismiss();
    if (nome == null) {
      setErro("Preenchimento obrigatório");
      return;
    }
    setErro(null);
    setFornecedor({
      id: null,
      nome: nome,
    });
    alert(`Fornecedor cadastrado: ${nome}`);
  };
  const onDelete = () => {
    Alert.alert("Quer mesmo excluir este registro?");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Fornecedor:</Text>
        {<Text style={styles.erro}>{erro}</Text>}
        <TextInput
          style={styles.inputNome}
          placeholder={"Fornecedor"}
          cursorColor={"black"}
          onChangeText={setNome()}
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
        <Text></Text>
        <Text style={styles.inputText}>{fornecedor.nome}</Text>
      </View>
    </View>
  );
};

export default CadastroFornecedor;
