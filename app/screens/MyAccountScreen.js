import { View, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import IconComponent from "../components/IconComponent";

const data = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function MyAccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Miriam McNamara"
          subTitle="test@example.com"
          image={require("../assets/miriam.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              IconComponent={
                <IconComponent
                  name={item.icon.name}
                  size={30}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        IconComponent={
          <IconComponent
            name="logout"
            size={30}
            backgroundColor={colors.yellow}
          />
        }
        title="Log Out"
        onPress={() => console.log("Log Out")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light },
  container: {
    marginVertical: 20,
  },
});
