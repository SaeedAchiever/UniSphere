import { View, Text,  Image,  useWindowDimensions, ScrollView, } from 'react-native'
import React,{useState} from 'react';
import  {useNavigation} from  '@react-navigation/native'

import ColHomePage from './ColHomePage';
import UniHomePage from './UniHomePage';

const UserPic  = require("../../assets/user_1.jpg")

import styles from './HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {

    // State to keep track of the selected body component

    const [selectedBody, setSelectedBody] = useState(() => ('UniHomePage'));

    // Function to handle selecting a body com
    
    const handleSelectBody = (body) => {
      setSelectedBody(body);
    };


                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width

  return (

    <View style={styles.HomeContainer}>
      <SafeAreaView>

                        {/* MAIN  CONTENT */}


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeMainContainer}>
          <View style={styles.welcomeContainer}>
            <View style={styles.welcomeImageContainer}>

            <Image  
              source={UserPic}
              style={{
                width: deviceWidth >  500 ? 100 : 85,
                height: deviceWidth >  500 ? 100 : 85,
                borderRadius:50,
                resizeMode:'cover',
                borderWidth:1.3,
                borderColor:"#cecece"
              }}
            />
            </View>
            <View style={styles.welcomeNoteContainer}>
              <Text style={[styles.welcomeNoteText, {fontSize: deviceWidth  > 500 ? 17  : 15}]}>Hey Saeed,</Text>
              <Text style={[styles.welcomeNoteText, {fontSize: deviceWidth  > 500 ? 17  : 15}]}>Glad to see ya again</Text>
            </View>
          </View>
        </View>

        {/* Switch */}

        <View style={styles.SwitchContainer}>
          <View
           style={styles.SwitchContainerBTN}
           onTouchEnd={() => handleSelectBody('UniHomePage')}
          >
            <Text style={styles.SwitchContainerText}>Universities</Text>
          </View>
          <View
           style={styles.SwitchContainerBTN}
           onTouchEnd={() => handleSelectBody('ColHomePage')}
          >
            <Text style={styles.SwitchContainerText}>Colleges</Text>
          </View>
        </View>

        <View>

        {selectedBody === 'UniHomePage' && <UniHomePage />}
        {selectedBody === 'ColHomePage' && <ColHomePage />}


        </View>

      </ScrollView>


      
 </SafeAreaView>


    </View>

  )
}

export default HomePage