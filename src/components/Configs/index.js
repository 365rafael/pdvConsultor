import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "../../styles";
import { Feather } from "@expo/vector-icons";

const Configs = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Configurações")}
      >
        <Feather name="settings" size={70} />
        <Text style={styles.itemText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Configs;
