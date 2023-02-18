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
    alignItems: "baseline",
  },
  flatlist: {
    marginTop: 30,
  },
  listHead: {
    width: "100%",

    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemList: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    fontSize: 28,
    marginVertical: 14,
    marginLeft: 10,
  },
});
export default styles;
