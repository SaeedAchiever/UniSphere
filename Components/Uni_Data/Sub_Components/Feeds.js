import { 
 View, 
 Text, 
 Image, 
 FlatList 
} from 'react-native'
import React from 'react'


import styles from '../Styles'

import  feeds from  '../Feeds.json'


const Star =  require('../../../assets/star.png')
const UEW_Logo = require('../../../assets/uew.png')


const Feeds = ({university}) => {
  return (
   <View style={styles.schoolNoteMainContainer}>
   <View style={styles.schoolNoteHeadContainer}>
     <Text style={styles.schoolNoteHeadText}>Silimar Universities</Text>
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
           <View style={[styles.feedsBodyContainer,{flexDirection:'row'}]}>
             <View style={styles.feedslogoImageContainer}>
               <Image
               source={UEW_Logo}
               style={styles.feedslogoImage}
               />
             </View>

             <View style={[styles.feedslogoTextContainer, {width:'75%'}]}>
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