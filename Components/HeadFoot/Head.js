import { View, Text,useWindowDimensions,Image, Modal, Pressable, AppRegistry } from 'react-native'
import React from 'react'
import  {useState}  from  'react'

import { useNavigation } from '@react-navigation/native'

import { auth } from "../../firebaseConfig"; // Import `auth` from your config

import styles from '../../Components/HomePage/HomeStyle'

import { useUser } from '../Authentication/UserContext'

const Menu  = require("../../assets/menu.png")
const CloseBtn  = require("../../assets/close.png")
const UserPic  = require("../../assets/user_3.jpg")




const Head = () => {

  const navigation  = useNavigation()

  const {userData} = useUser()

  const [isModalVisible, setIsModalVisible] = useState(false)

      // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      // const deviceHeight = useWindowDimensions().height

      const refreshApp = () => {
        const appName = 'YourAppName'; // Replace with your app's name
        const appEntry = AppRegistry.getApplication(appName);
        AppRegistry.runApplication(appName, appEntry);
      };

      const handleSignOut = () => {
        auth.signOut().then(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'EmailLogIn' }],
          });
        });
      };


  return (
    <View>

   <View style={styles.headerContainer}>

   <View onTouchEnd={
    () => setIsModalVisible(true)
   }>
     <Image  
         source={Menu} 
         style={{
                 width: deviceWidth >  500 ? 50 : 40,
                 height: deviceWidth >  500 ? 50 : 40,
                 marginRight:20,
               }}
     />

   </View>

   </View>

   <Modal
    visible={isModalVisible}
    onRequestClose={()=>{
      setIsModalVisible(false)
    }}
    animationType='slide'
    >
    <View style={styles.modalMainContainer}>

      <View
          onTouchEnd={()=>{
            setIsModalVisible(false)
          }}
          style={styles.modalButtonContainer}
      >
       <Image 
       source={CloseBtn}
       style={styles.modalButtonImage}
       />
      </View>

      <View style={styles.ModalBodyMainContainer}>
        <Pressable onPress={()=>{
          userData ?
          navigation.navigate("User_Profile") :
          navigation.navigate("EmailLogIn") 
          setIsModalVisible(false)
        }}>
          <View style={styles.ModalBodyContainer}>
            <View>
            <Image 
              source={UserPic}
              style={styles.modalUserImage}
              />
            </View>
            <View>
              <Text style={styles.modalUserText}>
                {userData ? userData.first_Name : "Guest"}
              </Text>
            </View>

          </View>
        </Pressable>

      </View>

      <View style={styles.modalLinksMainContainer}>

       <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>My Favorites</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Pressable onPress={()=>{
            navigation.navigate("ScholarshipHome")
            setIsModalVisible(false)
          }}>
           <Text style={styles.modalLinksText}>Scholarships</Text>
          </Pressable>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Notifications</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>About Us</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Contact</Text>
        </View>
        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Suggest a feature</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Rate This App</Text>
        </View>

      </View>

      { userData ? 
        <View style={styles.logOutContainer}>
          <Pressable onPress={handleSignOut}>
          <Text style={styles.logOutText}>Log out</Text>
          </Pressable>
        </View> : <View></View>
      }
    </View>

    

   </Modal>

   </View>

  )
}

export default Head