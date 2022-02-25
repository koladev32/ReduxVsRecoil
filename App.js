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
    <SafeAreaView>
      <View style={styles.CounterContainer}>
        <Text>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch({type: 'INCREMENT'})}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({type: 'DECREMENT'})}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CounterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default App;
