import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/myBooks.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              icon={"email"}
              placeholder={"Email"}
              autoCapitalize={"none"}
              autoCorrect={false}
              keyboardType={"email-address"}
              textContentType={"emailAddress"}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />

            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              placeholder={"Password"}
              secureTextEntry
              textContentType={"password"}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title={"Login"} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
  },
});
