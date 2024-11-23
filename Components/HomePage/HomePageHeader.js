import { View, Text,Image,useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './HomeStyle'

const UserPic  = require("../../assets/user_1.jpg")


const HomePageHeader = () => {

  // State to keep track of the selected body component

  const [selectedBody, setSelectedBody] = useState(() => ('Overview'));

  // Function to handle selecting a body com
  
  const handleSelectBody = (body) => {
    setSelectedBody(body);
  };
  

 const deviceWidth = useWindowDimensions().width

 const navigation = useNavigation();


  return (
    <View style={styles.SwitchContainer}>
          <View
           style={styles.SwitchContainerBTN}
           onTouchEnd={() => navigation.navigate('UniHomePage')}
          >
            <Text style={styles.SwitchContainerText}>Universities</Text>
          </View>
          <View
           style={styles.SwitchContainerBTN}
           onTouchEnd={() => navigation.navigate('ColHomePage')}
          >
            <Text style={styles.SwitchContainerText}>Colleges</Text>
          </View>
    </View>
  )
}

export default HomePageHeader