import { View, Text, useWindowDimensions, ScrollView, } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const MyListHome = () => {

  return (

    <View style={styles.HomeContainer}>
      <SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
       <View>
        <Text>Hello</Text>
       </View>
      </ScrollView>
      </SafeAreaView>


    </View>

  )
}

export default MyListHome