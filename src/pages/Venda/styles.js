import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 50,
  },
  inputArea: {
    flex: 1,
    padding: 5,
    marginLeft: 15,
  },
  inputNome: {
    borderWidth: 0.5,
    width: "80%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
  },
  inputPreco: {
    borderWidth: 0.5,
    width: "30%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
  },
  inputText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  inputStore: {
    borderWidth: 0.5,
    width: "30%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
  },
  erro: {
    color: "red",
  },
  btnAdd: {
    backgroundColor: "cadetblue",
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 25,
  },
  btnCancelar: {
    backgroundColor: "black",
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 25,
  },
  btnExcluir: {
    backgroundColor: "red",
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 25,
  },
  btnArea: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  btnText: {
    color: "white",
  },
});

export default styles;
