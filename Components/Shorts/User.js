import { View, Text,useWindowDimensions,Pressable } from 'react-native'
import React from 'react'
import styles from './Style'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const UserProfile = require("../../assets/user_3.jpg")
const Follow = require("../../assets/plus.png")

const User = ({item}) => {

 const width = useWindowDimensions().width
 const navigation = useNavigation()

  return (
    <View style={styles.UserSubMainContainer}>
      <View style={styles.UserProfileContainer}>
     <Pressable onPress={()=>{
      navigation.navigate("User_Profile")
     }}>
      <View style={styles.UserProfileSubContainer}>
       <View
        style={[styles.UserProfileImageContainer,{
         width: width > 600 ? 60 : 40,
         height: width > 600 ? 60 : 40
        }]}>
        <Image
         source={UserProfile}
         style={styles.UserProfileImage}
        />
        <View style={styles.followContainer}>
          <Image
          source={Follow}
          style={styles.followImage}
          />
        </View>
       </View>
       <Text style={[styles.UserName, {
        fontSize: width > 600 ? 18 : 15
       }]}>{`${item.username}`}</Text>
       </View>
       
     </Pressable>
      </View>


      <View style={styles.videoCaptionMainContainer}>
       <Text style={[styles.UserName, {
        fontSize: width > 600 ? 18 : 13
       }]}>{`${item.description}`}</Text>
      </View>
    </View>
  )
}

export default User