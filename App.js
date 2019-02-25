import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm Muhammad Hafizhilmi bin Mohd Salehen</Text>
        <Text>Today I  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbf00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
