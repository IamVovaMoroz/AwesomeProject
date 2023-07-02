import React from "react";
import {
  StatusBar,
  View,
  ImageBackground,
  Text,
  TextInput,
  Image,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import PhotoBG from "./assets/fonts/images/PhotoBG.jpg";
import { styles } from "../../styles/styles";

const LoginScreen = () => {
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={PhotoBG}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView contentContainerStyle={styles.scrollArea}>
              <View style={styles.loginContainer}>
                <Text style={styles.text}>Увійти</Text>
                <View>
                  <View>
                    <TextInput
                      placeholder="Адреса електронної пошти"
                      style={styles.input}
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      placeholder="*********"
                      style={styles.input}
                    ></TextInput>
                    <Pressable style={styles.pressableShowPassword}>
                      <Text style={styles.showPasswordText}>Показати</Text>
                    </Pressable>
                  </View>
                  <Pressable style={styles.registerButton}>
                    <Text style={styles.buttonText}>Увійти</Text>
                  </Pressable>
                  <Pressable style={styles.linkWrap}>
                    <Text style={styles.linkText}>
                      Немає акаунту?&nbsp;
                      <Text style={styles.underlineText}>Зареєструватися</Text>
                    </Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;