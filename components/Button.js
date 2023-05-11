import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ bgColor, btnLabel, textColor, press }) {
  return (
    <TouchableOpacity  onPress={press} style={{ backgroundColor: bgColor, borderRadius: 100,marginVertical: 10, alignItems: 'center', width: 270, paddingVertical: 5}}>
        <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold'}}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
