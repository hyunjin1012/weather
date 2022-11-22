import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Just a moment... Getting the weather...</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: 'flex-end',
    paddingVertical: 100,
    paddingHorizontal: 30,
  },

  text: {
    color: "#2c2c2c",
    fontSize: 30,
  }



})

