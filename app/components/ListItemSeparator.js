import { View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return (
    <View style={{ width: "100%", height: 1, backgroundColor: colors.light }} />
  );
}
