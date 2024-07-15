import { View, Text, Image,useWindowDimensions,ScrollView, } from 'react-native'
import React from 'react'
import  {useNavigation} from  '@react-navigation/native'
import Swiper from 'react-native-swiper';

import styles from '../HomeStyle'

const Scholarship  = require("../../../assets/recomended.png")

const Star  = require("../../../assets/star.png")
const UserPic  = require("../../../assets/user_1.jpg")
const Location  = require("../../../assets/location.png")
const Winneba  = require("../../../assets/winneba.jpg")
const UG  = require("../../../assets/ug.jpeg")
const KNUST  = require("../../../assets/knust.jpeg")
const SmallImage  = require("../../../assets/recomended.png")
const Accra  = require("../../../assets/accra.jpg")
const Kumasi  = require("../../../assets/kumasi.jpeg")
const Tema  = require("../../../assets/tema.jpeg")
const Cape_Coast  = require("../../../assets/cape_coast.jpeg")
const Tamale  = require("../../../assets/tamale.jpeg")
const TopPlaceLogo  = require("../../../assets/top_place.png")
const Top  = require("../../../assets/trends.png")
const Scholar  = require("../../../assets/scholar.png")
const Scholar_Two  = require("../../../assets/scholar_two.png")
const Scholar_Three  = require("../../../assets/scholar_three.png")


const Top_Place = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
   <View style={styles.topPlaceMainContainer}>
          
   <View style={styles.topPlaceHeadContainer}>
     <Image  
       source={TopPlaceLogo}
       style={{
         width:20,
         height:20
       }}
     />
     <Text style={{
       fontSize: deviceWidth > 500 ? 18 : 16,
       textTransform:'capitalize',
       fontWeight:300
     }}>Top places to study in ghaha</Text>
   </View>

     <View style={styles.topPlaceContainer}>


       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View
          style={styles.placeContainer}
          onTouchEnd={()=>{
           navigation.navigate('Places')
          }}
         >
           <Image  
             source={Accra}
             style={styles.topPlaceImage}
           />
           <Text>Accra</Text>
         </View>

         <View
          style={styles.placeContainer}
          onTouchEnd={()=>{
           navigation.navigate('Places')
          }}
         >
           <Image  
               source={Kumasi}
               style={styles.topPlaceImage}
             />
           <Text>Kumasi</Text>
         </View>

         <View
          style={styles.placeContainer}
          onTouchEnd={()=>{
           navigation.navigate('Places')
          }}
         >
           <Image  
                 source={Cape_Coast}
                 style={styles.topPlaceImage}
               />
           <Text>Cape Coast</Text>
         </View>

         <View
          style={styles.placeContainer}
          onTouchEnd={()=>{
           navigation.navigate('Places')
          }}
         >
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