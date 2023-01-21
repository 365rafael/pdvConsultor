import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "../../styles";
import { Feather } from "@expo/vector-icons";

const Produtos = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => alert("Produtos")}>
        <Feather name="layers" size={70} />
        <Text style={styles.itemText}>Meus Produtos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produtos;
