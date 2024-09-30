import { View, Text,  Image, FlatList, } from 'react-native'
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import styles from '../HomePage/HomeStyle'

import  Universities from './smallList.json'

const Location  = require("../../assets/location.png")
const KNUST  = require("../../assets/knust.jpeg")
const Star  = require("../../assets/star.png")


const UniversityBody = () => {

    const navigation = useNavigation()

    return (
      
        <FlatList 
          data={Universities}
          renderItem={({item})=>{
            return  (
              <View>

                <View style={styles.UniHomeMainContainer}>
                      <View style={styles.UniHomeContainer}>
                        <View style={styles.UniHomeImageContainer}>
                          <Image  
                            source={KNUST}
                            style={styles.UniHomeImage}
                          />
                        </View>

                        <View style={styles.UniHomeTextContainer}>
                          <Text style={styles.UniHomeText}>
                          {`${item.name}`}
                          </Text>
                        </View>
                        

                        <View style={styles.uniMainHomeLocNCampContainer}>
                          <View style={styles.uniMainHomeLocContainer}>
                            <View style={styles.uniMainHomeLocImageContainer}>
                              <Image  
                                source={Location}
                                style={styles.uniMainHomeLocImage}
                              />
                            </View>
                            <View>
                              <Text style={styles.uniMainHomeLocText}>
                                {`${item.location}`}
                              </Text>
                            </View>

                            <View style={{
                              width:2,
                              backgroundColor:'#000',
                              height:20,
                              marginLeft:10
                            }}>

                        </View>

                          </View>
                          <View>
                          <Text style={styles.uniMainHomeLocText}>
                            5 campus</Text>
                          </View>
                        </View>

                        <View style={styles.uniMainHomeReviewContainer}>
                          <View style={styles.uniMainHomeReviewImageContainer}>
                            
                          <Image source={Star} style={styles.Revstar}/>
                          <Image source={Star} style={styles.Revstar}/>
                          <Image source={Star} style={styles.Revstar}/>
                          <Image source={Star} style={styles.Revstar}/>
                            
                          </View>
                          <View style={styles.uniMainHomeReviewTextContainer}>
                            <Text style={styles.uniMainHomeReviewText}>20 reviews</Text>
                          </View>

                          

                          <View style={{
                          width:2,
                          backgroundColor:'#000',
                          height:30,
                          marginLeft:10
                        }}>

                          </View>

                        

                        <View style={styles.reviewButton}>
                          <Text style={styles.reviewButtonText}>See Rating</Text>
                        </View>

                        </View>

                        <View
                        style={styles.ReadButton}
                        onTouchEnd={()=>{
                          navigation.navigate('UniData',  {university : Universities.find(
                            uni =>  uni.name  = item.name
                          )})
                        }}
                        >
                          <Text style={styles.ReadButtonText}>Read More</Text>
                        </View>
                        
                      </View>

                </View>
                
          {/* ALL BUTTON */}

                <View 
                  style={styles.allButton}
                  onTouchEnd={()=>{
                    navigation.navigate(item.home)
                  }}
                >
                    <Text style={styles.allButtonText}>{item.btn}</Text>
                </View>

              </View>
            )
          }}
        />

    );
  };
  

export default UniversityBody