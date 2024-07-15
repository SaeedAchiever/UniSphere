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


const Suggested = ({name,location,fee,rate,image}) => {

  const newImage = `require("${image}")`
  

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
   <View style={styles.recommendationMainContainer}>
   <View style={styles.recommendationHeadContainer}>
     <Image  
       source={SmallImage}
       style={{
             width:  deviceWidth > 500 ? 40 :  25,
             height:  deviceWidth > 500 ? 40 :  25,
             marginHorizontal:7
       }}
     />
     <Text style={[
       styles.recommendationHeadText, 
       {fontSize:  deviceWidth  > 500 ? 22 : 17}
       ]}>Suggested for you</Text>
   </View>


 <Swiper  autoplay showsPagination={false}>

   <View
   style={styles.recommendationContainer}
   onTouchEnd={()=>{
     navigation.navigate('WinnebaPage')
   }}
   >
     
     <View style={styles.recommendationTextContainer}>
       <View>
        <Text style={styles.recommendationTextName}>{`${name}`}</Text>
       <View  style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingTop:5}}>
        <Image 
          source={Location} 
          style={styles.recommendationLocation}
            />
            <Text style={styles.recommendationTextHead}>{`${location}`}</Text>
        </View>
        
       </View>
       <View>
        <Text style={styles.recommendationTextFee}>{`Fee ${fee}`}</Text>
        <Text style={styles.recommendationTextRate}>{`${rate} Rating`}</Text>
       </View>
     </View>

     <View style={styles.recommendationImageContainer}>
       <Image  
         source={Winneba}
         style={styles.recommendationImage}
       />
     </View>

   </View>

   
   <View
   style={styles.recommendationContainer}
   onTouchEnd={()=>{
     navigation.navigate('LegonPage')
   }}
   >
     
     <View style={styles.recommendationTextContainer}>
       <View>
        <Text style={styles.recommendationTextName}>University  Of  Ghana</Text>
       <View  style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingTop:5}}>
        <Image 
          source={Location} 
          style={styles.recommendationLocation}
            />
            <Text style={styles.recommendationTextHead}>Legon</Text>
        </View>
        
       </View>
       <View>
        <Text style={styles.recommendationTextFee}>{`Fee GHC1.6k-10.7k`}</Text>
        <Text style={styles.recommendationTextRate}>{`4.3 Rating`}</Text>
       </View>
     </View>

     <View style={styles.recommendationImageContainer}>
       <Image  
         source={UG}
         style={styles.recommendationImage}
       />
     </View>

   </View>

   <View
   style={styles.recommendationContainer}
   onTouchEnd={()=>{
     navigation.navigate('KnustPage')
   }}
   >
     
     <View style={styles.recommendationTextContainer}>
       <View>
        <Text style={styles.recommendationTextName}>Kwame Nkrumah University of science and technology</Text>
       <View  style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingTop:5}}>
        <Image 
          source={Location} 
          style={styles.recommendationLocation}
            />
            <Text style={styles.recommendationTextHead}>Kumasi</Text>
        </View>
        
       </View>
       <View>
        <Text style={styles.recommendationTextFee}>{`Fee GHC1.6k-10.7k`}</Text>
        <Text style={styles.recommendationTextRate}>{`4.3 Rating`}</Text>
       </View>
     </View>

     <View style={styles.recommendationImageContainer}>
       <Image  
         source={KNUST}
         style={styles.recommendationImage}
       />
     </View>

   </View>

 </Swiper>

 </View>
  )
}

export default Suggested