import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },

  components: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
  },
  button: {
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
  },
  list: {
    fontSize: 28,
    marginBottom: 14,
    justifyContent: "space-evenly",
  },
  buttonList: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  flatlist: {
    marginTop: 50,
  },
});
export default styles;
