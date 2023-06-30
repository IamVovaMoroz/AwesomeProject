import React from 'react';
import { TouchableOpacity, Button, Text, StyleSheet } from 'react-native';

function BigButton() {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={styles.text}>Styled Button</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BigButton;