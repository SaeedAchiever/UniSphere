import { 
 View, 
 Text, 
 Image, 
 ScrollView, 
 StatusBar, 
 ImageBackground, 
 SafeAreaView,
 Modal,
 FlatList 
} from 'react-native'
import React from 'react'


import styles from '../Styles'

const Star =  require('../../../assets/star.png')
const Kumasi = require('../../../assets/kumasi.jpeg')
const Accra = require('../../../assets/accra.jpg')
const Cape_Coast = require('../../../assets/cape_coast.jpeg')
const Top = require('../../../assets/top.png')
const CloseBtn = require('../../../assets/close.png')
const Placement = require('../../../assets/placement.png')
const Hostel = require('../../../assets/hostel.png')
const Arrow = require('../../../assets/arrow.png')
const ArrowDown = require('../../../assets/close.png')
const Pic_Icon = require('../../../assets/pic_icon.png')
const Vid_Icon = require('../../../assets/vid_icon.png')
const Logo = require('../../../assets/ucc.png')
const KNUST_Logo = require('../../../assets/knust.png')
const UEW_Logo = require('../../../assets/uew.png')
const Like = require('../../../assets/like.png')
const DisLike = require('../../../assets/dislike.png')
const Rating = () => {
  return (
    <View style={styles.schoolRatingMainContainer}>  
            <View style={styles.schoolNoteHeadContainer}>
              <View>
                <Text style={styles.schoolNoteHeadText}>Over All Rating</Text>
              </View>

              <View style={styles.schoolNoteBodyBoxHeader}>
                  <View style={styles.schoolNoteBodyBoxHeaderStar}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>4.3</Text>
                    <Image  
                      source={Star}
                      style={styles.schoolNoteBodyBoxHeaderStarImage}
                    />
                  </View>
                  <View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`18 Reviews`}</Text>
                  </View>
                </View>
              
              <View style={styles.schoolNoteBodyBox}>
                

                {/* Box Body */}

                <View style={styles.schoolNoteBodyBoxBody}>
                  {/* One */}
                  <View style={styles.schoolNoteRateBox}>
                    <View style={{flexDirection:'row',gap:3}}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>5</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    <View style={styles.schoolNoteRateLength}>
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'70%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>3</Text>
                  </View>

                  {/* Tow */}

                  <View style={styles.schoolNoteRateBox}>
                    <View style={{flexDirection:'row',gap:3}}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>4</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    <View style={styles.schoolNoteRateLength}>
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'40%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>4</Text>
                  </View>

                  {/* Three */}

                  <View style={styles.schoolNoteRateBox}>
                    <View style={{flexDirection:'row',gap:3}}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>3</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    <View style={styles.schoolNoteRateLength}>
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'10%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>2</Text>
                  </View>

                  {/* Four*/}

                  <View style={styles.schoolNoteRateBox}>
                    <View style={{flexDirection:'row',gap:3}}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>2</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    <View style={styles.schoolNoteRateLength}>
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'10%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>2</Text>
                  </View>

                  {/* Five*/}

                  <View style={styles.schoolNoteRateBox}>
                    <View style={{flexDirection:'row',gap:3}}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>1</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    <View style={styles.schoolNoteRateLength}>
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'5%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>1</Text>
                  </View>

                </View>

              </View>
              
            </View>
            <View style={styles.schoolNoteSubBoxMainContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.schoolNoteSubBoxContainer}>

                    {/* One */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Placement}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Placement</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`2.0`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                  {/* Two */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Hostel}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Hostel</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`4.0`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                  {/* Three */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Hostel}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Facilities</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`4.0`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                  {/* Four */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Hostel}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Sports</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`4.0`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                  {/* Four */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Hostel}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Social Activities</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`4.0`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                </View>
              </ScrollView>
            </View>
          </View>
  )
}

export default Rating