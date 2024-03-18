import React from 'react';
import { View, useColorScheme, StyleSheet, Image } from 'react-native';
import { ScreenWidth } from '@src/helpers';

const WrapperComp = ({ children, isBackgroundImage }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);
  return (
    <>
      <View style={styles.container}>
        {isBackgroundImage && (
          <Image
            source={require('@src/assets/Images/background.jpeg')}
            style={{
              position: 'absolute',
              height: ScreenWidth / 1.5,
              width: ScreenWidth,
            }}
          />
        )}
        {children}
      </View>
    </>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
  });
};

export default WrapperComp;
