import { Switch, TextInput, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "YA Fiction", value: 1 },
  { label: "LGBTQIA", value: 2 },
  { label: "Contemporary", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();

  return (
    <GestureHandlerRootView>
      <Screen>
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
        <AppTextInput placeholder="Username" icon={"email"} />
        <AppPicker
          icon={"apps"}
          placeholder="Category"
          items={categories}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
