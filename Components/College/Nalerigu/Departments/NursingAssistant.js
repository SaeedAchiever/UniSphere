import { View, Text,SafeAreaView,StatusBar,ImageBackground, ScrollView } from 'react-native'
import React from 'react'



const AlliedHealthBgPic = require("../../../../assets/allied_health.jpg")

const NursingAssistant = () => {
  return (
    <SafeAreaView>
     <ScrollView>
     <View style={styles.facultyMainContanier}>
      <ImageBackground 
       source={AlliedHealthBgPic}
       style={styles.facultyBgPic}
      >
       <View>
        <Text style={styles.facultyTitle}>
         faculty Of Nursing Assisants
        </Text>
       </View>
      </ImageBackground>

      <View style={styles.facultyBodyContainer}>
       <Text style={styles.facultyBodyText}>
        The faculty of Allied Health is one of the 
        constituent faculty in the College of Nursing 
        and Allied Health Sciences, Nalerigu. It was 
        created in 2017 with a mandate to train and 
        develop highly qualified and committed Allied 
        Health Professionals with the competence, 
        skills and ability to identify health-related 
        challenges and provide timely solutions to persons 
        and communities. It started with the introduction 
        of Diploma in Nutrition and Diploma in Dietetics 
        programmes. It has since been expanded and 
        currently run eight programmes. 
       </Text>



      </View>

      
     </View>

     <StatusBar />
     </ScrollView>
    </SafeAreaView>
  )
}

export default NursingAssistant