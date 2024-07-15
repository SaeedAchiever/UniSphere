import { View, Text,StatusBar,SafeAreaView,Linking } from 'react-native'
import React from 'react'


const Brochure = () => {

                 // LINK

                 const openUndergraduateLink = async () => {
                  const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
                  const supported = await Linking.canOpenURL(undergraduateUrl);
                
                  if (supported) {
                    await Linking.openURL(undergraduateUrl);
                  } else {
                    console.error(`Don't know how to open URL: ${url}`);
                  }
                };

                const openPostgraduateLink = async () => {
                 const postgraduateUrl = 'https://www.uew.edu.gh/sites/default/files/2023-05/postgraduate-admission-brochure.pdf'; // Replace with your external link
                 const supported = await Linking.canOpenURL(postgraduateUrl);
               
                 if (supported) {
                   await Linking.openURL(postgraduateUrl);
                 } else {
                   console.error(`Don't know how to open URL: ${url}`);
                 }
               };

  return (
   <SafeAreaView>
    <View style={styles.BrochureMainContainer}>
      <View
         style={styles.BrochureContainer}
         onTouchEnd={openUndergraduateLink}
      >
       <Text style={styles.BrochureText}>
        Undergraduate Admission Brochure May, 2023
       </Text>
      </View>

      <View
        style={styles.BrochureContainer}
        onTouchEnd={openPostgraduateLink}
      >
       <Text style={styles.BrochureText}>
       Postgraduate Admission Brochure May, 2023
       </Text>
      </View>
    </View>
    <StatusBar />
   </SafeAreaView>

  )
}

export default Brochure