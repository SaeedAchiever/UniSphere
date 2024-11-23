import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './Style'
import { Pressable } from 'react-native'

const Phone = require("../../assets/phone.png")
const Password = require("../../assets/password.png")

const PhoneLogIn = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.LogInMainContainer}>
      {/* Note */}
      <View style={[styles.LogInContainer, {flex:0.3}]}>
        <View style={styles.LogInWelcomeContainer}>
          <Text style={styles.LogInWelcome}>Welcome back</Text>
        </View>
        <View style={styles.LogInWelcomeContainer}>
          <Text style={styles.LogInNote}>Enter your log in info to continue</Text>
        </View>
      </View>

      <View style={[styles.LogInContainer, {flex:0.4}]}>

        <View style={styles.LogInOptionsMainContainer}>
          <Text style={styles.LogInOptionsMainText}>Log in with...</Text>
          <View style={styles.LogInOptionsContainer}>
            <View style={[ styles.LogInOptionsSubContainer, {borderBottomWidth:1}]}>
              <Text style={styles.LogInOptionsText}>Phone</Text>
            </View>
            <View style={styles.LogInOptionsSubContainer}>
              <Pressable onPress={()=>{
                navigation.replace("EmailLogIn")
              }}>
               <Text style={styles.LogInOptionsText}>Email</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.inputIconsContainer}>
          <Image
            source={Phone}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Your phone here'
        />
        </View>
        <View style={styles.inputIconsContainer}>
          <Image
            source={Password}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Your password here'
        />
        </View>

        <View style={styles.logInBtn}>
          <Text style={styles.logInBtnText}>Log In</Text>
        </View>
        
      </View>

      <View style={[styles.LogInContainer, {flex:0.3}]}>
        <View style={styles.logInSignUpContainer}>
          <Text style={styles.logInSignUpText}>Not a member yet?</Text>
          <Pressable onPress={()=>{
            navigation.navigate("PhoneSignUp")
          }}>
           <Text style={styles.logInSignUpBtnText}>Join Us Now</Text>
          </Pressable>
        </View>
        <View style={styles.logInAsGuestContainer}>
          <Pressable onPress={()=>{
            navigation.navigate('UniHomePage')
          }}>
            <Text style={styles.logInAsGuestText}>Continue as a guest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default PhoneLogIn