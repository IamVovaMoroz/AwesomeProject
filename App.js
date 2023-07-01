import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Button, ImageBackground, Image } from 'react-native';

// import { styles } from "./styles";
import BigButton from './BigButton';
import { defaultStyles } from './assets/fonts/fonts';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    // 1: require("./assets/fonts/Roboto/1.ttf"),
  });

  return (
    
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/c8/d7/c1/c8d7c18a6a9fd2c382299b12ef7c86c7.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={defaultStyles.headingText}>Open new world!</Text>
        <Text style={styles.text}>Привет, мир!!</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./minecraft.png')} style={styles.image} />
        </View>
        <StatusBar style="auto" />
        <Button title="Нажми на меня" onPress={() => console.log('Button pressed!')} />
        <BigButton />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'blue',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    marginTop: 10,
    color: 'green',
  },
  normalText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    marginTop: 5,
    color: 'white',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 450, // Смещение изображения вниз на 50 единиц
  },
  image: {
    width: 200,
    height: 200,
  },
});
