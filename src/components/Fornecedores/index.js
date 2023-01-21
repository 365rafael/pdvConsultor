import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "../../styles";
import { Feather } from "@expo/vector-icons";

const Fornecedores = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Fornecedores")}
      >
        <Feather name="truck" size={70} />
        <Text style={styles.itemText}>Fornecedores</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fornecedores;
