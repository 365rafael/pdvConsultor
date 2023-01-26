import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/Home";
import Configuracao from "../pages/Configuracao";
import Fornecedor from "../pages/Fornecedor";
import Produto from "../pages/Produto";
import Relatorio from "../pages/Relatorio";
import Venda from "../pages/Venda";
import CadastrarProduto from "../pages/Produto/CadastrarProduto";
import CadastroFornecedor from "../pages/Fornecedor/CadastroFornecedor";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Fornecedor"
          component={Fornecedor}
          options={{
            headerBackTitle: true,
            title: "Fornecedores",
          }}
        />
        <Stack.Screen
          name="Produto"
          component={Produto}
          options={{
            headerBackTitle: true,
            title: "Produtos",
          }}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{
            headerBackTitle: true,
            title: "Relatorios",
          }}
        />
        <Stack.Screen
          name="Venda"
          component={Venda}
          options={{
            headerBackTitle: true,
            title: "Vendas",
          }}
        />
        <Stack.Screen
          name="Configuracao"
          component={Configuracao}
          options={{
            headerBackTitle: true,
            title: "Configuração",
          }}
        />
        <Stack.Screen
          name="CadastrarProduto"
          component={CadastrarProduto}
          options={{
            headerBackTitle: true,
            title: "Cadastrar Produtos",
          }}
        />
        <Stack.Screen
          name="CadastroFornecedor"
          component={CadastroFornecedor}
          options={{
            headerBackTitle: true,
            title: "Cadastrar Fornecedor",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
