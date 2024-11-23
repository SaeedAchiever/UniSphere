import { View, Text, TextInput, Image, ScrollView, Alert, ActivityIndicator,Pressable } from 'react-native'
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'

import { auth, firestore } from "../../firebaseConfig"; // Import `auth` and `firestore`
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import auth function
import { setDoc, doc } from "firebase/firestore"; // Import Firestore functions


import styles from './Style'

const Email = require("../../assets/email.png")
const Password = require("../../assets/password.png")
const Name = require("../../assets/name.png")
const Position = require("../../assets/position.png")

const EmailSignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_Name, setFirst_Name] = useState("");
  const [other_Name, setOther_Name] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Student')

  const navigation = useNavigation()

  // Sign Up Here

  const handleSignUp = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // Store user info in Firestore
        await setDoc(doc(firestore, "users", user.uid), {
          first_Name,
          other_Name,
          selectedValue,
          email,
        });
        setLoading(false);
        setFirst_Name(""),
        setOther_Name("")
        setSelectedValue("Student")
        setEmail("")
        setPassword("")
        Alert.alert("Account created successfully, Log In to continue");
        navigation.navigate("EmailLogIn");
      })
      .catch(error => {
        setLoading(false);
        Alert.alert("Sign up error", error.message);
      });
  }

  return (
    <ScrollView>
      <View style={styles.LogInMainContainer}>
      {/* Note */}
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
            <View style={[ styles.LogInOptionsSubContainer, ]}>
              <Pressable onPress={()=>{
                navigation.navigate("PhoneSignUp")
              }}>

              <Text style={styles.LogInOptionsText}>Phone</Text>
              </Pressable>
            </View>
            <View style={[ styles.LogInOptionsSubContainer, {borderBottomWidth:1}]}>
              <Text style={styles.LogInOptionsText}>Email</Text>
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
          value={first_Name}
          onChangeText={setFirst_Name}
        />
        </View>
        <View style={styles.inputIconsContainer}>
          <Image
            source={Name}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Other Names'
          value={other_Name}
          onChangeText={setOther_Name}
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
            source={Email}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Your email here'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        </View>
        <View style={styles.inputIconsContainer}>
          <Image
            source={Password}
            style={styles.inputIcons}
          />
        <TextInput 
          placeholder='Your password here'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // This ensures the text appears as a password
          autoCapitalize="none" // Disables automatic capitalization
          autoCorrect={false}
        />
        </View>

        <View style={{alignSelf:'flex-end', marginRight:30}}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={styles.logInBtn}>
              <Pressable onPress={handleSignUp}>
                <Text style={styles.logInBtnText}>Sign Up</Text>
              </Pressable>
            </View>
          )}
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
            navigation.navigate('UniHomePage')
          }}>
            <Text style={styles.logInAsGuestText}>Continue as a guest</Text>
          </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
  )
}

export default EmailSignUp