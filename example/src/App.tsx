import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ServiceScreen from './Screens/ServiceScreen';

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        <bottomTabNavigator.Screen name="Service" component={ServiceScreen} />
        {/*<bottomTabNavigator.Screen name="Components" component={SettingsScreen} />*/}
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
