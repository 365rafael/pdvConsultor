import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const Relatorios = ({ onPressActionButton }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressActionButton}>
        <Feather name="book-open" size={70} />
        <Text style={styles.itemText}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Relatorios;

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
