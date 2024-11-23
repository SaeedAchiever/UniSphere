import { 
 View, 
 Text, 
 Image, 
 ScrollView, 
} from 'react-native'
import React from 'react'


import styles from '../Styles'

const Star =  require('../../../assets/star.png')
const Placement = require('../../../assets/placement.png')
const Hostel = require('../../../assets/hostel.png')
const Facilities = require('../../../assets/facilities.png')
const Sports = require('../../../assets/sports.png')
const Amenities = require('../../../assets/amenities.png')

const Rating = ({university}) => {
  return (
    <View style={styles.schoolRatingMainContainer}>  
            <View style={styles.schoolNoteHeadContainer}>
              <View>
                <Text style={styles.schoolNoteHeadText}>Over All Rating</Text>
              </View>

              <View style={styles.schoolNoteBodyBoxHeader}>
                  <View style={styles.schoolNoteBodyBoxHeaderStar}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`${university.rate}`}</Text>
                    <Image  
                      source={Star}
                      style={styles.schoolNoteBodyBoxHeaderStarImage}
                    />
                  </View>
                  <View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`${university.reviews} Reviews`}</Text>
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
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'100%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>-</Text>
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
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'80%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>-</Text>
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
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'60%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>-</Text>
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
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'40%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>-</Text>
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
                      <View style={[styles.schoolNoteRateLengthTwo,{width:'20%'}]}></View>
                    </View>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>-</Text>
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
                    <Text
                     style={styles.schoolNoteBodyBoxHeaderStarText}>
                      Placement
                    </Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text 
                      style={styles.schoolNoteBodyBoxHeaderStarText}>
                        {`${university.placement}`}
                      </Text>
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
                    <Text
                     style={styles.schoolNoteBodyBoxHeaderStarText}>
                      Hostel
                    </Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text
                       style={styles.schoolNoteBodyBoxHeaderStarText}>
                        {`${university.hostel}`}
                      </Text>
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
                        source={Facilities}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text 
                      style={styles.schoolNoteBodyBoxHeaderStarText}>
                        Facilities
                      </Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text
                       style={styles.schoolNoteBodyBoxHeaderStarText}>
                        {`${university.facilities}`}
                      </Text>
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
                        source={Sports}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Sports</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`${university.sports}`}</Text>
                      <Image  
                        source={Star}
                        style={styles.schoolNoteBodyBoxHeaderStarImage}
                      />
                    </View>
                    </View>
                    
                  </View>

                  {/* Five */}

                  <View style={styles.schoolNoteSubMainBox}>
                    <View>
                      <Image  
                        source={Amenities}
                        style={styles.schoolNoteSubMainBoxImage}
                      />
                    </View>

                    <View style={{alignItems:'center'}}>
                    <Text style={styles.schoolNoteBodyBoxHeaderStarText}>Social Activities</Text>
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <Text style={styles.schoolNoteBodyBoxHeaderStarText}>{`${university.amenities}`}</Text>
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