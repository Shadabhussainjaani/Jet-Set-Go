import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, useColorScheme } from 'react-native';

const TextElement = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const { style, children, ...rest } = props;

  return (
    <Text
      style={StyleSheet.flatten([styles.text, StyleSheet.flatten([style])])}
      {...rest}>
      {children}
    </Text>
  );
};

const getStyles = isDarkMode => {
  return StyleSheet.create({
    text: {
      textAlign: 'left',
      color: 'black',
    },
  });
};

export default TextElement;
