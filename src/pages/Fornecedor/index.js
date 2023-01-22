import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";

import styles from "../../styles";

let fornecedor = [
  { key: 1, name: "Sumup" },
  { key: 2, name: "Pagseguro" },
  { key: 3, name: "Ton" },
  { key: 4, name: "MercadoPago" },
  { key: 5, name: "Acquio" },
  { key: 6, name: "Global" },
  { key: 7, name: "Quero2Pay" },
  { key: 8, name: "Cielo" },
  { key: 9, name: "Rede" },
  { key: 10, name: "Infinity" },
];

const Fornecedor = () => {
  return (
    <View style={styles.container}>
      <Header title="Fornecedores" />
      <View style={styles.components}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Novo Fornecedor")}
        >
          <Feather name="edit" size={70} />
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
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Fornecedor;
