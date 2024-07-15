import { View, Text, Image,useWindowDimensions } from 'react-native'
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


const Preference = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
   <View style={styles.userFieldMainContainer}>
   <View style={styles.topPlaceHeadContainer}>
     <Text  style={{
       fontSize: deviceWidth > 500 ? 18 : 16,
       textTransform:'capitalize',
       fontWeight:300
     }}>You might also love
 </Text>
   </View>

   <View style={styles.userPreferenceBodyContainer}>

     {/* ONE */}

     <View style={styles.userPreferenceSubBodyContainer}>
       <View style={styles.userPreferenceSubBodyTextCont}>
         <View style={styles.userPreferenceSubBodyTextContTwo}>
           <Text style={styles.userPreferenceSubBodyText}>University Of Education</Text>
           <Text style={styles.userPreferenceSubBodyText}>Winneba</Text>
           <View style={styles.prefRevContainer}>
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
           </View>
           <View
           style={styles.userPreferenceSubBodyBtn}
           onTouchEnd={()=>{
             navigation.navigate('WinnebaPage')
           }}
           >
             <Text style={styles.userPreferenceSubBodyBtnText}>View Profile</Text>
           </View>
         </View>
       </View>
       <View style={styles.userPreferenceSubBodyImageCont}>
         <Image  
           source={Winneba}
           style={styles.userPreferenceImage}
         />
       </View>
     </View>

     {/* TWO */}

     <View style={styles.userPreferenceSubBodyContainer}>
       <View style={styles.userPreferenceSubBodyTextCont}>
         <View style={styles.userPreferenceSubBodyTextContTwo}>
           <Text style={styles.userPreferenceSubBodyText}>University Of Ghana</Text>
           <Text style={styles.userPreferenceSubBodyText}>Legon</Text>
           <View style={styles.prefRevContainer}>
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
           </View>
           <View
           style={styles.userPreferenceSubBodyBtn}
           onTouchEnd={()=>{
             navigation.navigate('LegonPage')
           }}
           >
             <Text style={styles.userPreferenceSubBodyBtnText}>View Profile</Text>
           </View>
         </View>
       </View>
       <View style={styles.userPreferenceSubBodyImageCont}>
         <Image  
           source={UG}
           style={styles.userPreferenceImage}
         />
       </View>
     </View>

     {/* THREE */}

     <View style={styles.userPreferenceSubBodyContainer}>
       <View style={styles.userPreferenceSubBodyTextCont}>
         <View style={styles.userPreferenceSubBodyTextContTwo}>
           <Text style={styles.userPreferenceSubBodyText}>Kwame Nkrumah University Of Science And Technology</Text>
           <Text style={styles.userPreferenceSubBodyText}>Accra</Text>
           <View style={styles.prefRevContainer}>
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
             <Image
             source={Star}
             style={styles.Revstar}
             />
           </View>
           <View
           style={styles.userPreferenceSubBodyBtn}
           onTouchEnd={()=>{
             navigation.navigate('KnustPage')
           }}
           >
             <Text style={styles.userPreferenceSubBodyBtnText}>View Profile</Text>
           </View>
         </View>
       </View>
       <View style={styles.userPreferenceSubBodyImageCont}>
         <Image  
           source={Accra}
           style={styles.userPreferenceImage}
         />
       </View>
     </View>
     
     
   </View>

 </View>
  )
}

export default Preference