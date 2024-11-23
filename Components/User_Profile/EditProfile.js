import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../../firebaseConfig';
import { useUser } from '../Authentication/UserContext';
import { Picker } from '@react-native-picker/picker';
import styles from './Style';

const UserBG = require("../../assets/ug.jpeg");
const MainUser = require("../../assets/user_1.jpg");

const EditProfile = () => {
  const { userData } = useUser(); // Get user data from the context
  const width = useWindowDimensions().width;


  // Local state for editing profile fields
  const [first_Name, setFirst_Name] = useState(userData.first_Name || "");
  const [other_Name, setOther_Name] = useState(userData.other_Name || "");
  const [username, setUsername] = useState(userData.username || "");
  const [selectedValue, setSelectedValue] = useState(userData.selectedValue || "");

  const EditFunction = async () => {
    try {
      // Update Firestore document
      await setDoc(doc(firestore, "users", auth.currentUser.uid), {
        first_Name,
        other_Name,
        username,
        selectedValue,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.EditProfileMainContainer}>
        <View>
          <View style={[styles.profileHeaderUserBGContainer, { height: width > 600 ? 150 : 110 }]}>
            <Image source={UserBG} style={styles.profileHeaderUserBGImage} />
          </View>
          <View style={[styles.MainUserImageContainer, { marginTop: -30 }]}>
            <Image source={MainUser} style={styles.MainUserImage} />
          </View>
        </View>

        <View style={styles.EditProfileBodyContainer}>
          {/* First Name */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              value={first_Name}
              onChangeText={setFirst_Name}
              placeholder="First Name"
              style={styles.EditProfileTextInput}
            />
          </View>

          {/* Other Name */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              value={other_Name}
              onChangeText={setOther_Name}
              placeholder="Other Name"
              style={styles.EditProfileTextInput}
            />
          </View>

          {/* Username */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              value={`${username}`}
              onChangeText={setUsername}
              placeholder="Username"
              style={styles.EditProfileTextInput}
            />
          </View>

          <View style={[styles.EditProfileTextContainer,{justifyContent:'center'}]}>
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
        </View>

        {/* Save Button */}
        <View style={styles.saveBtn}>
          <Pressable onPress={EditFunction}>
            <Text style={styles.saveBtnText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
