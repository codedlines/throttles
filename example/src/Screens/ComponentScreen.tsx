import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  GdprDataList,
  MapDirections,
  TermsAndConditions,
} from '@coded-lines/throttles';
import { ListItem } from 'react-native-elements';
import { store, getGdprListData, TERMS_AND_CONDITIONS } from '../constants';
import { View } from 'react-native';
import { Contact } from '@coded-lines/throttles';

function TermsAndConditionsRouterHelper() {
  return (
    <TermsAndConditions
      text={TERMS_AND_CONDITIONS}
      onAccept={() => console.log('ok')}
    />
  );
}

function MapDirectionsRouterHelper() {
  return <MapDirections storeLocation={store.STORE_LOCATION} />;
}

function ContactRouterHelper({ navigate }) {
  const onLocationClick = () => {
    return () => {
      navigate.navigation('Map Directions');
    };
  };

  return (
    <Contact
      onLocationClick={onLocationClick}
      phoneNumber={store.PHONE_NUMBER}
      locationText={store.LOCATION_TEXT}
    />
  );
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
      <ListItem
        title="Ways of contact"
        onPress={navigateTo('Ways of contact')}
      />
      <ListItem title="Privacy center" onPress={navigateTo('Privacy center')} />
    </View>
  );
}

function GdprSublistRouterHelper() {
  return <GdprDataList listData={getGdprListData().privacyCenter} />;
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
      <stackNavigator.Screen
        name="Ways of contact"
        component={ContactRouterHelper}
      />
      <stackNavigator.Screen
        name="Privacy center"
        component={GdprSublistRouterHelper}
      />
    </stackNavigator.Navigator>
  );
}
