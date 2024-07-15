import { View, Text,  Image, ScrollView, TextInput, } from 'react-native'

import { useNavigation } from '@react-navigation/native';

const Location  = require("../../assets/location.png")
const Winneba  = require("../../assets/winneba.jpg")
const ATU  = require("../../assets/atuCampus.jpeg")
const KNUST  = require("../../assets/knust.jpeg")
const UDScampus  = require("../../assets/udscampus.jpeg")
const Cape_Coast  = require("../../assets/cape_coast.jpeg")
const Star  = require("../../assets/star.png")
const Filter  = require("../../assets/filter.png")

import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const UniversityHome = () => {


    const navigation = useNavigation()


  
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

          {/* PUBLIC UNIVERSITIES */}

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
                    Kwame Nkrumah university Of Science And Technology | KNUST
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
                          Kumasi
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
                      5 campus</Text>
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
                    navigation.navigate('KnustPage')
                   }}
                  >
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
                      University Of Education | UEW
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
                          Winneba
                        </Text>
                      </View>

                      {/* LINEC*/}

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

                  <View
                   style={styles.ReadButton}
                   onTouchEnd={()=>{
                    navigation.navigate('WinnebaPage')
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
                  navigation.navigate('PublicUniversityHome')
                }}
              >
                  <Text style={styles.allButtonText}>Public Universities</Text>
                  <View style={styles.buttonLine}></View>
              </View>

              {/* PRIVATE UNIVERSITIES */}

          <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View style={styles.UniHomeImageContainer}>
                    <Image  
                      source={ATU}
                      style={styles.UniHomeImage}
                    />
                  </View>

                  <View style={styles.UniHomeTextContainer}>
                    <Text style={styles.UniHomeText}>
                      Accra Technical University
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
                          Accra
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
                      1 campus</Text>
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
                      <Text style={styles.uniMainHomeReviewText}>54 reviews</Text>
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
                    navigation.navigate('ATUPage')
                   }}
                  >
                    <Text style={styles.ReadButtonText}>Read More</Text>
                  </View>
                  
                </View>

          </View>
          <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View style={styles.UniHomeImageContainer}>
                    <Image  
                      source={UDScampus}
                      style={styles.UniHomeImage}
                    />
                  </View>

                  <View style={styles.UniHomeTextContainer}>
                    <Text style={styles.UniHomeText}>
                    University for Development Studies
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
                          Tamale
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
                      1 campus</Text>
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
                    navigation.navigate('UDSPage')
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
            navigation.navigate('PrivateUniversityHome')
           }}
          >
                  <Text style={styles.allButtonText}>Private Universities</Text>
          </View>

          {/* AFFILIATED UNIVERSITIES */}

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
                    Accra Technical University | ATU
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
                          Kumasi
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
                      5 campus</Text>
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
                      University Of Education | UEW
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
                          Winneba
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
                navigation.navigate('MoreUniversitiesHome')
               }}
              >
                  <Text style={styles.allButtonText}>Affiliated Universities</Text>
              </View>
          
        </SafeAreaView>
      </ScrollView>
    );
  };
  

export default UniversityHome