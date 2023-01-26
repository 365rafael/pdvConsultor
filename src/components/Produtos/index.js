import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const Produtos = ({ onPressActionButton }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressActionButton}>
        <Feather name="layers" size={70} />
        <Text style={styles.itemText}>Meus Produtos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produtos;

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
