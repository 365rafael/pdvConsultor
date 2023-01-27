import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

let produto = [
  { id: 1, nome: "Sumup Top", preco: 34.9, estoque: 60 },
  { id: 2, nome: "Sumup On", preco: 250.8, estoque: 3 },
  { id: 3, nome: "Sumup Solo", preco: 298.8, estoque: 3 },
  { id: 4, nome: "Sumup Total", preco: 298.8, estoque: 8 },
  { id: 5, nome: "Case On", preco: 14, estoque: 0 },
  { id: 6, nome: "Capinha On", preco: 14, estoque: 5 },
  { id: 7, nome: "Capinha Top", preco: 0.0, estoque: 100 },
  { id: 8, nome: "Produtos Avon", preco: 15.9, estoque: 5 },
  { id: 9, nome: "Produtos Natura", preco: 10.9, estoque: 5 },
  { id: 10, nome: "Informática", preco: 100.0, estoque: 5 },
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
                <Text style={styles.list}>{item.nome}</Text>
                <Text style={styles.list}> R$ {item.preco}</Text>
                <Text style={styles.list}> {item.estoque}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Produto;
