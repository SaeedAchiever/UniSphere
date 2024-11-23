import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from '../HomePage/HomeStyle'

import colleges from "./College.json"

const Location  = require("../../assets/location.png")
const Star  = require("../../assets/star.png")

const CollegeBody = () => {

  const navigation = useNavigation()

  return (
    <View>
      <FlatList 
      data={colleges}
      renderItem={({item})=>{
       return (
        <View>
                  <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={{uri : item.image}}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>{`${item.name}`}</Text>
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
                          <Text style={styles.uniMainHomeLocText}>{`${item.town}, ${item.location}`}</Text>
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
                       <Text style={styles.uniMainHomeLocText}>{`Courses ${item.courses.length}`}</Text>
                      </View>
                    </View>
  
                    <View style={styles.uniMainHomeReviewContainer}>
                      <View style={styles.uniMainHomeReviewImageContainer}>
                        
                        
                        
                      </View>
                      <View style={styles.uniMainHomeReviewTextContainer}>
                        <Text style={styles.uniMainHomeReviewText}>{`${item.review}`}</Text>
                      </View>
                        <Image source={Star}style={styles.Revstar}/>
  
  
                      <View style={{
                      width:2,
                      backgroundColor:'#000',
                      height:30,
                      marginLeft:10
                    }}>
  
                    </View>
  
  
                    <View style={styles.reviewButton}>
                      <Text style={styles.uniMainHomeReviewText}>{`${item.institution} Inst.`}</Text>
                    </View>
  
                    </View>
  
                    <View
                     style={styles.ReadButton}
                     onTouchEnd={()=>{
                      navigation.navigate("UniData", {colleges: item})
                     }}
                    >
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
                </View>
       )
      }}
      />
    </View>
  )
}

export default CollegeBody