import { TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants'

const Field = props => {
  return (
    <TextInput{...props} style={{borderRadius: 100, color: darkGreen, width: '70%', height: 35, backgroundColor: 'rgb(220,220,220)', paddingHorizontal: 20, marginVertical: 10}} placeholderTextColor={darkGreen}>

    </TextInput>
  );
}

export default Field;