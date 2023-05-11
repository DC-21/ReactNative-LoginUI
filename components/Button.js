import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ bgColor, btnLabel, textColor }) {
  return (
    <TouchableOpacity style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 250}}>
        <Text style={{ color: textColor, fontSize: 64, fontWeight: 'bold'}}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
