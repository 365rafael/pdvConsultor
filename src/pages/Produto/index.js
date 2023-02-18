import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Produto = ({ navigation }) => {

  const [produto, setProduto] = useState([])
  const [loading, setLoading] = useState(true)

 async function handleFetchData(){
    const response = await AsyncStorage.getItem('@produtos')
   const data = response ? JSON.parse(response) : []
    console.log("ASYNC::", data)
   setProduto(data)
   console.log("PRODUTO::", produto)
   setLoading(false)
  }

  useFocusEffect(
    useCallback(()=>{
      handleFetchData()
            
    },[]))
    
    // async function onEdit(item){
    //   navigation.navigate("EditarProduto", {paramKey: item.id})
    //   console.log("ENVIADO para editar", item)
    // }

    if (loading) {
      return (
        <View>
          <Text>Carregando detalhes...</Text>
        </View>
      )
    }
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={styles.buttonList} onPress={()=>navigation.navigate("EditarProduto", {paramKey: item.id})}>
              <View style={styles.itemList}>
                <Text style={styles.list}>{item.nome}</Text>
                <Text style={styles.list}> R$ {item.preco}</Text>
                <Text style={styles.list}> {item.estoque}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default Produto;
