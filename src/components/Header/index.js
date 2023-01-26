import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 36,
  },
});
