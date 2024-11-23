import { View, Text, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

import styles from './Style'
import { Pressable } from 'react-native'

const Phone = require("../../assets/phone.png")
const Password = require("../../assets/password.png")
const Name = require("../../assets/name.png")
const Position = require("../../assets/position.png")

const PhoneSignUp = () => {
  const [selectedValue, setSelectedValue] = useState('Student')

  const navigation = useNavigation()

  return (
    <View style={styles.LogInMainContainer}>
      
      <View style={[styles.LogInContainer, {flex:0.3}]}>
        <View style={styles.LogInWelcomeContainer}>
          <Text style={styles.LogInWelcome}>Join thousands of students</Text>
        </View>
        <View style={styles.LogInWelcomeContainer}>
          <Text style={styles.LogInNote}>Enter your credentials below to continue</Text>
        </View>
      </View>

      <View style={[styles.LogInContainer, {flex:0.4}]}>

        <View style={styles.LogInOptionsMainContainer}>
          <Text style={styles.LogInOptionsMainText}>Sign up in with...</Text>
          <View style={styles.LogInOptionsContainer}>
            <View style={[ styles.LogInOptionsSubContainer, {borderBottomWidth:1}]}>
              <Text style={styles.LogInOptionsText}>Phone</Text>
            </View>
            <View style={styles.LogInOptionsSubContainer}>
              <Pressable onPress={()=>{
                navigation.replace("EmailSignUp")
              }}>
               <Text style={styles.LogInOptionsText}>Email</Text>
              </Pressable>
            </View>
          </View>
        </View>
        
        <View style={styles.inputIconsContainer}>
          <Image
            source={Name}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='First Name'
        />
        </View>
        <View style={styles.inputIconsContainer}>
          <Image
            source={Name}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Other Names'
        />
        </View>
        <View style={styles.inputIconsContainer}>
          <Image
            source={Position}
            style={styles.inputIcons}
          />
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{ height: '100%', width: '90%' }}
        >
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Applicant" value="Applicant" />
        <Picker.Item label="Lecturer" value="Lecturer" />
        <Picker.Item label="Guest" value="Guest" />
        <Picker.Item label="University Rep" value="University Rep" />
        </Picker>
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
          <Text style={styles.logInBtnText}>Join Now</Text>
        </View>
        
      </View>

      <View style={[styles.LogInContainer, {flex:0.3}]}>
        <View style={styles.logInSignUpContainer}>
          <Text style={styles.logInSignUpText}>Already a member?</Text>
          <Pressable onPress={()=>{
            navigation.navigate("PhoneLogIn")
          }}>
           <Text style={styles.logInSignUpBtnText}>Log In Here</Text>
          </Pressable>
        </View>
        <View style={styles.logInAsGuestContainer}>
          <Pressable onPress={()=>{
            navigation.navigate('HomePage')
          }}>
            <Text style={styles.logInAsGuestText}>Continue as a guest</Text>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

export default PhoneSignUp