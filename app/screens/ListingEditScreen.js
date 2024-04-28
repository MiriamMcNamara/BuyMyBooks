import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import colors from "../config/colors";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Science Fiction",
    value: 1,
    backgroundColor: colors.secondary,
    icon: "alien",
  },
  {
    label: "Fantasy",
    value: 2,
    backgroundColor: colors.yellow,
    icon: "unicorn",
  },
  {
    label: "Contemporary",
    value: 3,
    backgroundColor: colors.primary,
    icon: "heart",
  },
];

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"title"}
          placeholder={"Title"}
          keyboardType={"default"}
        />
        <AppFormField
          name={"price"}
          placeholder={"Price"}
          keyboardType={"numeric"}
          icon={"cash"}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          width={"50%"}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name={"description"}
          placeholder={"Description"}
          multiline
          numberOfLines={3}
          keyboardType={"default"}
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.secondary,
  },
});
