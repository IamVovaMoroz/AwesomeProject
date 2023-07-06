import React, { useState } from "react";

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
  Alert 
} from "react-native";
import PhotoBG from '../../assets/fonts/images/PhotoBG.jpg';
import { styles } from "../../styles/styles";


const LoginScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusEmailInput, setFocusEmailInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
 

  const logIn = () => {
    setLogin("");
    setEmail("");
    setPassword("");
    Alert.alert("Успішний вхід", "Ви успішно увійшли в систему.");
  };
  // togglePassword(): эта функция переключает значение hidePassword между true и false
  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

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
                      value={email}
                      onChangeText={setEmail}
                      onFocus={() => setFocusEmailInput(true)}
                      onBlur={() => setFocusEmailInput(false)}
                      style={
                        focusEmailInput
                          ? [styles.input, styles.focusedInput]
                          : styles.input
                      }
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      placeholder="*********"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={hidePassword}
                      onFocus={() => setFocusPasswordInput(true)}
                      onBlur={() => setFocusPasswordInput(false)}
                      style={
                        focusPasswordInput
                          ? [styles.input, styles.focusedInput]
                          : styles.input
                      }
                    ></TextInput>
                      {/* Pressable является компонентом, который позволяет создавать элементы с возможностью реагировать на нажатие */}
                    <Pressable
                      style={styles.pressableShowPassword}
                      onPress={togglePassword}
                    >
                      {/* {hidePassword} определяет, должен ли текст быть скрыт  */}
                      <Text style={styles.showPasswordText}>
                        
                        {hidePassword ? "Показати" : "Сховати"}
                      </Text>
                    </Pressable>
                  </View>
                  <Pressable style={styles.registerButton} onPress={logIn}>
                    <Text style={styles.buttonText}>Увійти</Text>
                  </Pressable>
                  <Pressable style={styles.linkWrap} >
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

