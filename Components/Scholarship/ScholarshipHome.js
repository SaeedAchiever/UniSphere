import { View, Text,  Image,  useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home  = require("../../assets/home.png")
const University  = require("../../assets/university.png")
const College  = require("../../assets/college.png")
const My_List  = require("../../assets/favorites.png")
const Scholarship  = require("../../assets/recomended.png")


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
const Scholar  = require("../../assets/scholarship.png")

import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';

const ScholarshipHome = () => {

  const navigation  = useNavigation()

                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height

      

  return (

    <View>
      <SafeAreaView>


                        {/* MAIN  CONTENT */}


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ScholarshipMainContainer}>
          
          {/* SCHOLARSHIP HEADER CONTAINER */}

          <View style={styles.ScholarshipMainHeaderContainer}>
            <View>
              <Text style={styles.ScholarshipMainHeaderText}>Upto 100% scholarship</Text>
            </View>
            <View style={styles.ScholarshipMainHeaderInputContainer}>
              <TextInput  
                placeholder=' Search for a scholarship here...'
                style={styles.ScholarshipMainHeaderInput}
              />
            </View>
          </View>

          {/* SCHOLARSHIP BODY CONTAINER */}

               {/* FIRST  SCHOLARSHIP HERE */}

          <View style={styles.ScholarshipMainBodyContainer}>
            <View>
              <View>
                <Text style={styles.ScholarshipMainBodyFlexHeaderText}>100% KNUST scholarship</Text>
              </View>

              <View style={styles.ScholarshipMainBodyFlexContainer}>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>20th Nov, 2024</Text>
                </View>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>GHC 2000</Text>
                </View>
                <View style={styles.ScholarshipButton}>
                  <Text style={styles.ScholarshipButtonText}>Apply</Text>
                </View>
              </View>

            </View>

            <View style={styles.Button}>
              <Text style={styles.ButtonText}>
                Details
              </Text>
            </View>
          </View>

               {/* SECOND  SCHOLARSHIP HERE */}

          <View style={styles.ScholarshipMainBodyContainer}>
            <View>
              <View>
                <Text style={styles.ScholarshipMainBodyFlexHeaderText}>100% KNUST scholarship</Text>
              </View>

              <View style={styles.ScholarshipMainBodyFlexContainer}>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>20th Nov, 2024</Text>
                </View>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>GHC 2000</Text>
                </View>
                <View style={styles.ScholarshipButton}>
                  <Text style={styles.ScholarshipButtonText}>Apply</Text>
                </View>
              </View>

            </View>

            <View style={styles.Button}>
              <Text style={styles.ButtonText}>
                Details
              </Text>
            </View>
          </View>

               {/* THIRD  SCHOLARSHIP HERE */}

          <View style={styles.ScholarshipMainBodyContainer}>
            <View>
              <View>
                <Text style={styles.ScholarshipMainBodyFlexHeaderText}>100% KNUST scholarship</Text>
              </View>

              <View style={styles.ScholarshipMainBodyFlexContainer}>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>20th Nov, 2024</Text>
                </View>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>GHC 2000</Text>
                </View>
                <View style={styles.ScholarshipButton}>
                  <Text style={styles.ScholarshipButtonText}>Apply</Text>
                </View>
              </View>

            </View>

            <View style={styles.Button}>
              <Text style={styles.ButtonText}>
                Details
              </Text>
            </View>
          </View>

          {/* FOURTH  SCHOLARSHIP HERE */}

          <View style={styles.ScholarshipMainBodyContainer}>
            <View>
              <View>
                <Text style={styles.ScholarshipMainBodyFlexHeaderText}>100% KNUST scholarship</Text>
              </View>

              <View style={styles.ScholarshipMainBodyFlexContainer}>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>20th Nov, 2024</Text>
                </View>
                <View style={styles.ScholarshipSubBodyFlexContainer}>
                  <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                  <Text style={styles.ScholarshipSubBodyFlexBodyText}>GHC 2000</Text>
                </View>
                <View style={styles.ScholarshipButton}>
                  <Text style={styles.ScholarshipButtonText}>Apply</Text>
                </View>
              </View>

            </View>

            <View style={styles.Button}>
              <Text style={styles.ButtonText}>
               Details
              </Text>
            </View>
          </View>

        </View>

      </ScrollView>

 </SafeAreaView>


    </View>

  )
}

export default ScholarshipHome