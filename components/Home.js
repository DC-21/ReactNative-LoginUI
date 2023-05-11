import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'
import { darkGreen } from './Constants';

const Home = (props) => {
    return (
      <Background>
          <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
          <Text style={{ color: 'white', fontSize: 64}}>Welcome</Text>
          <Button bgColor={darkGreen} btnLabel='Login' textColor='white'  press={() =>  props.navigation.navigate("Log In")} />
          <Button bgColor= 'white' btnLabel='Signup' textColor={darkGreen}  press={() =>  props.navigation.navigate("Sign Up")} />
          </View>
      </Background>
    );
  }
  

const styles = StyleSheet.create({})
export default Home