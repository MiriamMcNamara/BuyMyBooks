import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/myBooks.png")}
    >
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons
          name="book-open-variant"
          size={150}
          color="white"
        />
        <Text style={styles.title}>Buy My Books</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  title: {
    color: "white",
    fontSize: 39,
    fontWeight: "600",
  },
  titleContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: "50%", //to make more readable on image...change?
  },
});

export default WelcomeScreen;
