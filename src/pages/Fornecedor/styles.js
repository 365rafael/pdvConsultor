import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  components: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    padding: 10,
    width: "100%",
    backgroundColor: "#6A5ACD",
  },
  button: {
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
    marginTop: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonList: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  flatlist: {
    marginTop: 50,
  },
  list: {
    fontSize: 28,
    marginBottom: 14,
    justifyContent: "space-evenly",
  },
});
export default styles;
