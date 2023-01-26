import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const Fornecedores = ({ onPressActionButton }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressActionButton}>
        <Feather name="truck" size={70} />
        <Text style={styles.itemText}>Fornecedores</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fornecedores;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
  },
});
