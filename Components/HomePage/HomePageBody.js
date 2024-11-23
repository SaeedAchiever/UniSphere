import { View,} from 'react-native'
import React,{useState} from 'react';

import ColHomePage from './ColHomePage';
import UniHomePage from './UniHomePage';

import styles from './HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const HomePageBody = () => {

 // State to keep track of the selected body component

     const [selectedBody, setSelectedBody] = useState(() => ('UniHomePage'));

     // Function to handle selecting a body com
     
     const handleSelectBody = (body) => {
       setSelectedBody(body);
     };

 return (

  <View style={styles.HomeContainer}>
    <SafeAreaView>

                      {/* MAIN  CONTENT */}


    <View>

      <View>

      {selectedBody === 'UniHomePage' && <UniHomePage />}
      {selectedBody === 'ColHomePage' && <ColHomePage />}


      </View>

    </View>


    
</SafeAreaView>


  </View>

)

}

export default HomePageBody