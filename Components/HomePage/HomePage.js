import { View, Text,  Image,  useWindowDimensions, ScrollView, } from 'react-native'
import React from 'react';
import Swiper from 'react-native-swiper';

const UserPic  = require("../../assets/user_3.jpg")
const Location  = require("../../assets/location.png")
const Winneba  = require("../../assets/winneba.jpg")
const UG  = require("../../assets/ug.jpeg")
const KNUST  = require("../../assets/knust.jpeg")
const SmallImage  = require("../../assets/recomended.png")
const Accra  = require("../../assets/accra.jpg")
const Kumasi  = require("../../assets/kumasi.jpeg")
const Tema  = require("../../assets/tema.jpeg")
const Cape_Coast  = require("../../assets/cape_coast.jpeg")
const Tamale  = require("../../assets/tamale.jpeg")
const TopPlaceLogo  = require("../../assets/top_place.png")
const Loan  = require("../../assets/loan.png")
const Student_Loan  = require("../../assets/student_loan.png")
const Top  = require("../../assets/trends.png")
const Scholarship  = require("../../assets/recomended.png")
const Scholar  = require("../../assets/scholarship.png")

import styles from './HomeStyle'

const HomePage = () => {

                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height

  return (

    <View style={styles.HomeContainer}>



                        {/* MAIN  CONTENT */}


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeMainContainer}>
          <View style={styles.welcomeContainer}>
            <View style={styles.welcomeImageContainer}>

            <Image  
              source={UserPic}
              style={{
                width: deviceWidth >  500 ? 100 : 80,
                height: deviceWidth >  500 ? 100 : 80,
                borderRadius:50,
              }}
            />
            </View>
            <View style={styles.welcomeNoteContainer}>
              <Text style={[styles.welcomeNoteText, {fontSize: deviceWidth  > 500 ? 17  : 15}]}>Hey Saeed,</Text>
              <Text style={[styles.welcomeNoteText, {fontSize: deviceWidth  > 500 ? 17  : 15}]}>Glad to see ya again</Text>
            </View>
          </View>
        </View>
        

                {/* RECOMMENDATIONS */}

        <View style={styles.recommendationMainContainer}>
          <View style={styles.recommendationHeadContainer}>
            <Image  
              source={SmallImage}
              style={{
                    width:  deviceWidth > 500 ? 40 :  25,
                    height:  deviceWidth > 500 ? 40 :  25,
                    marginHorizontal:7
              }}
            />
            <Text style={[
              styles.recommendationHeadText, 
              {fontSize:  deviceWidth  > 500 ? 22 : 17}
              ]}>Suggested for you</Text>
          </View>


        <Swiper autoplay showsPagination={false}>

          <View style={styles.recommendationContainer}>
            
            <View style={styles.recommendationTextImageContainer}>
              <Text style={{
                fontSize: deviceWidth >  500 ? 16 :  13 ,
                fontWeight:'400',
                paddingVertical:5
                }}>University Of Education</Text>
              <View style={{flexDirection:'row'}}>
                <Image  
                  source={Location}
                  style={{
                    width:  deviceWidth > 500 ? 35 :  20,
                    height:  deviceWidth > 500 ? 35 :  20,
                    marginHorizontal:7
                  }}
                />
              <Text>Winneba</Text>
              </View>
            </View>

            <View style={styles.recommendationTextImageContainer}>
              <Image  
                source={Winneba}
                style={styles.recommendationImage}
              />
            </View>

          </View>

          
          <View style={styles.recommendationContainer}>
            
          <View style={styles.recommendationTextImageContainer}>
              <Text style={{
                fontSize: deviceWidth >  500 ? 16 :  13 ,
                fontWeight:'400',
                paddingVertical:5
                }}>University Of Ghana</Text>
              <View style={{flexDirection:'row'}}>
                <Image  
                  source={Location}
                  style={{
                    width:  deviceWidth > 500 ? 35 :  20,
                    height:  deviceWidth > 500 ? 35 :  20,
                    marginHorizontal:7
                  }}
                />
              <Text>Accra</Text>
              </View>
            </View>

            <View style={styles.recommendationTextImageContainer}>
              <Image  
                source={UG}
                style={styles.recommendationImage}
              />
            </View>

          </View>
          <View style={styles.recommendationContainer}>
            
          <View style={styles.recommendationTextImageContainer}>
              <Text style={{
                fontSize: deviceWidth >  500 ? 16 :  13 ,
                fontWeight:'400',
                paddingVertical:5
                }}>K.N.U.S.T</Text>
              <View style={{flexDirection:'row'}}>
                <Image  
                  source={Location}
                  style={{
                    width:  deviceWidth > 500 ? 35 :  20,
                    height:  deviceWidth > 500 ? 35 :  20,
                    marginHorizontal:7
                  }}
                />
              <Text>Kumasi</Text>
              </View>
            </View>

            <View style={styles.recommendationTextImageContainer}>
              <Image  
                source={KNUST}
                style={styles.recommendationImage}
              />
            </View>

          </View>

     </Swiper>
     
        </View>

        {/* TOP PLACES  TO  STUDY import GHAHA */}

        <View style={styles.topPlaceMainContainer}>
        
        <View style={styles.topPlaceHeadContainer}>
          <Image  
            source={TopPlaceLogo}
            style={{
              width:20,
              height:20
            }}
          />
          <Text style={{
            fontSize: deviceWidth > 500 ? 18 : 16,
            textTransform:'capitalize',
            fontWeight:300
          }}>Top places to study in ghaha</Text>
        </View>

          <View style={styles.topPlaceContainer}>


            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.placeContainer}>
                <Image  
                  source={Accra}
                  style={{
                    width:  deviceWidth >  500 ? 80  : '90%',
                    height:  deviceWidth >  500 ? 80  : 80,
                  }}
                />
                <Text>Accra</Text>
              </View>

              <View style={styles.placeContainer}>
                <Image  
                    source={Kumasi}
                    style={{
                      width:  deviceWidth >  500 ? 80  : '100%',
                      height:  deviceWidth >  500 ? 80  : 80
                    }}
                  />
                <Text>Kumasi</Text>
              </View>

              <View style={styles.placeContainer}>
                <Image  
                      source={Cape_Coast}
                      style={{
                        width:  deviceWidth >  500 ? 80  : '100%',
                        height:  deviceWidth >  500 ? 80  : 80
                      }}
                    />
                <Text>Cape Coast</Text>
              </View>

              <View style={styles.placeContainer}>
              <Image  
                      source={Tamale}
                      style={{
                        width:  deviceWidth >  500 ? 80  : '100%',
                        height:  deviceWidth >  500 ? 80  : 80
                      }}
                    />
                <Text>Tamale</Text>
              </View>
            </ScrollView>
          </View>
        </View>

                      {/* BASED ON USER FIELD */}


        <View style={styles.userFieldMainContainer}>
          <View style={styles.userFieldHeadContainer}>
            <Text style={styles.userFieldHeadText}>
              get best  school  based on  your study  field
            </Text>
          </View>

          <View style={styles.userFieldBodyContainer}>
            <View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>Web development</Text>
              </View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>Medicine</Text>
              </View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>Agriculture</Text>
              </View>
            </View>

            <View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>business</Text>
              </View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>civil engineering</Text>
              </View>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>music</Text>
              </View>
            </View>

            
            
          </View>
        </View>

              {/* PREFERERANCE */}

          <View style={styles.preferanceMainContainetr}>
            <View style={styles.preferanceHeadContainer}>
                <Text style={[styles.preferanceHeadText, {
                  fontSize: deviceWidth > 500 ? 20  : 17,
                  fontWeight:'400',
                  paddingLeft:'10%',
                  textTransform:"capitalize",
                  fontStyle:'italic'
                }]}>You might also like</Text>
            </View>

            {/* preferance one */}

            <View style={styles.preferanceBodyContainer}>
              <View>
                <View style={{
                  alignItems:'center'
                }}>
                  <Text style={styles.preferanceSchoolText}>K N U S T</Text>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    position:'relative',
                  }}>
                    <Image  
                      source={Location}
                      style={{
                        width:  deviceWidth > 500 ? 20 :  15,
                      height:  deviceWidth > 500 ? 20 :  15,
                      }}
                    />
                  <Text style={{
                    fontSize:  deviceWidth > 500 ? 16 :  12,
                  }}> Accra, 4yrs</Text>
                  </View>
                </View>
                <View  style={[styles.Button, {
                  width:'100%',
                  marginTop:'20%',
                }]}>
                  <Text  style={styles.ButtonText}>See eligibility</Text>
                </View>
              </View>

              <View>
              <Image  
                      source={KNUST}
                      style={{
                        width:  deviceWidth > 500 ? 160 :  130,
                      height:  deviceWidth > 500 ? 180 :  150,
                      }}
                    />
              </View>
            </View>

            {/* preferance  two */}

            <View style={styles.preferanceBodyContainer}>
              <View>
                <View style={{
                  alignItems:'center'
                }}>
                  <Text style={styles.preferanceSchoolText}>University Of Ghana</Text>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    position:'relative',
                  }}>
                    <Image  
                      source={Location}
                      style={{
                        width:  deviceWidth > 500 ? 20 :  15,
                      height:  deviceWidth > 500 ? 20 :  15,
                      }}
                    />
                  <Text style={{
                    fontSize:  deviceWidth > 500 ? 16 :  12,
                  }}> Legon, 4yrs</Text>
                  </View>
                </View>
                <View  style={[styles.Button, {
                  width:'100%',
                  marginTop:'20%',
                }]}>
                  <Text  style={styles.ButtonText}>See eligibility</Text>
                </View>
              </View>

              <View>
              <Image  
                      source={UG}
                      style={{
                        width:  deviceWidth > 500 ? 160 :  130,
                      height:  deviceWidth > 500 ? 180 :  150,
                      }}
                    />
              </View>
            </View>
          </View>


        {/* TOP IN SPECIFIC FIELD AND CERTIFICATION */}

      <View style={styles.topCertificationMainContainer}>
        <View style={styles.topCertificationHeadContainer}>
            <Image  
              source={Top}
              style={{
                width:  deviceWidth > 500 ? 20 :  15,
                height:  deviceWidth > 500 ? 20 :  15,
                marginRight:5
              }}
            />
            <Text style={{
                fontSize:  deviceWidth > 500 ? 20 : 15,
                fontWeight:'500',
                fontStyle:'italic',
                textTransform:"capitalize"
            }}>Top institutes for your certification</Text>
        </View>

        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>

        <View style={styles.topCertificationBodyContainer}>

          <View style={styles.mainInnerCertificationContainer}>
            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5,
              }}>
                <Image  
                  source={Tema}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%',
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

                  {/* SECOND  ONE */}

            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Kumasi}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>
          </View>

          {/* THREE */}

          <View style={styles.mainInnerCertificationContainer}>
          <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Cape_Coast}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

            {/* FOUR */}

            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Accra}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

          </View>

          {/* THREE */}

          <View style={styles.mainInnerCertificationContainer}>
          <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Cape_Coast}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

            {/* FOUR */}

            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Accra}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

          </View>

          {/* THREE */}

          <View style={styles.mainInnerCertificationContainer}>
          <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Cape_Coast}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

            {/* FOUR */}

            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Accra}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

          </View>

          {/* THREE */}

          <View style={styles.mainInnerCertificationContainer}>
          <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Cape_Coast}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

            {/* FOUR */}

            <View style={styles.InnerCertificationContainer}>
              <View style={{
                marginVertical:5,
                marginRight:5
              }}>
                <Image  
                  source={Accra}
                  style={{
                    width:  deviceWidth > 500 ? 75 :  50,
                    height:  deviceWidth > 500 ? 95 :  70,
                  }}
                />
              </View>
              <View>
                <Text style={{
                    fontSize:  deviceWidth > 500 ? 12 :  10,
                    width:'30%'
                }}>
                  Best Colleges in Ghana for either diploma or
                  degree in Nursing and mid-wifery
                </Text>
              </View>
            </View>

          </View>

          

          
        </View>
        </ScrollView>
      </View>

                {/* CATEGORIES */}

      <View style={styles.categoriesMainContainer}>
        <View style={styles.categoriesHeadContainer}>
          <Text style={{
            fontSize:  deviceWidth > 500 ? 20 : 15,
            fontWeight:'500',
            textTransform:"capitalize",
          }}>Are you Looking for...</Text>
        </View>

        <View style={styles.categoriesButtonContainer}>
          <View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Top Public Uni</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Top private Uni</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Best labs</Text>
            </View>
          </View>

          <View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Lower Fees</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>High fees</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Cheap Hostels</Text>
            </View>
          </View>

          
        </View>
      </View>

      {/* SCHOLARSHIP */}

      <View style={styles.scholarshipMainContainer}>
        <View style={styles.scholarshipHeadContainer}>
          <Image  
          source={Scholarship}
          style={{
            width:  deviceWidth > 500 ? 30 :  20,
            height:  deviceWidth > 500 ? 30 :  20,
            marginRight:6
          }}
          />
          <Text style={{
            fontSize:  deviceWidth > 500 ? 20 : 15,
            fontWeight:'500',
            fontStyle:'italic',
            textTransform:"capitalize",
            letterSpacing:0.4
          }}>Scholarships</Text>
        </View>

        <View style={styles.scholarshipBodyContainer}>
          <View style={{
            width:'40%'
          }}>
            <Image  
              source={Scholar}
              style={{
                width:  deviceWidth > 500 ? 180 : 150,
                height:  deviceWidth > 500 ? 180 : 150,
                
              }}
            />
          </View>
          <View style={{
             width:'60%',
            paddingLeft:10
              }}>
            <Text>
              Check vast of universities and Colleges list of
              scholarships to see see which one you're eligible for.
            </Text>
          </View>
        </View>
      </View>

        
        {/* LOAN */}

        <View style={styles.loanMainContainer}>
          <View style={styles.loanHeadContainer}>
            <Text style={[
              styles.loanHeadText, 
              {fontSize:deviceWidth > 500 ? 20 : 17,
                fontWeight:'500',
                fontStyle:'italic'
              }
              ]}>Looking for student loan?</Text>
          </View>
          <View style={styles.loanContainer}>
            <View style={styles.loanText}>
              <Text style={{
                fontSize:deviceWidth > 500 ? 17 : 14,
                fontWeight:'300',
              }}>
                Securing educational funds is pivotal for personal 
                growth. Diligently managing student loans ensures 
                financial stability.
              </Text>
            </View>

            <View style={styles.loanImage}>
              <Image 
                source={Student_Loan}
                style={{
                  width:  deviceWidth > 500 ? 160 : 120,
                  height:  deviceWidth > 500 ? 160 : 120,
                }}
              />
            </View>
          </View>

          <View style={styles.Button}>
          <Text style={styles.ButtonText}>Check Available Loans</Text>
          </View>
        </View>

      </ScrollView>

    </View>

  )
}

export default HomePage