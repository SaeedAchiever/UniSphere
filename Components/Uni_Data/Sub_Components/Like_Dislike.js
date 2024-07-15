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


const Like_Dislike = () => {
  return (
   <View style={styles.schoolNoteMainContainer}>
   <View style={styles.schoolNoteHeadContainer}>
     <Text style={styles.schoolNoteHeadText}>Strength and Weakness</Text>
   </View>

   <View style={styles.schoolNoteBodyContainer}>
     <Text style={styles.schoolNoteBodyText}>
     incididunt dolor. Duis elit voluptate velit 
     occaecat incididunt occaecat ad est do.</Text>
   </View>

   {/* Body */}

   <View>

     <View style={styles.likesBodyMainContainer}>
     <View style={styles.likesBodyHeadContainer}>
         <Text style={styles.feedslogoText}>Likes</Text>
         <Image  
           source={Like}
           style={styles.likesBodyHeadImage}
         />
     </View>

     <View style={styles.mainLikeTextContainer}>
       <View style={styles.mainLikeTextSubContainer}>
         
         <Text style={styles.mainLike}>
           Adipisicing quis excepteur veniam proident consequat 
           amet esse nostrud. Et aliquip irure laboris fugiat 
           cillum aliquip ullamco pariatur. Magna ad velit laboris 
           amet adipisicing proident aute. In sint laboris 
         </Text>
         <Text style={styles.mainLike}>
           Adipisicing quis excepteur veniam proident consequat 
           amet esse nostrud. Et aliquip irure laboris fugiat 
           cillum aliquip ullamco pariatur. Magna ad velit laboris 
           amet adipisicing proident aute. In sint laboris 
         </Text>
       </View>
     </View>
     </View>

     <View style={styles.likesBodyMainContainer}>
     <View style={styles.likesBodyHeadContainer}>
         <Text style={styles.feedslogoText}>Dislikes</Text>
         <Image  
           source={DisLike}
           style={styles.likesBodyHeadImage}
         />
     </View>

     <View style={styles.mainLikeTextContainer}>
       <View style={styles.mainLikeTextSubContainer}>
         
         <Text style={styles.mainLike}>
           Adipisicing quis excepteur veniam proident consequat 
           amet esse nostrud. Et aliquip irure laboris fugiat 
           cillum aliquip ullamco pariatur. Magna ad velit laboris 
           amet adipisicing proident aute. In sint laboris 
         </Text>
         <Text style={styles.mainLike}>
           Adipisicing quis excepteur veniam proident consequat 
           amet esse nostrud. Et aliquip irure laboris fugiat 
           cillum aliquip ullamco pariatur. Magna ad velit laboris 
           amet adipisicing proident aute. In sint laboris 
         </Text>
       </View>
     </View>
   </View>

   </View>

   
 </View>
  )
}

export default Like_Dislike