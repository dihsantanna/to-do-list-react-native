import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export function SingIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Sing In</Text>
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
