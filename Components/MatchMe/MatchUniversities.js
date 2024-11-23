import { View, Text,Image, FlatList } from 'react-native'
import React from 'react'

import universities  from  '../University/universities.json'

import { useNavigation } from '@react-navigation/native'


const Location = require('../../assets/location.png')
const Star = require('../../assets/star.png')

import styles from './MatchStyle'

const MatchUniversities = () => {

const navigation = useNavigation()

  return (
    <View style={styles.matchUniversitiesContainer}>

      

      <FlatList 
        data={universities}
        renderItem={({item})=>{
          return  (
            <View
            style={styles.FilterPageUniContainer}
            onTouchEnd={()=>{
             navigation.navigate('UniData', {university:  universities.find(
              uni => uni.name === item.name
             )})
            }}
            >
            <View style={styles.FilterPageUniHeaderContainer}>
     
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
                 <Image 
                  source={Star}
                  style={styles.FilterPageUniHeaderLocationImage}
                 />
                </View>
                
                <Text style={styles.FilterPageUniHeaderRateText}>{`4.5 Stars`}</Text>
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
               <Text style={styles.FilterCourseFeesText}>{`GHC 1.7k-19.7k`}</Text>
               </View>
              </View>
             </View>
     
             <View style={styles.FilterAdmissionContainer}>
              <View style={styles.FilterCourseFeesContainer}>
               <Text style={styles.FilterCourseFeesHeadText}>Admission Status : </Text>
              </View>
               <View>
               <Text style={styles.FilterCourseFeesText}>Closed</Text>
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

export default MatchUniversities