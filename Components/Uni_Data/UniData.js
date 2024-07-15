import { 
  View, 
  Image, 
  ScrollView, 
  StatusBar, 
  SafeAreaView,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'

import styles from './Styles'

const Top = require('../../assets/top.png')

import Header from './Sub_Components/Header';
import Campus from './Sub_Components/Campuses';
import Entry_Reg from './Sub_Components/Entry_Reg';
import Rating from './Sub_Components/Rating';
import Scrol_Elem from './Sub_Components/Scrol_Elem';
import Faq from './Sub_Components/Faq';
import Virt_Tour from './Sub_Components/Virt_Tour';
import Camp_News from './Sub_Components/Camp_News';
import Feeds from './Sub_Components/Feeds';
import Like_Dislike from './Sub_Components/Like_Dislike';

const data  = [
  { id: '1', component: Header  },
  { id: '2', component: Campus  },
  { id: '3', component: Entry_Reg  },
  { id: '4', component: Rating  },
  { id: '5', component: Scrol_Elem  },
  { id: '6', component: Faq  },
  { id: '7', component: Virt_Tour  },
  { id: '8', component: Camp_News  },
  { id: '9', component: Feeds  },
  { id: '10', component: Like_Dislike  },

]

const UniData = () => {

  const renderItem = ({ item }) => {
    const SubComponent = item.component;
    return <SubComponent title={`Subcomponent ${item.id}`} />;
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      

      <View style={{
        position:'absolute',
        bottom:90,
        right:10,
        zIndex:100,
      }}>
        <Image
          source={Top}
          style={{
            width:30,
            height:40,
            resizeMode:'contain'
          }}
        />
      </View>

    <View style={styles.MainTertiaryContainer}>

      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

          <StatusBar  />
      

    </View>

    </SafeAreaView>

  )
}


export default UniData