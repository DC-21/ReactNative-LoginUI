import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'
import { darkGreen } from './Constants';

const Home = () => {
  return (
    <Background>
        <View style={{ marginHorizontal: 60, marginVertical: 40}}>
        <Text style={{ color: 'white', fontSize: 64}}>Welcome</Text>
        </View>
        <Button bgColor={darkGreen} btnLabel='Log In' textColor='white'  press={() =>  { console.log('Button pressed'); }} />
    </Background>
  );
}

const styles = StyleSheet.create({})
export default Home