import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ style, text, onPress }) => {
  const styles = getStyles();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      height: 50,
    },
    button: {
      backgroundColor: '#000000',
      width: '100%',
      height: '100%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: { color: '#ffffff' },
  });
};

export default Button;
