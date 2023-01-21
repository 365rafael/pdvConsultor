import { View, Text } from "react-native";
import React from "react";

import styles from "../../styles";

const Header = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.title}>Consultor PDV</Text>
    </View>
  );
};

export default Header;
