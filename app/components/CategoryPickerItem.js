import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconComponent from "./IconComponent";
import AppText from "./AppText";

export default function CategoryPickerItem({ onPress, item }) {
  return (
    <View style={styles.container}>
      <IconComponent
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
