import { View, Text, Image,useWindowDimensions,ScrollView } from 'react-native'
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


const Sub_Scholarship = () => {

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
        <Text style={styles.HomeScholarshipHeaderText}>Up to 100% scholarship</Text>
      </View>
    </View>

    <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
      <View style={styles.ScholarshipScrolls}>
        <View style={styles.ScholarshipBox}>
          <Image  
            source={Scholar}
            style={styles.ScholarImage}
          />
        </View>

        <View style={styles.ScholarshipBodyTextContainer}>
          <Text style={styles.ScholarshipBodyText}>$1000 Havard Scholarship lmited seats</Text>
        </View>
      </View>

      <View style={styles.ScholarshipScrolls}>
        <View style={styles.ScholarshipBox}>
        <Image  
            source={Scholar_Two}
            style={styles.ScholarImage}
          />
        </View>

        <View>
          <Text style={styles.ScholarshipBodyText}>$1000 Havard Scholarship Ending soon</Text>
        </View>
      </View>

      <View style={styles.ScholarshipScrolls}>
        <View style={styles.ScholarshipBox}>
        <Image  
            source={Scholar_Three}
            style={styles.ScholarImage}
          />
        </View>

        <View>
          <Text style={styles.ScholarshipBodyText}>$1000 Havard scholarship Best Offer Available</Text>
        </View>
      </View>

    </ScrollView>

  </View>
  )
}

export default Sub_Scholarship