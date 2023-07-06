
import { View, Text } from "react-native";
import { styles } from "./styles/styles";

import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    1: require("./assets/fonts/Roboto/1.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <LoginScreen />;
  // return <RegistrationScreen />;
}