import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const Configs = ({ onPressActionButton }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressActionButton}>
        <Feather name="settings" size={70} />
        <Text style={styles.itemText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Configs;

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
