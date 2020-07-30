import * as React from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ToastDisplay from './ToastScreen';

function ServiceList({ navigation }) {
  const navigateToToastScreen = () => navigation.navigate('Toasts');

  return (
    <View>
      <ListItem
        key="0"
        title="Toasts"
        bottomDivider
        onPress={navigateToToastScreen}
      />
    </View>
  );
}

export default function ServiceScreen() {
  const stackNavigator = createStackNavigator();

  return (
    <stackNavigator.Navigator>
      <stackNavigator.Screen name="Service list" component={ServiceList} />
      <stackNavigator.Screen name="Toasts" component={ToastDisplay} />
    </stackNavigator.Navigator>
  );
}
