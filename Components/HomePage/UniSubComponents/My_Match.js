import { View, Text } from 'react-native'
import React from 'react'

import styles from '../HomeStyle'

const My_Match = () => {
  return (
   <View style={styles.HomeMainScholarshipContainer}>
   <View style={styles.HomeScholarshipHeaderContainer}>
     <View>
       <Text style={styles.HomeScholarshipHeaderText}>Lets Get It For You</Text>
     </View>

   </View>

     <View style={styles.myMatchContainer}>
        <Text style={styles.myMatchText}>
         Take a two minutes survey to see which University 
         is best for you based on grades and preferred course
        </Text>
        <View style={styles.myMatchBtn}>
         <Text style={styles.myMatchBtnText}>Start</Text>
        </View>
     </View>
    </View>
  )
}

export default My_Match