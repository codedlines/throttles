import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Toast } from '@coded-lines/throttles';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => {
          Toast.showToastLongCenter('Long');
        }}
        title="Click for long toast"
      />
      <Button
        onPress={() => {
          Toast.showToastShortCenter('Short');
        }}
        title="Click for short toast"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
