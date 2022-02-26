/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {atom, useRecoilState} from 'recoil';

const counterState = atom({
  key: 'counterState',
  default: 0,
});
const App = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => setCounter(counter + 1)}
          color="#5000ca"
        />
        <Button
          title="Decrement"
          onPress={() => setCounter(counter - 1)}
          color="#5000ca"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 70,
    color: '#5000ca',
  },
});
export default App;
