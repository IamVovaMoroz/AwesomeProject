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
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from "react-native";


// Импорт изображений и стилей
import addCross from '../../assets/fonts/images/add.png';
import { styles } from "../../styles/styles";
import PhotoBG from '../../assets/fonts/images/PhotoBG.jpg';





const RegistrationScreen = () => {
 // Использование React Hook useState для управления состоянием компонента
 const [login, setLogin] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [focusLoginInput, setFocusLoginInput] = useState(false);
 const [focusEmailInput, setFocusEmailInput] = useState(false);
 const [focusPasswordInput, setFocusPasswordInput] = useState(false);
 const [hidePassword, setHidePassword] = useState(true);


  // Функция при регистрации , скидываем таблицу

  const signIn = () => {
    setLogin("");
    setEmail("");
    setPassword("");
    Alert.alert("Реєстрація успішна", "Ви були успішно зареєстровані.");
  };

   // Функция для переключения отображения пароля
   const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

 
  

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
     
       <ImageBackground source={PhotoBG} style={styles.imagebg} resizeMode="cover">


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView contentContainerStyle={styles.scrollArea}>
              <View style={styles.registerContainer}>
                <View style={styles.avatarContainer}>
                  <View style={styles.pictureContainer}></View>
                  <Image style={styles.addCross} source={addCross} />
                
                </View>


                <Text style={styles.text}>Реєстрація</Text>

                <View>
                  <View>

                    <TextInput
                      placeholder="Логін"
                      value={login}
                      onChangeText={setLogin}
                      onFocus={() => setFocusLoginInput(true)}
                      onBlur={() => setFocusLoginInput(false)}
                      style={
                        focusLoginInput
                          ? [styles.input, styles.focusedInput]
                          : styles.input
                      }
                    ></TextInput>
                  </View>
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
                      placeholder="Пароль"
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

                    <Pressable style={styles.pressableShowPassword}  onPress={togglePassword}>

                    <Text style={styles.showPasswordText}>
                      {hidePassword ? "Показати" : "Сховати"}
                    </Text>
                      
                    </Pressable>
                  </View>

                  <Pressable style={styles.registerButton} onPress={signIn}>

                    <Text style={styles.buttonText}>Зареєструватися</Text>
                  </Pressable>

                  <Pressable style={styles.linkWrap}>
                    <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
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

export default RegistrationScreen;

