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

import  feeds from  '../Feeds.json'


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


const Feeds = () => {
  return (
   <View style={styles.schoolNoteMainContainer}>
   <View style={styles.schoolNoteHeadContainer}>
     <Text style={styles.schoolNoteHeadText}>Your Feeds</Text>
   </View>

   <View style={styles.schoolNoteBodyContainer}>
     <Text style={styles.schoolNoteBodyText}>
     incididunt dolor. Duis elit voluptate velit 
     occaecat incididunt occaecat ad est do.</Text>
   </View>

   {/* Body */}

   <FlatList 
     data={feeds}
     renderItem={({item})=>{
       return  (
         <View style={styles.feedsBodyMainContainer}>
           <View style={styles.feedsBodyContainer}>
             <View style={styles.feedslogoImageContainer}>
               <Image
               source={UEW_Logo}
               style={styles.feedslogoImage}
               />
             </View>

             <View style={styles.feedslogoTextContainer}>
               <View style={styles.feedslogoTextSubContainer}>
                 <Text style={styles.feedslogoText}>{`${item.name}, ${item.location}`}</Text>
               </View>
               <View style={styles.feedslogoTextSubContainer}>
                 <Text style={styles.feedslogoText}>{`${item.fee}`}</Text>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={styles.feedslogoText}>{`${item.rate}`}
                   </Text>
                   <Image  source={Star}
                     style={styles.revStar}/>
                 </View>
                 
               </View>
             </View>
             
           </View>
         </View>
       )
     }}
   />

 </View>
  )
}

export default Feeds