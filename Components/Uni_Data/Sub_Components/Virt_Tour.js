import { 
 View, 
 Text, 
 Image, 
 ScrollView, 
 StatusBar, 
 ImageBackground, 
 SafeAreaView,
 Modal,
 FlatList 
} from 'react-native'
import React from 'react'


import styles from '../Styles'

const Star =  require('../../../assets/star.png')
const Kumasi = require('../../../assets/kumasi.jpeg')
const Accra = require('../../../assets/accra.jpg')
const Cape_Coast = require('../../../assets/cape_coast.jpeg')
const Top = require('../../../assets/top.png')
const CloseBtn = require('../../../assets/close.png')
const Placement = require('../../../assets/placement.png')
const Hostel = require('../../../assets/hostel.png')
const Arrow = require('../../../assets/arrow.png')
const ArrowDown = require('../../../assets/close.png')
const Pic_Icon = require('../../../assets/pic_icon.png')
const Vid_Icon = require('../../../assets/vid_icon.png')
const Logo = require('../../../assets/ucc.png')
const KNUST_Logo = require('../../../assets/knust.png')
const UEW_Logo = require('../../../assets/uew.png')
const Like = require('../../../assets/like.png')
const DisLike = require('../../../assets/dislike.png')
const Virt_Tour = () => {
  return (
   <View style={styles.schoolNoteMainContainer}>
   <View style={styles.schoolNoteHeadContainer}>
     <Text style={styles.schoolNoteHeadText}>Virtual Tour</Text>
     <Text style={styles.FAQquestionBodyText}>
       Aliqua Lorem aliqua esse do. Commodo non est 
       tempor enim anim proident veniam fugiat enim 
     </Text>
   </View>

   {/* Body */}

   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={styles.vTourBodyMainContainer}>
       <ImageBackground
       source={Kumasi}
        style={styles.vTourBodyContainer}>

       </ImageBackground>

       <ImageBackground
       source={Cape_Coast}
        style={styles.vTourBodyContainer}>

       </ImageBackground>
       
       <ImageBackground
       source={Accra}
        style={styles.vTourBodyContainer}>

       <View style={styles.vTourBodyTextContainer}>
         <Text style={styles.vTourBodyText}>See all</Text>
         <Text style={styles.vTourBodyText}>
           2 
         </Text>
         <Image source={Pic_Icon}
           style={styles.revStar}
         />
         <Text style={styles.vTourBodyText}>4</Text>
             <Image source={Vid_Icon} 
             style={styles.revStar}
           
             />
       </View>
       </ImageBackground>

     </View>
   </ScrollView>

   {/* <View style={styles.galleryDisplay}>
     <Text>Hello Display Gallery Here</Text>
     
   </View> */}
 </View>
  )
}

export default Virt_Tour