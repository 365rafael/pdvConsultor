import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import styles from "../../styles";

const index = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => alert("Vendas")}>
        <Feather name="shopping-bag" size={70} />
        <Text style={styles.itemText}>Efetuar Venda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
