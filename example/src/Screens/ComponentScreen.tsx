import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TermsAndConditions } from '@coded-lines/throttles';
import { TERMS_AND_CONDITIONS } from '../constants';
import { ListItem } from 'react-native-elements';

function TermsAndConditionsRouterHelper() {
  return (
    <TermsAndConditions
      text={TERMS_AND_CONDITIONS}
      onAccept={() => console.log('ok')}
    />
  );
}

function ComponentList({ navigation }) {
  const goToTermsNConditions = () => {
    navigation.navigate('Terms and conditions');
  };

  return (
    <ListItem title="Terms and conditions" onPress={goToTermsNConditions} />
  );
}

export default function ComponentScreen() {
  const stackNavigator = createStackNavigator();
  return (
    <stackNavigator.Navigator>
      <stackNavigator.Screen name="Component list" component={ComponentList} />
      <stackNavigator.Screen
        name="Terms and conditions"
        component={TermsAndConditionsRouterHelper}
      />
    </stackNavigator.Navigator>
  );
}
