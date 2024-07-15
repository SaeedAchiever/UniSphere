import { View, Text,  Image, FlatList, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  Teaching from './Teaching.json'

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
import  Head  from  '../HeadFoot/Head'
import  Footer  from  '../HeadFoot/Footer'

import { SafeAreaView } from 'react-native-safe-area-context';

const TeachingHome = () => {

  const navigation  = useNavigation()

                        // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width
      const deviceHeight = useWindowDimensions().height


  return (

    <View style={styles.HomeContainer}>
      <SafeAreaView>

                        {/* MAIN  CONTENT */}


      <FlatList 
        data={Teaching}
        renderItem={({item}) => {
          return (
            <View style={{
              marginBottom : item.id === '5'  ? 75  : 20,
              marginTop : item.id === '1'  ? 20  : 0
            }}>
            <View style={styles.collegeContainer}>
              <View style={styles.collegeTextContainer}> 
                <Text style={styles.collegeTextName}>{item.name}</Text>

                <Text style={styles.collegeTextInfo}>
                  {item.note}
                </Text>
              </View>
              <View style={styles.collegeImageContainer}>
                <Image  
                  source={Winneba}
                  style={styles.collegeImage}
                />
              </View>
            </View>

            <View style={styles.uniMainButtonContainer}>
              <View
               style={styles.uniMainButton}
               onTouchEnd={()=>{
                navigation.navigate(item.page)
               }}
              >
                  <Text style={styles.uniMainButtonText}>View profile</Text>
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

export default TeachingHome