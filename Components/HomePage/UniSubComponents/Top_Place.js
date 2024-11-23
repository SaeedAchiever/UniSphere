import { View, Text, Image,useWindowDimensions,ScrollView, } from 'react-native'
import React from 'react'

import styles from '../HomeStyle'

const Accra  = require("../../../assets/accra.jpg")
const Kumasi  = require("../../../assets/kumasi.jpeg")
const Cape_Coast  = require("../../../assets/cape_coast.jpeg")
const Tamale  = require("../../../assets/tamale.jpeg")
const TopPlaceLogo  = require("../../../assets/top_place.png")


const Top_Place = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width


  return (
   <View style={styles.topPlaceMainContainer}>
          
   <View style={styles.recommendationHeadContainer}>
     <Image  
       source={TopPlaceLogo}
       style={{
         width:20,
         height:20
       }}
     />
     <Text style={{
       fontSize: deviceWidth > 500 ? 18 : 16,
       fontWeight:300
     }}>Top places to study in Ghana</Text>
   </View>

     <View style={styles.topPlaceContainer}>


       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View
          style={styles.placeContainer}>
           <Image  
             source={Accra}
             style={styles.topPlaceImage}
           />
           <Text>Accra</Text>
         </View>

         <View
          style={styles.placeContainer}>
           <Image  
               source={Kumasi}
               style={styles.topPlaceImage}
             />
           <Text>Kumasi</Text>
         </View>

         <View
          style={styles.placeContainer}>
           <Image  
                 source={Cape_Coast}
                 style={styles.topPlaceImage}
               />
           <Text>Cape Coast</Text>
         </View>

         <View
          style={styles.placeContainer}>
         <Image  
                 source={Tamale}
                 style={styles.topPlaceImage}
               />
           <Text>Tamale</Text>
         </View>
       </ScrollView>
     </View>

  


   </View>
  )
}

export default Top_Place