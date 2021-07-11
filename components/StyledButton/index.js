import React from "react";
import styles from "./styles";
import { View, Pressable, Text } from "react-native";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20cc" : "#FFFFFFA6";

  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}> {content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
