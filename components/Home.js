import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'

const Home = () => {
  return (
    <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{ color: 'white', fontSize: 64}}>Please Log In</Text>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({})
export default Home