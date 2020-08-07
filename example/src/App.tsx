import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ServiceScreen from './Screens/ServiceScreen';
import ComponentScreen from './Screens/ComponentScreen';
import Config from 'react-native-config';
import { MapBoxClient } from '@coded-lines/throttles';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Expected style']);

MapBoxClient.initMapbox(Config.MAPBOX_GL_ACCESS_TOKEN);

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        <bottomTabNavigator.Screen
          name="Components"
          component={ComponentScreen}
        />
        <bottomTabNavigator.Screen name="Service" component={ServiceScreen} />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
