import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "../../styles";
import { Feather } from "@expo/vector-icons";

const Relatorios = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Relatórios")}
      >
        <Feather name="book-open" size={70} />
        <Text style={styles.itemText}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Relatorios;
