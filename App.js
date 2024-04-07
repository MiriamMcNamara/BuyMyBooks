import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
  Platform,
} from "react-native";
export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text onPress={handlePress}>By My Books!</Text>
      <Button
        color="darkorange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("Buy My Books", "Wanna buy a book?", (text) =>
            console.log(text)
          )
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
