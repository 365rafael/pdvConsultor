import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

let fornecedor = [
  { id: 1, name: "Sumup" },
  { id: 2, name: "Pagseguro" },
  { id: 3, name: "Ton" },
  { id: 4, name: "MercadoPago" },
  { id: 5, name: "Acquio" },
  { id: 6, name: "Global" },
  { id: 7, name: "Quero2Pay" },
  { id: 8, name: "Cielo" },
  { id: 9, name: "Rede" },
  { id: 10, name: "Infinity" },
];

const Fornecedor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.components}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("CadastroFornecedor");
          }}
        >
          <MaterialIcons name="add-business" size={70} color={"#fff"} />
          <Text style={styles.itemText}>Novo Fornecedor</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        data={fornecedor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={styles.buttonList}>
              <Text style={styles.list}>{item.name}</Text>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Fornecedor;
