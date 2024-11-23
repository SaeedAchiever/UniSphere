import { View, FlatList, } from 'react-native'
import React from 'react';

import styles from './HomeStyle'

import Head from '../HeadFoot/Head';
import UniHomePage from './UniHomePage';

const HomePage = () => {
  
  return (

    <View style={styles.HomeContainer}>
      {/* <Head /> */}
      <UniHomePage />
    </View>

  )
}

export default HomePage