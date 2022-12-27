import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export function SingUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Sing Up</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#ccc',
  }
});
