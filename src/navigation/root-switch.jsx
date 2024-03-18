import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from '@src/screens/Onboarding/Onboarding';
import FlightsListing from '@src/screens/Flights/FlightsListing';
import HomeScreen from '@src/screens/Home/Homescreen';

function RootStack({}) {
  const Stack = createStackNavigator();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const screens = [
    { name: 'onboarding', component: Onboarding },
    { name: 'flightDetails', component: FlightsListing },
    { name: 'home', component: HomeScreen },
  ];
  return (
    <>
      <Stack.Navigator initialRouteName={'onboarding'}>
        {screens?.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
            options={{
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}

export default RootStack;
