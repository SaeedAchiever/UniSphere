import { View, Text, Image, FlatList, } from 'react-native'
import React from 'react'
import  {useNavigation} from  '@react-navigation/native'


import universities from  "../../University/universities.json"

import styles from '../HomeStyle'

const Scholarship  = require("../../../assets/recomended.png")
const Star  = require("../../../assets/star.png")
const Location  = require("../../../assets/location.png")


const Ongoing_Admission = ({Ongoing_List}) => {

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

   <FlatList  
    data={Ongoing_List}
    keyExtractor={item=>item.id}
    renderItem={({item})=>{
      return (
        <View style={styles.FilterPageUniContainer}>
          <View
           style={styles.FilterPageUniHeaderContainer}
           onTouchEnd={()=>{
            navigation.navigate("UniData",  {university : Ongoing_List.find(
              uni =>  uni.name === item.name
            )})
           }}
          >

              <View style={styles.FilterPageUniHeaderNameContainer}>
              <Text style={styles.FilterPageUniHeaderNameText}>{`${item.name}`}</Text>
              </View>

              <View style={styles.FilterBothContainer}>

              <View style={styles.FilterPageUniHeaderLocationContainer}>
                <Image 
                source={Location}
                style={styles.FilterPageUniHeaderLocationImage}
                />
                <Text style={styles.FilterPageUniHeaderLocationText}>{`${item.location}`}</Text>
              </View>
            <View style={styles.FilterPageUniHeaderRatingContainer}>
              <Text
               style={styles.FilterPageUniHeaderRateText}>
                {`${item.rate}`}
              </Text>
              <View style={styles.FilterPageUniHeaderRatingImageContainer}>
                <Image 
                source={Star}
                style={styles.FilterPageUniHeaderLocationImage}
                />
              </View>
            </View>

            <View>
              <Text style={styles.FilterPageUniHeaderRateText}>{`${item.type} Inst.`}</Text>
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

          </View>
        </View>
      )
    }}
   />

   <View 
    style={styles.listButton}>
    <Text style={styles.listButtonText}>Full List</Text>
   </View>

 </View>
  )
}

export default Ongoing_Admission