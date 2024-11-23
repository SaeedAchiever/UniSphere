import { View, Text,Image,useWindowDimensions, Modal,Alert,Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './Style'
import EditProfile from './EditProfile'

const UserBG = require("../../assets/ug.jpeg")
const MainUser = require("../../assets/user_1.jpg")
const Close = require("../../assets/close.png")


import { useUser } from '../Authentication/UserContext';

export default function ProfileHeader() {

 const width = useWindowDimensions().width

 const [isModalVisible, setIsModalVisible] = useState(false)

 const navigation = useNavigation()


const {userData} = useUser()

  return (
    <View style={styles.profileHeaderMainContainer}>
       <View style={[styles.profileHeaderUserBGContainer, {height : width > 600 ? 150 : 110}]}>

        <View style={styles.profileHeaderUserNameContainer}>
         <Text style={styles.profileHeaderUserName}>
           {userData ? userData.first_Name + " " + userData.other_Name : "Guest"}
         </Text>
          <View style={styles.editProfile}>
            <Pressable onPress={()=>{
              setIsModalVisible(true)
            }}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <Image 
         source={UserBG}
         style={styles.profileHeaderUserBGImage}
        />
       </View>

       <View style={styles.MainUserImageMainContainer}>
        <View style={styles.MainUserImageContainer}>
         <Image 
          source={MainUser}
          style={styles.MainUserImage}
         />
         
        </View>

        <View style={styles.MainUserInfo}>
         <View>
          <Text
           style={[styles.MainUserInfoText,{
           fontSize:18
          }]}>
            {userData ? userData.first_Name : "Guest"}
          </Text>
          <Text
           style={[styles.MainUserInfoText,{
           fontSize:12,textTransform:'none'
          }]}>{userData ? `@${userData.username}` : "No Username Availble"}</Text>
         </View>
         <View style={styles.MainUserFanNVidContainer}>
          <Text 
           style={[styles.MainUserInfoText,{
           fontSize:12,
          }]}>120K Fans • 12 Videos</Text>
         </View>
        </View>
       </View>

       <View style={styles.UserBioContainer}>
         <Text style={styles.UserBio}>Id est mollit incididunt aliquip velit.Id est mollit incididunt aliquip velit.Id est mollit incididunt aliquip velit.Id est mollit incididunt aliquip velit.Id est mollit incididunt aliquip velit.Id est mollit incididunt aliquip velit.</Text>
       </View>

       <View style={styles.UserBioButtonContainer}>
         <Text style={styles.UserBioBtn}>Up load A video</Text>
       </View>

       {/* Edit Profile */}

       <View>
        <Modal
         visible={isModalVisible}
         animationType='slide'
        >
        <View 
        onTouchEnd={()=>{
          setIsModalVisible(false)
        }}
        style={{
          position:'absolute',
          left:20,top:20,
          zIndex:100
        }}
      >
        <Image 
          source={Close}
          style={{
            width:35,
            height:35
          }}
        />
        </View>

         <EditProfile />

        </Modal>
       </View>
    </View>
  )
}