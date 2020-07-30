import { SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Toast } from '../../../src';
import * as React from 'react';

export default function ToastDisplay() {
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
