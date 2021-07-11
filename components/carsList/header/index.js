import React from "react";
import { View, Image } from "react-native";
import styles from "./styles.js";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/images/tesla-logo.png")}
      />
    </View>
  );
};

export default index;
