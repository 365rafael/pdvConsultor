import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const index = ({ onPressActionButton }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressActionButton}>
        <Feather name="shopping-bag" size={70} />
        <Text style={styles.itemText}>Efetuar Venda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

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
