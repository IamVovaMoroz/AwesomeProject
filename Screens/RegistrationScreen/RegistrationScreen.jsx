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
} from "react-native";

import addCross from '../../assets/fonts/images/add.png';
import { styles } from "../../styles/styles";
import PhotoBG from '../../assets/fonts/images/PhotoBG.jpg';
const RegistrationScreen = () => {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ImageBackground
      
    //   source={require("./assets/fonts/images/photoBG.jpg")}
    //   source={{ uri: 'https://i.pinimg.com/236x/c8/d7/c1/c8d7c18a6a9fd2c382299b12ef7c86c7.jpg' }}
     
      
        // source={require("./assets/fonts/images/photoBG.jpg")}
        style={styles.imagebg}
        resizeMode="cover"
      > */}
       <ImageBackground source={PhotoBG} style={styles.imagebg} resizeMode="cover">
        <TouchableWithoutFeedback>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView contentContainerStyle={styles.scrollArea}>
              <View style={styles.registerContainer}>
                <View style={styles.avatarContainer}>
                  <View style={styles.pictureContainer}></View>
                  <Image style={styles.addCross} source={addCross} />
                  {/* <Image style={styles.addCross} 
                   source={{ uri: 'https://w7.pngwing.com/pngs/956/962/png-transparent-plus-circle-linear-icon.png' }} /> */}
                </View>

                <Text style={styles.text}>Реєстрація</Text>

                <View>
                  <View>
                    <TextInput
                      placeholder="Логін"
                      style={styles.input}
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      placeholder="Адреса електронної пошти"
                      style={styles.input}
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      placeholder="Пароль"
                      style={styles.input}
                    ></TextInput>
                    <Pressable style={styles.pressableShowPassword}>
                      <Text style={styles.showPasswordText}>Показати</Text>
                    </Pressable>
                  </View>
                  <Pressable style={styles.registerButton}>
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

// import React from "react";
// import { useState } from "react";
// import {
//   StatusBar,
//   View,
//   ImageBackground,
//   Text,
//   TextInput,
//   Image,
//   Pressable,
//   Button,
//   ScrollView,
//   TouchableWithoutFeedback,
//   KeyboardAvoidingView,
//   Keyboard,
// } from "react-native";

// import PhotoBG from "../../assets/images/PhotoBG.jpg";
// import addCross from "../../assets/images/add.png";
// import { styles } from "../../styles";

// const RegistrationScreen = () => {
//   const [login, setLogin] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [focusLoginInput, setFocusLoginInput] = useState(false);
//   const [focusEmailInput, setFocusEmailInput] = useState(false);
//   const [focusPasswordInput, setFocusPasswordInput] = useState(false);
//   const [hidePassword, setHidePassword] = useState(true);

//   const signIn = () => {
//     setLogin("");
//     setEmail("");
//     setPassword("");
//   };

//   const togglePassword = () => {
//     setHidePassword(!hidePassword);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <ImageBackground
//         source={PhotoBG}
//         style={styles.imagebg}
//         resizeMode="cover"
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.container}
//           >
//             <ScrollView contentContainerStyle={styles.scrollArea}>
//               <View style={styles.registerContainer}>
//                 <View style={styles.avatarContainer}>
//                   <View style={styles.pictureContainer}></View>
//                   <Image style={styles.addCross} source={addCross} />
//                 </View>

//                 <Text style={styles.text}>Реєстрація</Text>

//                 <View>
//                   <View>
//                     <TextInput
//                       placeholder="Логін"
//                       value={login}
//                       onChangeText={setLogin}
//                       onFocus={() => setFocusLoginInput(true)}
//                       onBlur={() => setFocusLoginInput(false)}
//                       style={
//                         focusLoginInput
//                           ? [styles.input, styles.focusedInput]
//                           : styles.input
//                       }
//                     ></TextInput>
//                   </View>
//                   <View>
//                     <TextInput
//                       placeholder="Адреса електронної пошти"
//                       value={email}
//                       onChangeText={setEmail}
//                       onFocus={() => setFocusEmailInput(true)}
//                       onBlur={() => setFocusEmailInput(false)}
//                       style={
//                         focusEmailInput
//                           ? [styles.input, styles.focusedInput]
//                           : styles.input
//                       }
//                     ></TextInput>
//                   </View>
//                   <View>
//                     <TextInput
//                       placeholder="Пароль"
//                       value={password}
//                       onChangeText={setPassword}
//                       secureTextEntry={hidePassword}
//                       onFocus={() => setFocusPasswordInput(true)}
//                       onBlur={() => setFocusPasswordInput(false)}
//                       style={
//                         focusPasswordInput
//                           ? [styles.input, styles.focusedInput]
//                           : styles.input
//                       }
//                     ></TextInput>
//                     <Pressable
//                       style={styles.pressableShowPassword}
//                       onPress={togglePassword}
//                     >
//                       <Text style={styles.showPasswordText}>
//                         {hidePassword ? "Показати" : "Сховати"}
//                       </Text>
//                     </Pressable>
//                   </View>
//                   <Pressable onPress={signIn} style={styles.registerButton}>
//                     <Text style={styles.buttonText}>Зареєструватися</Text>
//                   </Pressable>
//                   <Pressable style={styles.linkWrap}>
//                     <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
//                   </Pressable>
//                 </View>
//               </View>
//             </ScrollView>
//           </KeyboardAvoidingView>
//         </TouchableWithoutFeedback>
//       </ImageBackground>
//     </View>
//   );
// };

// export default RegistrationScreen;
