import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background';
import { darkGreen } from './Constants';
import Field from './Field';

const Login = () => {
  return (
    <Background>
      <View style={{ alignItems:'center', width: 360}}>
      <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
      <View style={{ backgroundColor: 'white', height: 600, width: 390, borderTopLeftRadius: 170, paddingTop: 100, alignItems: 'center'}}>
        <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold"}}>Welcome back</Text>
        <Text style={{ fontSize: 20, color: darkGreen, fontWeight: "bold", marginBottom: 20}}>Login to your account</Text>
        <Field placeholder='Email' keyboardType={"email-address"} />
        <Field placeholder='Password' secureTextEntry={true}/>
        <View>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Forgot Password?
          </Text>
        </View>
      </View>
    </View>
    </Background>
  )
}

export default Login;
