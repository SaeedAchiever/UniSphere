import { View, Text,SafeAreaView, ScrollView, Modal, Image, StatusBar } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from '../..//Styles'



const Fees = () => {


             // LINKS  HERE
  
        // Regular Undergraduate Level 400

  const OpenRegularUndergraduateLevel400 = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

   // Regular Undergraduate Level 300

   const OpenRegularUndergraduateLevel300 = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Regular Undergraduate Level 200

  const OpenRegularUndergraduateLevel200 = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Open Ghanaian Fee Paying Final

  const OpenGhanaianFeePayingFinal = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Open Ghanaian Fee Continue

  const OpenGhanaianFeePayingContinue = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };


  // POST GRADUATE LINKS

  // Regular Post graduate Final

  const OpenRegularPostgraduateFinal = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

   // Regular Post graduate Continue

   const OpenRegularPostgraduateContinue = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Week End Post  Graduate Final

  const OpenWeekEndPostGraFinal = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Ghanaian Fee Paying Post Graduate Final

  const OpenGhaFeePayPostGraFinal = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Ghanaian Fee Paying Post Graduate Continue

  const OpenGhaFeePayPostGraCont = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // DISTANCE FEES

  // Distance Undergraduate Final

  const OpenDistUndergraFinal = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // Distance Undergraduate Continue

  const OpenDistUndergraCont = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };


  // GENERAL FEES

  const OpenGeneralFees = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // INTERNATIONAL STUDENTS

  // INTERNATIONAL UNDERGRADUATE

  const OpenInterUnderGra = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  // INTERNATIONAL POSTGRADUATE

  const OpenInterPostGra = async () => {
    const undergraduateUrl = 'https://uew.edu.gh/sites/default/files/2023-05/undergraduate-admission-brochure.pdf'; // Replace with your external link
    const supported = await Linking.canOpenURL(undergraduateUrl);
  
    if (supported) {
      await Linking.openURL(undergraduateUrl);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };

  




  return (
    <SafeAreaView>

      <View style={styles.feesHeadContainer}>
            <Text style={styles.feesHeadText}>Provisional Fees for 2023-2024 Academic Year</Text>
          </View>
      <ScrollView>
        <View style={styles.feesMainContainer}>
          

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text style={styles.feesBodyMainText}>UNDERGRADUATE FEES</Text>
            </View>

            <View
             style={styles.feesBodyTextContainer}
            >
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 400</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 300</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 200</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Undergraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Undergraduate Continuing Students</Text>
            </View>
          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text style={styles.feesBodyMainText}>POSTGRADUATE FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Postgraduate Final Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Postgraduate Continuing Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Weekend/Evening Postgraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Postgraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Postgraduate Continuing Students</Text>
            </View>
          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text style={styles.feesBodyMainText}>DISTANCE FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Distance Undergraduate Final Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Distance Undergraduate Continuing Students</Text>
            </View>

          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text style={styles.feesBodyMainText}>GENERAL FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Faculty/School/Departmental Fees</Text>
            </View>

          </View>

          <View style={[styles.feesBodyMainContainer,{
            marginBottom:30
          }]}>
            <View style={styles.feesBodyContainer}>
             <Text style={styles.feesBodyMainText}>INTERNATIONAL STUDENTS</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Undergraduate Students</Text>
            </View>

            <View style={[styles.feesBodyTextContainer,{
              marginBottom:80
            }]}>
             <Text style={styles.feesBodyText}>Postgraduate Students</Text>
            </View>

          </View>

        </View>

      <StatusBar  />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Fees