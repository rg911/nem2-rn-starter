import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './shim.js';
import * as nem2 from 'nem2-sdk';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>NetworkType: {nem2.NetworkType.MIJIN_TEST}</Text>
      {/* <Text>Account: {nem2.Address.createFromPublicKey('9F784BF20318AE3CA6246C0EC2207FE095FFF7A84B6787E7E3C2CE4C3B92A2EA', nem2.NetworkType.MIJIN_TEST).plain()}</Text> */}
      <Text>Account: {nem2.Account.generateNewAccount(nem2.NetworkType.MIJIN_TEST)}</Text>
    </View>
  );
}
const accountHttp = new nem2.AccountHttp('http://localhost:3000');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});