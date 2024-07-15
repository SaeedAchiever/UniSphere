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


const Certification = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
   <View style={styles.topCertificationMainContainer}>
   <View style={styles.topCertificationHeadContainer}>
       <Image  
         source={Top}
         style={{
           width:  deviceWidth > 500 ? 20 :  15,
           height:  deviceWidth > 500 ? 20 :  15,
           marginRight:5
         }}
       />
       <Text style={{
           fontSize:  deviceWidth > 500 ? 20 : 15,
           fontWeight:'500',
           textTransform:"capitalize"
       }}>Top institutes for your certification</Text>
   </View>

   <ScrollView horizontal  showsHorizontalScrollIndicator={false}>

   <View style={styles.topCertificationBodyContainer}>

     <View style={styles.mainInnerCertificationContainer}>
       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5,
         }}>
           <Image  
             source={Tema}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%',
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

             {/* SECOND  ONE */}

       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Kumasi}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>
     </View>

     {/* THREE */}

     <View style={styles.mainInnerCertificationContainer}>
     <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Cape_Coast}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

       {/* FOUR */}

       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Accra}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

     </View>

     {/* THREE */}

     <View style={styles.mainInnerCertificationContainer}>
     <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Cape_Coast}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

       {/* FOUR */}

       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Accra}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

     </View>

     {/* THREE */}

     <View style={styles.mainInnerCertificationContainer}>
     <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Cape_Coast}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

       {/* FOUR */}

       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Accra}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

     </View>

     {/* THREE */}

     <View style={styles.mainInnerCertificationContainer}>
     <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Cape_Coast}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

       {/* FOUR */}

       <View style={styles.InnerCertificationContainer}>
         <View style={{
           marginVertical:5,
           marginRight:5
         }}>
           <Image  
             source={Accra}
             style={{
               width:  deviceWidth > 500 ? 75 :  50,
               height:  deviceWidth > 500 ? 95 :  70,
             }}
           />
         </View>
         <View>
           <Text style={{
               fontSize:  deviceWidth > 500 ? 12 :  10,
               width:'30%'
           }}>
             Best Colleges in Ghana for either diploma or
             degree in Nursing and mid-wifery
           </Text>
         </View>
       </View>

     </View>

     

     
   </View>
   </ScrollView>
 </View>
  )
}

export default Certification