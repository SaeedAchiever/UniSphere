import { View, Text,SafeAreaView,StatusBar,ImageBackground, ScrollView } from 'react-native'
import React from 'react'



const AlliedHealthBgPic = require("../../../../assets/allied_health.jpg")

const MidWifery = () => {


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
         faculty Of MidWifery
        </Text>
       </View>
      </ImageBackground>

      <View style={styles.facultyBodyContainer}>

       <Text style={styles.facultyBodyText}>
         A warm greeting to all from the Department of 
         Midwifery. I have the privilege to thank all 
         fellow members of the great college for the 
         active roles you are all playing collectively 
         to educate students in this department.
       </Text>
       <Text style={styles.facultyBodyText}>
         The department of midwifery is a subset of 
         the college and remains one of the leading 
         avenues for the promotion of Nursing and 
         Midwifery Education. It is based on competent 
         practice to producing practical and research-oriented 
         nurses and midwives for the advancement of the noble 
         profession of Nursing and Midwifery.
       </Text>
       <Text style={styles.facultyBodyText}>
       The department currently offers a Diploma in 
       midwifery as a regular programme and POST NAC/NAP 
       which is a Certificate to Diploma top-up programmes.
       </Text>
       <Text style={styles.facultyBodyText}>
        The Midwifery programme is intended to produce 
        competent professional midwives who will give 
        quality health care and services in the community, 
        clinics and hospitals. The Midwife would give 
        emotional support to clients and their relatives 
        by collaborating with other health workers. The 
        goal of the programme, therefore, is to educate a 
        professional midwife who will provide midwifery 
        care and services under the supervision of senior 
        professional midwives, both in the clinical and 
        community settings, with emphasis on midwifery 
        operational research, which will help to provide 
        information for quality of midwifery education and 
        practice (care).
       </Text>
       <Text style={styles.facultyBodyText}>
        The programmes have an ongoing collaboration with 
        the Kwame Nkrumah University of science and 
        technology (KNUST) with the Diploma and POST NAC/NAP 
        affiliated with the University of Cape Coast.
       </Text>
       <Text style={styles.facultyBodyText}>
        It is always a privilege to admit new students who 
        will eventually become great assets to the profession 
        and to collaborate with community stakeholders and 
        partners and do what is best by creating a 
        well-defined environment for teaching and learning 
        Nursing and Midwifery. Outdoors are always opened 
        for qualified interested students and we looking 
        forward to having you!.
       </Text>
       <Text style={styles.facultyBodyText}>
        Thank You.
       </Text>


      </View>

      
     </View>

     <StatusBar />
     </ScrollView>
    </SafeAreaView>
  )
}

export default MidWifery