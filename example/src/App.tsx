import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ScratchEffectView  from 'react-native-scratch-effect';

export default function App() {
  return (
    <View style={styles.container}>
      <ScratchEffectView  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
