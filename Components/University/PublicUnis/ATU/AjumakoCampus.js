import { View, Text, SafeAreaView, ScrollView, ImageBackground, StatusBar,  } from 'react-native'
import React from 'react'

import styles from '../..//Styles'

const AjumakoCampus = () => {

const AjumakoCampus = require("../../../assets/ajumako.jpg")

  return (
   <SafeAreaView>
   <ScrollView>
   <View style={styles.facultyMainContanier}>
    <ImageBackground 
     source={AjumakoCampus}
     style={styles.facultyBgPic}
    >
     <View>
      <Text style={styles.facultyTitle}>
       uew, Ajumako Campus
      </Text>
     </View>
    </ImageBackground>

    <View style={styles.facultyBodyContainer}>
     <Text style={styles.facultyBodyText}>
     The University's main campus in Winneba is 
     divided into three sites (North, Central, 
     and South) within the Winneba Municipality. 
     The North Campus houses the Central Administration 
     of the University.
     </Text>
    </View>

    <View style={styles.CampusAddressMainContainer}>

     <View style={styles.CampusAddressHeadContainer}>
      <Text style={styles.CampusAddressHeadText}>Address</Text>
     </View>

     <View style={styles.CampusAddressBodyContainer}>
      <Text style={styles.CampusAddressodyText}>College of Languages Education</Text>
      <Text style={styles.CampusAddressodyText}>Post Office Box 72, Ajumako</Text>
      <Text style={styles.CampusAddressodyText}>Central Region, Ghana</Text>
      <Text style={styles.CampusAddressodyText}>Tel: +233 (0)3321 93774</Text>
     </View>

    </View>

    
   </View>

   <StatusBar />
   </ScrollView>
  </SafeAreaView>  )
}

export default AjumakoCampus