import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

let produto = [
  { key: 1, name: "Sumup Top", price: 34.9, quantidade: 60 },
  { key: 2, name: "Sumup On", price: 250.8, quantidade: 3 },
  { key: 3, name: "Sumup Solo", price: 298.8, quantidade: 3 },
  { key: 4, name: "Sumup Total", price: 298.8, quantidade: 8 },
  { key: 5, name: "Case On", price: 14, quantidade: 0 },
  { key: 6, name: "Capinha On", price: 14, quantidade: 5 },
  { key: 7, name: "Capinha Top", price: 0.0, quantidade: 100 },
  { key: 8, name: "Produtos Avon", price: 15.9, quantidade: 5 },
  { key: 9, name: "Produtos Natura", price: 10.9, quantidade: 5 },
  { key: 10, name: "Informática", price: 100.0, quantidade: 5 },
];

const Produto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.components}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CadastrarProduto")}
        >
          <MaterialIcons name="add-box" size={70} color={"#fff"} />
          <Text style={styles.itemText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listHead}>
        <Text style={styles.list}>Produto</Text>
        <Text style={styles.list}>Custo</Text>
        <Text style={styles.list}>Estoque </Text>
      </View>
      <FlatList
        style={styles.flatlist}
        data={produto}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={styles.buttonList}>
              <View style={styles.itemList}>
                <Text style={styles.list}>{item.name}</Text>
                <Text style={styles.list}> R$ {item.price}</Text>
                <Text style={styles.list}> {item.quantidade}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Produto;
