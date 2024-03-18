import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Wrapper from '@src/screens/Wrapper/WrapperComp';
import Text from '@src/components/text/Text.jsx';
import Button from '@src/components/button/Button';
import { ScreenWidth, ScreenHeight } from '@src/helpers';

const Onboarding = ({ navigation }) => {
  return (
    <Wrapper isBackgroundImage>
      <View style={styles.container}>
        <View style={styles.flex3}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@src/assets/Images/IntroImage2.jpg')}
              style={styles.introImage}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.headingText}>Find Your Flight</Text>
          <Text style={styles.otherText}>
            Let&#39;s elevate travel together! 🚀✨
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              style={{ width: ScreenWidth - 40, bottom: 0 }}
              text={'Get Started!'}
              onPress={() => navigation.replace('home')}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: ScreenWidth / 1.5,
    height: ScreenHeight / 1.8,
    elevation: 5,
    marginTop: 20,
    borderRadius: 40,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  flex3: {
    flex: 3,
  },
  introImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  otherText: {
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 20,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default Onboarding;
