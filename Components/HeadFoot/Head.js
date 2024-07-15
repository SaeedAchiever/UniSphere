import { View, Text,useWindowDimensions,Image,StatusBar, Modal, } from 'react-native'
import React from 'react'
import  {useState}  from  'react'

import styles from '../../Components/HomePage/HomeStyle'
import { SafeAreaView } from 'react-native-safe-area-context'

const Menu  = require("../../assets/menu.png")
const CloseBtn  = require("../../assets/close.png")
const UserPic  = require("../../assets/user_3.jpg")


const Head = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

                    // DEFINING  WIDTH AND HEIGHT 
                    const deviceWidth = useWindowDimensions().width
                    // const deviceHeight = useWindowDimensions().height

  return (
    <SafeAreaView>

   <View style={[
    styles.headerContainer, {height:  deviceWidth >  500 ? 70  : 50}
    ]}>

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
    animationType="slide"
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
       <View style={styles.ModalBodyContainer}>
        
        <View>
        <Image 
          source={UserPic}
          style={styles.modalUserImage}
          />
        </View>
        <View>
          <Text style={styles.modalUserText}>Saeed</Text>
        </View>

       </View>

      </View>

      <View style={styles.modalLinksMainContainer}>

      <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>My Favorites</Text>
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
    </View>

   </Modal>

    <StatusBar />
   </SafeAreaView>

  )
}

export default Head