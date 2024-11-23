import { View, Text, TextInput, Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { auth, firestore } from "../../firebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import styles from './Style'
import { Pressable } from 'react-native'

const Email = require("../../assets/email.png")
const Password = require("../../assets/password.png")

import { useUser } from './UserContext'; // Import the useUser hook

const EmailLogIn = () => {
  const navigation = useNavigation();
  const { setUserData } = useUser(); // Use setUserData from the context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid);
      }
    });
    return unsubscribe;
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(firestore, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserData(userData); // Set user data in context
        navigation.replace("UniHomePage");
      } else {
        Alert.alert("User data not found");
      }
    } catch (error) {
      Alert.alert("Error fetching user data", error.message);
    }
  };

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await fetchUserData(user.uid);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Login error", error.message);
      });
  };

  return (
    <ScrollView>
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
            <View style={styles.LogInOptionsSubContainer}>
              <Pressable onPress={()=>{
                navigation.replace("PhoneLogIn")
              }}>
               <Text style={styles.LogInOptionsText}>Phone</Text>
              </Pressable>
            </View>
            <View style={[styles.LogInOptionsSubContainer,{borderBottomWidth:1}]}>
              <Text style={styles.LogInOptionsText}>Email</Text>
            </View>
          </View>
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

        

        {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.logInBtn}>
          <Pressable onPress={handleLogin}>
            <Text style={styles.logInBtnText}>Log In</Text>
          </Pressable>
        </View>
      )}
        
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
    </ScrollView>
  )
}

export default EmailLogIn