import { View } from "react-native";

import styles from "../../styles";
import Produtos from "../../components/Produtos";
import Vendas from "../../components/Vendas";
import Header from "../../components/Header";
import Relatorios from "../../components/Relatorios";
import Configs from "../../components/Configs";
import Fornecedores from "../../components/Fornecedores";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Consultor PDV" />
      <View style={styles.components}>
        <Produtos />
        <Fornecedores />
      </View>
      <View style={styles.components}>
        <Relatorios />
        <Vendas />
      </View>
      <View style={styles.components}>
        <Configs />
      </View>
    </View>
  );
};
export default Home;
