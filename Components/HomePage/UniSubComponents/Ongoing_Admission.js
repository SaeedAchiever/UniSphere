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


const Ongoing_Admission = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
   <View style={styles.HomeMainScholarshipContainer}>
   <View style={styles.HomeScholarshipHeaderContainer}>
     <View style={styles.HomeScholarshipHeaderImageContainer}>
       <Image  
         source={Scholarship}
         style={styles.HomeScholarshipHeaderImage}
       />
     </View>
     
     <View>
       <Text style={styles.HomeScholarshipHeaderText}>Ongoing Admissions</Text>
     </View>
   </View>

   {/* Body */}

   <View style={styles.FilterPageUniContainer}>
     <View style={styles.FilterPageUniHeaderContainer}>

       <View style={styles.FilterPageUniHeaderNameContainer}>
       <Text style={styles.FilterPageUniHeaderNameText}>Ashiesi University</Text>
       </View>

       <View style={styles.FilterBothContainer}>

       <View style={styles.FilterPageUniHeaderLocationContainer}>
         <Image 
         source={Location}
         style={styles.FilterPageUniHeaderLocationImage}
         />
         <Text style={styles.FilterPageUniHeaderLocationText}>Accra</Text>
       </View>
       <View style={styles.FilterPageUniHeaderRatingContainer}>
         <View style={styles.FilterPageUniHeaderRatingImageContainer}>
         <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
         </View>
         <Text style={styles.FilterPageUniHeaderRateText}>4.3 Stars</Text>
       </View>

       <View>
         <Text style={styles.FilterPageUniHeaderRateText}>Private Inst.</Text>
       </View>
       
       </View>

       <View style={styles.FilterCourseFeesMainContainer}>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Courses Offered</Text>
         <View>
         <Text style={styles.FilterCourseFeesText}>{`5 Courses`}</Text>
         </View>
       </View>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Fee Range</Text>
         <View>
         <Text style={styles.FilterCourseFeesText}>{`GHC 1k-12k`}</Text>
         </View>
       </View>
       </View>

       <View style={styles.FilterAdmissionContainer}>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Admission Status : </Text>
       </View>
         <View>
         <Text style={styles.FilterCourseFeesText}>Ongoing</Text>
         </View>
       </View>

     </View>
   </View>

   {/* Body */}

   <View style={styles.FilterPageUniContainer}>
     <View style={styles.FilterPageUniHeaderContainer}>

       <View style={styles.FilterPageUniHeaderNameContainer}>
       <Text style={styles.FilterPageUniHeaderNameText}>Ashiesi University</Text>
       </View>

       <View style={styles.FilterBothContainer}>

       <View style={styles.FilterPageUniHeaderLocationContainer}>
         <Image 
         source={Location}
         style={styles.FilterPageUniHeaderLocationImage}
         />
         <Text style={styles.FilterPageUniHeaderLocationText}>Accra</Text>
       </View>
       <View style={styles.FilterPageUniHeaderRatingContainer}>
         <View style={styles.FilterPageUniHeaderRatingImageContainer}>
         <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
           <Image 
           source={Star}
           style={styles.FilterPageUniHeaderLocationImage}
           />
         </View>
         <Text style={styles.FilterPageUniHeaderRateText}>4.3 Stars</Text>
       </View>

       <View>
         <Text style={styles.FilterPageUniHeaderRateText}>Private Inst.</Text>
       </View>
       
       </View>

       <View style={styles.FilterCourseFeesMainContainer}>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Courses Offered</Text>
         <View>
         <Text style={styles.FilterCourseFeesText}>{`5 Courses`}</Text>
         </View>
       </View>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Fee Range</Text>
         <View>
         <Text style={styles.FilterCourseFeesText}>{`GHC 1k-12k`}</Text>
         </View>
       </View>
       </View>

       <View style={styles.FilterAdmissionContainer}>
       <View style={styles.FilterCourseFeesContainer}>
         <Text style={styles.FilterCourseFeesHeadText}>Admission Status : </Text>
       </View>
         <View>
         <Text style={styles.FilterCourseFeesText}>Ongoing</Text>
         </View>
       </View>

     </View>
   </View>


 </View>
  )
}

export default Ongoing_Admission