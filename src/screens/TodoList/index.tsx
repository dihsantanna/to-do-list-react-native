import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export function TodoList() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Todo List</Text>
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
