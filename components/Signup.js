import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background';
import { darkGreen } from './Constants';
import Field from './Field';
import Button from './Button';

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems:'center', width: 360}}>
      <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Signup</Text>
      <View style={{ backgroundColor: 'white', height: 600, width: 390, borderTopLeftRadius: 170, paddingTop: 20, alignItems: 'center'}}>
        <Text style={{ fontSize: 20, color: darkGreen, fontWeight: "bold", marginBottom: 20}}>Create account</Text>
        <Field placeholder='Fullname' />
        <Field placeholder='Phone number' keyboardType={"number"} />
        <Field placeholder='Email' keyboardType={"email-address"} />
        <Field placeholder='Password' secureTextEntry={true}/>
        <Field placeholder='Comfirm Password' secureTextEntry={true}/>
        <View style={{display: 'flex',flexDirection: "row", width: '88%', paddingRight: 16, marginBottom:20}}>
          <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>
          By Signing up you agree to our {" "}
          </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 15}}>Terms & Conditions</Text>
        </View>
        <View style={{display: 'flex',flexDirection: "row", justifyContent: 'center', width: '88%', paddingRight: 16, marginBottom:20}}>
          <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>
          and {" "}
          </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 15}}>Privacy Policies</Text>
        </View>
        <Button bgColor={darkGreen} btnLabel='Signup' textColor='white' press={() => alert
        ('Account Created')} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </Background>
  )
}

export default Signup;
