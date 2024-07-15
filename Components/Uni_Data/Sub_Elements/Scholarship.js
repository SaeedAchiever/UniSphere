import { View, Text,SafeAreaView, ScrollView, Modal, Image, StatusBar } from 'react-native'
import React,{useState} from 'react'

import styles from '../Styles'

const Logo  = require("../../../assets/scholar.png")
const KNUST_Logo  = require("../../../assets/scholar_two.png")
const UEW_Logo  = require("../../../assets/scholar_three.png")
const Correct  = require("../../../assets/correct.png")
const Wrong  = require("../../../assets/wrong.png")




const Scholarship = () => {

  return (
      <View style={styles.schoolNoteMainContainer}>
            <View style={styles.schoolNoteHeadContainer}>
              <Text style={styles.schoolNoteHeadText}>Available Scholarships</Text>
            </View>

            <View style={styles.schoolNoteBodyContainer}>
              <Text style={styles.schoolNoteBodyText}>
              incididunt dolor. Duis elit voluptate velit 
              occaecat incididunt occaecat ad est do.</Text>
            </View>

            {/* Body */}

            <View style={styles.feedsBodyMainContainer}>
              <View style={[styles.feedsBodyContainer, {backgroundColor:'#cecece'}]}>
                <View style={styles.feedslogoImageContainer}>
                  <Image
                   source={Correct}
                   style={styles.feedslogoImage}
                  />
                </View>

                <View style={styles.feedslogoTextContainer}>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`Free Tuition`}</Text>
                  </View>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`100%`}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={styles.feedslogoText}>{`Easy Apply`}
                      </Text>
                      <Image  source={Correct}
                        style={styles.revStar}/>
                    </View>
                    
                  </View>
                </View>
                
              </View>
            </View>
            
            <View style={styles.feedsBodyMainContainer}>
              <View style={[styles.feedsBodyContainer, {backgroundColor:'#cecece'}]}>
                <View style={styles.feedslogoImageContainer}>
                  <Image
                   source={KNUST_Logo}
                   style={styles.feedslogoImage}
                  />
                </View>

                <View style={styles.feedslogoTextContainer}>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`Monthly`}</Text>
                  </View>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`GHC 20.6K+`}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={styles.feedslogoText}>{`Easy Apply`}
                      </Text>
                      <Image  source={Wrong}
                        style={styles.revStar}/>
                    </View>
                    
                  </View>
                </View>
                
              </View>
            </View>

            <View style={styles.feedsBodyMainContainer}>
              <View style={[styles.feedsBodyContainer, {backgroundColor:'#cecece'}]}>
                <View style={styles.feedslogoImageContainer}>
                  <Image
                   source={UEW_Logo}
                   style={styles.feedslogoImage}
                  />
                </View>

                <View style={styles.feedslogoTextContainer}>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`Fully Funded Scholarship`}</Text>
                  </View>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.feedslogoText}>{`GHS 1K+`}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={styles.feedslogoText}>{`Easy Apply`}
                      </Text>
                      <Image  source={Correct}
                        style={styles.revStar}/>
                    </View>
                    
                  </View>
                </View>
                
              </View>
            </View>

            
          </View>
  )
}

export default Scholarship