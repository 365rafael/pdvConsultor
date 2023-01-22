import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";

import styles from "../../styles";

let produto = [
  { key: 1, name: "Sumup Top", price: 34.9 },
  { key: 2, name: "Sumup On", price: 250.8 },
  { key: 3, name: "Sumup Solo", price: 298.8 },
  { key: 4, name: "Sumup Total", price: 298.8 },
  { key: 5, name: "Case On", price: 14 },
  { key: 6, name: "Capinha On", price: 14 },
  { key: 7, name: "Capinha Top", price: 0.0 },
  { key: 8, name: "Produtos Avon", price: 15.9 },
  { key: 9, name: "Produtos Natura", price: 10.9 },
  { key: 10, name: "Informática", price: 100.0 },
];

const Produto = () => {
  return (
    <View style={styles.container}>
      <Header title="Produtos" />
      <View style={styles.components}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Novo Produto")}
        >
          <Feather name="box" size={70} />
          <Text style={styles.itemText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        data={produto}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={styles.buttonList}>
              <Text style={styles.list}>
                {item.name} - R$ {item.price}
              </Text>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Produto;
