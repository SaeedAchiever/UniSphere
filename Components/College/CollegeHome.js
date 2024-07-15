import { View, Text,  Image, FlatList, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Star  = require("../../assets/star.png")


const Location  = require("../../assets/location.png")
const Winneba  = require("../../assets/winneba.jpg")
const UG  = require("../../assets/ug.jpeg")
const KNUST  = require("../../assets/knust.jpeg")
const Cape_Coast  = require("../../assets/cape_coast.jpeg")
const Filter  = require("../../assets/filter.png")


import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const CollegeHome = () => {

  const navigation  = useNavigation()

                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height


      return (
        <ScrollView style={styles.HomeContainer}>
          <SafeAreaView>
    
            {/* HEADER */}
            
            <View style={styles.uniHeader}>
            <View style={styles.logoContainer}>
              <View>
               <Text style={styles.logoName}>UniSphere</Text>
              </View>
              <View
               style={styles.filterImageContainer}
               onTouchEnd={()=>{
                navigation.navigate('FilterPage')
               }}
              >
                <Image  
                  source={Filter}
                  style={styles.filterImage}
                />
              </View>
            </View>
            <View style={styles.searchBarContainer}>
              <TextInput
                placeholder="Search for a University here..."
                style={styles.searchBar}
              />
            </View>
          </View>
    
            {/* MAIN CONTENT */}
  
            {/* NURSING COLLEGES */}
  
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
                      Nalerigu College Of Nursing And Midwifery
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
                            Nalerigu
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
                        4 courses</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
            <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={Winneba}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>
                        Bolgatanga College Of Nursing
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
                            {/* {item.location} */}
                            Bolgatanga
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
                        2 courses</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
  
            {/* ALL BUTTON */}
  
                <View
                 style={styles.allButton}
                 onTouchEnd={()=>{
                  navigation.navigate('Nursing')
                 }}
                >
                    <Text style={styles.allButtonText}>Nursing Colleges</Text>
                </View>
  
                {/* TEACHING COLLEGES */}
  
            <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={UG}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>
                        Gbewaa College Of Education
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
                            {/* {item.location} */}
                            Pusiga
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
                        4 courses</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
            <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={Cape_Coast}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>
                        Bagabaga  College Of Education
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
                            Bagabaga
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
                        2 campus</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
  
            {/* ALL BUTTON */}
  
            <View
             style={styles.allButton}
             onTouchEnd={()=>{
              navigation.navigate('Teaching')
             }}
            >
                    <Text style={styles.allButtonText}>Teaching Colleges</Text>
            </View>
  
            {/* AGRIC COLLEGES */}
  
            <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={Cape_Coast}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>
                      Kwadaso Agric College
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
                            Kwadaso
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
                        3 courses</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
            <View style={styles.UniHomeMainContainer}>
                  <View style={styles.UniHomeContainer}>
                    <View style={styles.UniHomeImageContainer}>
                      <Image  
                        source={Winneba}
                        style={styles.UniHomeImage}
                      />
                    </View>
  
                    <View style={styles.UniHomeTextContainer}>
                      <Text style={styles.UniHomeText}>
                        {/* {item.name} */}
                        Agogo Agric College
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
                            Atonso  Agogo
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
                        2 courses</Text>
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
  
                    <View style={styles.ReadButton}>
                      <Text style={styles.ReadButtonText}>Read More</Text>
                    </View>
                    
                  </View>
  
            </View>
  
            {/* ALL BUTTON */}
  
                <View
                 style={styles.allButton}
                 onTouchEnd={()=>{
                  navigation.navigate('AgricHome')
                 }}
                >
                    <Text style={styles.allButtonText}>Agric Colleges</Text>
                </View>
            
          </SafeAreaView>
        </ScrollView>
      );
}

export default CollegeHome