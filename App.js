// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Platform, Button, ImageBackground, Image } from 'react-native';

// // import { styles } from "./styles";
// import BigButton from './BigButton';
// import { defaultStyles } from './assets/fonts/fonts';
// import { useFonts } from "expo-font";
// // import PhotoBg from "../../assets/images/PhotoBG.jpg";

// // import PhotoBg from "../AwesomeProject/assets/fonts/images/Photo BG.jpg"
// import PhotoBG from "./assets/fonts/images/PhotoBG.jpg";
// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//     1: require("./assets/fonts/Roboto/1.ttf"),
//   });

//  // Если шрифты еще не загружены, можно показать загрузочный экран или другую индикацию загрузки
//   if (!fontsLoaded) {
//     return null;
//   }

  
//   return (
//     <RegistrationScreen />;
//     // <ImageBackground
//     // source={PhotoBG}
//     // style={styles.image}
//     // resizeMode="cover"

//       // source={{ uri: 'https://i.pinimg.com/236x/c8/d7/c1/c8d7c18a6a9fd2c382299b12ef7c86c7.jpg' }}
//       // style={styles.backgroundImage}



//     // >
//       {/* <View style={styles.container}> */}
//         {/* <Text style={defaultStyles.headingText}>Open new world!</Text> */}
//         {/* <Text style={[styles.text, { fontFamily: 'Roboto-Bold' }]}>Привет, мир1!!</Text> */}
//         {/* <Text style={styles.text}>Привет, мир!!</Text> */}
//         {/* <View style={styles.imageContainer}>
//           <Image source={require('./minecraft.png')} style={styles.image} />
//         </View> */}
//         {/* <StatusBar style="auto" /> */}
//         {/* <Button title="Нажми на меня" onPress={() => console.log('Button pressed!')} />
//         <BigButton /> */}
//       {/* </View>
//     </ImageBackground> */}
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: 'blue',
//   },
//   headingText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     fontFamily: 'Roboto-Bold',
//     marginTop: 10,
//     color: 'green',
//   },
//   normalText: {
//     fontSize: 16,
//     fontFamily: 'Roboto-Medium',
//     marginTop: 5,
//     color: 'white',
//   },
//   imageContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 450, // Смещение изображения вниз на 50 единиц
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });



// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
// import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

// import BigButton from './BigButton';
// import { defaultStyles } from './assets/fonts/fonts';

// import PhotoBG from './assets/fonts/images/PhotoBG.jpg';

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Roboto_400Regular,
//     Roboto_500Medium,
//     Roboto_700Bold,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <ImageBackground source={PhotoBG} style={styles.image} resizeMode="cover">
//       <View style={styles.container}>
//         <Text style={defaultStyles.headingText}>Open new world!</Text>
//         <Text style={styles.text}>Привет, мир!!</Text>
//         <StatusBar style="auto" />
//         <Button title="Нажми на меня" onPress={() => console.log('Button pressed!')} />
//         <BigButton />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: 'blue',
//   },
// });

import { View, Text } from "react-native";
import { styles } from "./styles/styles";

import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "./Screens/ LoginScreen/ LoginScreen";

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

  // return <LoginScreen />;
  return <RegistrationScreen />;
}