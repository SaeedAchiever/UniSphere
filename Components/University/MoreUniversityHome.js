import { View, Text,  Image,  useWindowDimensions, FlatList, ScrollView, TextInput, } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MoreUniversities from './MoreUniversities.json'

const Location  = require("../../assets/location.png")
const KNUST  = require("../../assets/accra.jpg")
const Star  = require("../../assets/star.png")

import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const UniversityHome = () => {

                        // DEFINING  WIDTH AND HEIGHT 

      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height

    const navigation = useNavigation()

          return (

                    <View style={styles.HomeContainer}>
                      <SafeAreaView>

                                        {/* MAIN  CONTENT */}

                        <FlatList 
                          data={MoreUniversities}
                          showsVerticalScrollIndicator={false}
                          renderItem={({item}) => {
                            return (
                                
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
                                    {item.name}
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
                                          {item.location}
                                        </Text>
                                      </View>

                                      {/* LINE */}

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
                                      {item.campus} campus</Text>
                                    </View>
                                  </View>

                                  <View style={styles.uniMainHomeReviewContainer}>
                                    <View style={styles.uniMainHomeReviewImageContainer}>
                                      
                                      <Image  
                                        source={Star}
                                        style={styles.Revstar}
                                      />
                                      <Image  
                                        source={Star}
                                        style={styles.Revstar}
                                      />
                                      <Image  
                                        source={Star}
                                        style={styles.Revstar}
                                      />
                                      <Image  
                                        source={Star}
                                        style={styles.Revstar}
                                      />
                                      <Image  
                                        source={Star}
                                        style={styles.Revstar}
                                      />
                                      
                                    </View>
                                    <View style={styles.uniMainHomeReviewTextContainer}>
                                      <Text style={styles.uniMainHomeReviewText}>20 reviews</Text>
                                    </View>

                                    {/* LINE */}

                                    <View style={{
                                    width:2,
                                    backgroundColor:'#000',
                                    height:30,
                                    marginLeft:10
                                  }}>

                                  </View>

                                  {/* BUTTON */}

                                  <View style={styles.reviewButton}>
                                    <Text style={styles.reviewButtonText}>See Rating</Text>
                                  </View>

                                  </View>

                                  <View
                                  style={styles.ReadButton}
                                  onTouchEnd={()=>{
                                    navigation.navigate(item.Page)
                                  }}
                                  >
                                    <Text style={styles.ReadButtonText}>Read More</Text>
                                  </View>
                                  
                                </View>

                          </View>
                            )

                          }}
                        />
                              
                      
                </SafeAreaView>


                    </View>

          )
}

export default UniversityHome