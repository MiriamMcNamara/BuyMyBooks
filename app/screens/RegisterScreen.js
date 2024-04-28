import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/myBooks.png")} style={styles.image} />
      <MaterialCommunityIcons
        style={styles.logo}
        name="book-open-variant"
        size={200}
        color={colors.white}
      />
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          icon={"email"}
          placeholder={"Email"}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"email-address"}
          textContentType={"emailAddress"}
        />
        <AppFormField
          name={"password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"lock"}
          placeholder={"Password"}
          secureTextEntry
          textContentType={"password"}
        />
        <AppFormField
          name={"name"}
          icon={"account"}
          placeholder={"Name"}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"default"}
          textContentType={"name"}
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
  },
  logo: {
    alignSelf: "center",
    marginTop: 150,
    position: "absolute",
  },
});
