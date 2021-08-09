import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  
  auth.onAuthStateChanged((user) => {
    if (user) {
    setSignedIn(true);
    } else {
    setSignedIn(false);
    }
    });

    return (
      <View style={styles.container}>
        {signedIn
          ? (
            <Text>Signed in</Text>
          ) : (
            <Text>Not signed in</Text>
          )
        } 
        </View>
      );
      
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
