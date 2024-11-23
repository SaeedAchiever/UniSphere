import { StatusBar,View,ActivityIndicator } from 'react-native';

import UniData from './Components/Uni_Data/UniData';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import ColHomePage from './Components/HomePage/ColHomePage';
import UniHomePage from './Components/HomePage/UniHomePage';

import HomePage from './Components/HomePage/HomePage';
import UniversityHome from './Components/University/UniversityHome';
import ScholarshipHome from './Components/Scholarship/ScholarshipHome';
import Updates from './Components/Updates/Updates'
import CollegeHome from './Components/College/CollegeHome'
import Shorts from './Components/Shorts/Shorts';
import User_Profile from './Components/User_Profile/User_Profile';

import EmailLogIn from './Components/Authentication/EmailLogIn';
import PhoneLogIn from './Components/Authentication/PhoneLogIn';
import PhoneSignUp from './Components/Authentication/PhoneSignUp';
import EmailSignUp from './Components/Authentication/EmailSignUp';

import { UserProvider } from './Components/Authentication/UserContext';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

const Stack = createNativeStackNavigator();

return (
    <View style={{flex:1}}>

      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator 
           initialRouteName={user ? "UniHomePage" : "EmailLogIn"}
           screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='PhoneLogIn' component={PhoneLogIn}  />
            <Stack.Screen name='EmailLogIn' component={EmailLogIn}  />
            <Stack.Screen name='EmailSignUp' component={EmailSignUp}  />
            <Stack.Screen name='PhoneSignUp' component={PhoneSignUp}  />
            <Stack.Screen name='HomePage' component={HomePage}  />
            <Stack.Screen name='UniHomePage' component={UniHomePage}  />
            <Stack.Screen name='ColHomePage' component={ColHomePage}  />
            <Stack.Screen name='UniData' component={UniData}  />
            <Stack.Screen name='UniversityHome' component={UniversityHome}  />
            <Stack.Screen name='ScholarshipHome' component={ScholarshipHome}  />
            <Stack.Screen name='Updates' component={Updates}  />
            <Stack.Screen name='CollegeHome' component={CollegeHome}  />
            <Stack.Screen name='Shorts' component={Shorts}  />
            <Stack.Screen name='User_Profile' component={User_Profile}  />
          </Stack.Navigator>

          {/* <Footer/> */}
          <StatusBar  backgroundColor={'#000'} />

        </NavigationContainer>
      </UserProvider>

    </View>

  );
}

export default App