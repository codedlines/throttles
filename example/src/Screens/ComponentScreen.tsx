import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapDirections, TermsAndConditions } from '@coded-lines/throttles';
import { TERMS_AND_CONDITIONS } from '../constants';
import { ListItem } from 'react-native-elements';
import { STORE_LOCATION } from '../../../src/constants';
import { View } from 'react-native';

function TermsAndConditionsRouterHelper() {
  return (
    <TermsAndConditions
      text={TERMS_AND_CONDITIONS}
      onAccept={() => console.log('ok')}
    />
  );
}

function MapDirectionsRouterHelper() {
  return <MapDirections storeLocation={STORE_LOCATION} />;
}

function ComponentList({ navigation }) {
  const navigateTo = (screen) => {
    return () => {
      navigation.navigate(screen);
    };
  };

  return (
    <View>
      <ListItem
        title="Terms and conditions"
        onPress={navigateTo('Terms and conditions')}
      />
      <ListItem title="Map directions" onPress={navigateTo('Map directions')} />
    </View>
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
      <stackNavigator.Screen
        name="Map directions"
        component={MapDirectionsRouterHelper}
      />
    </stackNavigator.Navigator>
  );
}
