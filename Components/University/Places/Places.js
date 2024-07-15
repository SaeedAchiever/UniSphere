import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'

import styles from './Styles'

const Accra = require('../../../assets/accra.jpg')
const UniversityImg = require('../../../assets/knust.jpeg')
const Star = require('../../../assets/star.png')

const Places = () => {
  return (
   <ScrollView>

    <View style={styles.placesMainContainer}>
      <View style={styles.placesHeadContainer}>
        <Text style={styles.placesHeadText}>{`#Accra`}</Text>
        <ImageBackground 
         source={Accra}
         style={styles.placesBGImage}
        >
         <View style={styles.placesBGTextContainer}>
          <Text style={styles.placesBGText}>{`21 Univesities`}</Text>
         </View>
        </ImageBackground>
      </View>

      {/* Body */}

      <View style={styles.placesBodyContainer}>

       <View style={styles.placesBodyHeadContainer}>
        <Text style={styles.placesBodyHeadText}>Discover the best Universities in the hearts of Accra</Text>
       </View>
       

       <View style={styles.UniversityBodyMainConatiner}>
        <ImageBackground 
         style={styles.UniversityImgContainer}
         source={UniversityImg}
        >
         <View style={styles.placesRateContainer}>
          <Text style={styles.placesRateText}>{`4.2`}</Text>
          <Image 
           source={Star}
           style={styles.placesRateStar}
          />
         </View>
        </ImageBackground>

        <View style={styles.placesUnderNote}>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>Public Inst.</Text>
          <Text style={styles.placesRateText}>Fee GHC 1k - GHC 20k</Text>
         </View>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>B.Sc M.Sc Phd</Text>
          <Text style={styles.placesRateText}>Rank #333</Text>
         </View>
         
        </View>

        <View style={styles.downloadBtn}>
         <Text style={styles.downloadBtnText}>Download Brochure</Text>
        </View>

       </View>

       <View style={styles.UniversityBodyMainConatiner}>
        <ImageBackground 
         style={styles.UniversityImgContainer}
         source={UniversityImg}
        >
         <View style={styles.placesRateContainer}>
          <Text style={styles.placesRateText}>{`4.2`}</Text>
          <Image 
           source={Star}
           style={styles.placesRateStar}
          />
         </View>
        </ImageBackground>

        <View style={styles.placesUnderNote}>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>Public Inst.</Text>
          <Text style={styles.placesRateText}>Fee GHC 1k - GHC 20k</Text>
         </View>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>B.Sc M.Sc Phd</Text>
          <Text style={styles.placesRateText}>Rank #333</Text>
         </View>
         
        </View>

        <View style={styles.downloadBtn}>
         <Text style={styles.downloadBtnText}>Download Brochure</Text>
        </View>

       </View>

       <View style={styles.UniversityBodyMainConatiner}>
        <ImageBackground 
         style={styles.UniversityImgContainer}
         source={UniversityImg}
        >
         <View style={styles.placesRateContainer}>
          <Text style={styles.placesRateText}>{`4.2`}</Text>
          <Image 
           source={Star}
           style={styles.placesRateStar}
          />
         </View>
        </ImageBackground>

        <View style={styles.placesUnderNote}>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>Public Inst.</Text>
          <Text style={styles.placesRateText}>Fee GHC 1k - GHC 20k</Text>
         </View>
         <View style={styles.placesUnderNoteText}>
          <Text style={styles.placesRateText}>B.Sc M.Sc Phd</Text>
          <Text style={styles.placesRateText}>Rank #333</Text>
         </View>
         
        </View>

        <View style={styles.downloadBtn}>
         <Text style={styles.downloadBtnText}>Download Brochure</Text>
        </View>

       </View>

      </View>
    </View>
    </ScrollView>
   
  )
}

export default Places