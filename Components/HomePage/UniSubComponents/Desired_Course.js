import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from '../HomeStyle'

import Desires from './Desired.json'

const Desired_Course = () => {
  return (
   <View style={styles.HomeMainScholarshipContainer}>
   <View style={styles.HomeScholarshipHeaderContainer}>
     <View>
       <Text style={styles.HomeScholarshipHeaderText}>Get Matched Courses</Text>
     </View>
     

   </View>

   {/* Scroll Header */}

   <ScrollView horizontal showsHorizontalScrollIndicator={false}>

    <View style={styles.scrollHeaderBtnContainer}>
     <Text style={styles.scrollHeaderBtnText}>Bachelors</Text>
    </View>
    <View style={styles.scrollHeaderBtnContainer}>
     <Text style={styles.scrollHeaderBtnText}>Masters</Text>
    </View>
    <View style={styles.scrollHeaderBtnContainer}>
     <Text style={styles.scrollHeaderBtnText}>Diploma</Text>
    </View>
    <View style={styles.scrollHeaderBtnContainer}>
     <Text style={styles.scrollHeaderBtnText}>HND</Text>
    </View>
    <View style={styles.scrollHeaderBtnContainer}>
     <Text style={styles.scrollHeaderBtnText}>Phd</Text>
    </View>
   </ScrollView>

   {/* Scroll Body */}
   
   <FlatList 
      data={Desires}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
       return (

      <View style={styles.scrollBodyContainer}>
       <View>
        <Text style={styles.scrollBodyDistText}>{`${item.mode}`}</Text>
       </View>
       <View>
        <Text style={styles.scrollBodyCourseText}>{`${item.course}`}</Text>
       </View>
       <View style={[styles.scrollUniAvailContainer, {paddingTop:10}]}>
        <Text style={styles.scrollBodyDistText}>{`Universities Available`}</Text>
        <Text style={styles.scrollBodyDistText}>{`${item.universities}`}</Text>
       </View>
       <View style={styles.scrollUniAvailContainer}>
        <Text style={styles.scrollBodyDistText}>{`Course Duration`}</Text>
        <Text style={styles.scrollBodyDistText}>{`${item.duration} years`}</Text>
       </View>
      </View>

       )
      }}
   />

    </View>
  )
}

export default Desired_Course