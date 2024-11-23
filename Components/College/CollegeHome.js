import { View, Text,  Image, FlatList, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


import styles from '../HomePage/HomeStyle'


import CollegeHead from './CollegeHead';
import CollegeBody from './CollegeBody';

import colleges from "./College.json"
import Footer from '../HeadFoot/Footer';

const data = [
  {id : "1", "component" : CollegeHead},
  {id : "2", "component" : CollegeBody}
]

const CollegeHome = () => {

  const renderItem = ({item}) => {
    const AllComponent  = item.component
    return  <AllComponent title={AllComponent} colleges={colleges}  key={item=>item.id}/>
  }


      return (
        <View style={[styles.HomeContainer, {paddingBottom:40}]}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
          />
          <Footer />
    
        </View>
      );
}

export default CollegeHome