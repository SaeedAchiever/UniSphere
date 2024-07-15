import { View, Text,useWindowDimensions,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import styles from '../../Components/HomePage/HomeStyle'

const Home  = require("../../assets/home.png")
const University  = require("../../assets/university.png")
const College  = require("../../assets/college.png")
const Scholarship  = require("../../assets/scholarship.png")
const News  = require("../../assets/trend.png")

const Footer = () => {

                    // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height

      const navigation = useNavigation()


  return (
    <View style={styles.footerMainContainer}>
    <View style={styles.footerContainer}>
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('HomePage')
       }}
      >
        <Image  
          source={Home}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Home</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={
        ()=>  navigation.navigate('UniversityHome')
      }>
        <Image  
          source={University}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Universities</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('CollegeHome')
       }}
      >
        <Image  
          source={College}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Colleges</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('ScholarshipHome')
       }}
      >
        <Image  
          source={Scholarship}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Scholarships</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('Updates')
       }}
      >
        <Image  
          source={News}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Updates</Text>
      </View>
    </View>
       </View>
  )
}

export default Footer