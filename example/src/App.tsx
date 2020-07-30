import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Toast } from '@coded-lines/throttles';

export default function App() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        Toast.showToastLongCenter('clicked');
      }}
    >
      <Text>Click me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
