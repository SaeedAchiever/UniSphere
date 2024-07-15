import { View, ScrollView, useWindowDimensions, } from 'react-native'
import React from 'react';
import  {useNavigation} from  '@react-navigation/native'

import styles from './HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

import Suggested from './UniSubComponents/Suggested';
import Top_Place from './UniSubComponents/Top_Place';
import Ongoing_Admission from './UniSubComponents/Ongoing_Admission';
import Preference from './UniSubComponents/Preference';
import Certification from './UniSubComponents/Certification';
import Sub_Scholarship from './UniSubComponents/Sub_Scholarship';
import Desired_Course from './UniSubComponents/Desired_Course';
import My_Match from './UniSubComponents/My_Match';

const name  = 'Nalerigu Nursing And Midwifery'
const location  = 'Nalerigu'
const fee  = 'GHC1.6k-4k'
const rate  = '3.9'
const image  = '../../../assets/winneba.jpg'

const ColHomePage = () => {

                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height

      const navigation = useNavigation()


  return (

    <View style={styles.HomeContainer}>
      <SafeAreaView>

          <Suggested name={name} location={location} fee={fee} rate={rate} image={image}/>
          <Top_Place  />
          <My_Match />
          <Ongoing_Admission  />
          <Desired_Course />
          <Preference />
          <Certification  />
          <Sub_Scholarship  />
      
 </SafeAreaView>


    </View>

  )
}

export default ColHomePage