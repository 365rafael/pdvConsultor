import { View } from "react-native";

import styles from "./styles";
import Produtos from "../../components/Produtos";
import Vendas from "../../components/Vendas";
import Header from "../../components/Header";
import Relatorios from "../../components/Relatorios";
import Configs from "../../components/Configs";
import Fornecedores from "../../components/Fornecedores";



const Home = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Header title="Consultor PDV" />
      <View style={styles.components}>
        <Produtos onPressActionButton={() => navigation.navigate("Produto")} />
        <Relatorios
          onPressActionButton={() => navigation.navigate("Relatorio")}
          />
      </View>
      <View style={styles.components}>
        <Vendas onPressActionButton={() => navigation.navigate("Venda")} />
        <Configs
          onPressActionButton={() => navigation.navigate("Configuracao")}
        />
      </View>
    </View>
  );
};
export default Home;
