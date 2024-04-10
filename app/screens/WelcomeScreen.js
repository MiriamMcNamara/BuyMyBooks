import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/myBooks.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Buy My Books</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.25)", //to make more readable on image...change?
  },
  titleContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default WelcomeScreen;
