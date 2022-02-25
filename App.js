/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  const {counter} = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch({type: 'INCREMENT'})}
          color="#5000ca"
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({type: 'DECREMENT'})}
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
