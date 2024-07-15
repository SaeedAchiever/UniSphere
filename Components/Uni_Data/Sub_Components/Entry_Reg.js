import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from '../Styles'

const WAEC = require('../../../assets/Waec_logo.png')
const IGCSE = require('../../../assets/IGCSE.png')

const Entry_Reg = () => {
  return (
   <View style={styles.FaqMainContainer}>
     <View style={styles.schoolNoteHeadContainer}>
      <Text style={styles.schoolNoteHeadText}>Entry Requirements</Text>
     </View>

     <View style={[styles.feedsBodyMainContainer,{flexDirection:'column' ,gap:15}]}>
           <View style={styles.feedsBodyContainer}>
             <View style={styles.feedslogoImageContainer}>
               <Image
               source={WAEC}
               style={styles.feedslogoImage}
               />
             </View>

             <View style={styles.feedslogoTextContainer}>
               <View style={styles.feedslogoTextSubContainer}>
                 <Text style={{fontSize:15,fontWeight:'500'}}>{`WAEC Applicants`}</Text>
               </View>
               <View style={styles.feedslogoTextSubContainer}>
                 <Text style={{fontSize:11,fontWeight:'400'}}>{`Click For Details Below`}</Text>
               </View>
             </View>
             
           </View>

           <View style={styles.feedsBodyContainer}>
             <View style={styles.feedslogoImageContainer}>
               <Image
               source={IGCSE}
               style={styles.feedslogoImage}
               />
             </View>

             <View style={styles.feedslogoTextContainer}>
               <View style={styles.feedslogoTextSubContainer}>
               <Text style={{fontSize:15,fontWeight:'500'}}>{`IGCSE Applicants`}</Text>
               </View>
               <View style={styles.feedslogoTextSubContainer}>
               <Text style={{fontSize:11,fontWeight:'400'}}>{`Click For Details Below`}</Text>
               </View>
             </View>
             
           </View>

           <View style={styles.feedsBodyContainer}>
             <View style={styles.feedslogoImageContainer}>
               <Image
               source={WAEC}
               style={styles.feedslogoImage}
               />
             </View>

             <View style={styles.feedslogoTextContainer}>
               <View style={styles.feedslogoTextSubContainer}>
               <Text style={{fontSize:15,fontWeight:'500'}}>{`SSCE Applicants`}</Text>
               </View>
               <View style={styles.feedslogoTextSubContainer}>
               <Text style={{fontSize:11,fontWeight:'400'}}>{`Click For Details Below`}</Text>
               </View>
             </View>
             
           </View>
           
     </View>
     

   </View>
  )
}

export default Entry_Reg