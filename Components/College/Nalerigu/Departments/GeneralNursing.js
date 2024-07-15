import { View, Text,SafeAreaView,StatusBar,ImageBackground, ScrollView } from 'react-native'
import React from 'react'



const AlliedHealthBgPic = require("../../../../assets/allied_health.jpg")

const GeneralNursing = () => {
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
         faculty Of General Nursing
        </Text>
       </View>
      </ImageBackground>

      <View style={styles.facultyBodyContainer}>
       <Text style={styles.facultyBodyText}>
       The department aims at equipping students to be able to apply their knowledge of the fundamental concepts and principles in Nursing to the benefit of the nation and then relate these concepts to their clients and patients who require their services. In view of this, our curriculum provides intensive theoretical and clinical teaching in nursing, building on knowledge in the basic sciences. This prepares students to become professional nurses capable of effectively delivering nursing care to their clients and others. The course also prepares students to identify health problems in health institutions and communities and efficiently design programme that can address these. The teaching method put in place is designed equip students to deliver health information to various groups in order to meet their particular needs.
       </Text>


       


      </View>

      
     </View>

     <StatusBar />
     </ScrollView>
    </SafeAreaView>
  )
}

export default GeneralNursing