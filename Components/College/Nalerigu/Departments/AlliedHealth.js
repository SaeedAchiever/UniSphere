import { View, Text,SafeAreaView,StatusBar,ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const AlliedHealthBgPic = require("../../../../assets/allied_health.jpg")

const AlliedHealth = () => {

  const navigation  = useNavigation()

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
         faculty Of Allied Health
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

       <Text style={styles.facultyBodyText}>
       The faculty of Allied Health consist of two 
       departments, affiliated to the KNUST namely; 
       The Department of Community Health and the 
       Department of Biomedical and Diagnostic Sciences.
       </Text>

       <Text style={styles.facultyBodyMainText}>
        Programmes hosted by the Department of 
        Community Health include;
       </Text>

       <View style={styles.facultyBodyListContainer}>
       <Text style={styles.facultyBodyText}>
        1. Diploma in Nutrition 
       </Text>
       <Text style={styles.facultyBodyText}>
        2. Diploma in Dietetics 
       </Text>
       <Text style={styles.facultyBodyText}>
        3. Registered Dietetic Assistants (Certificate in Nutrition and Dietetics) 
       </Text>
       <Text style={styles.facultyBodyText}>
        4. Diploma in Health Promotion
       </Text>
       <Text style={styles.facultyBodyText}>
        5. Diploma in Health Information 
       </Text>
       <Text style={styles.facultyBodyText}>
        6. Physiotherapy Assistant (Diploma)  
       </Text>
       </View>

       <Text style={styles.facultyBodyMainText}>
        Programmes hosted by the department of 
        Biomedical and Diagnostic Sciences include;
       </Text>

       <View style={styles.facultyBodyListContainer}>
       <Text style={styles.facultyBodyText}>
        1. Diploma in Biomedical Laboratory Science 
       </Text>
       <Text style={styles.facultyBodyText}>
        2. Diploma in Biomedical Laboratory Science programmes 
       </Text>
       
       </View>


      </View>

      
     </View>

     <StatusBar />
     </ScrollView>
    </SafeAreaView>
  )
}

export default AlliedHealth