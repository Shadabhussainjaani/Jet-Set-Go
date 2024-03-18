import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from '@src/containers/Tabbar';
import HomeScreen from '@src/screens/Home/Homescreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs(peops) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
    </Tab.Navigator>
  );
}
