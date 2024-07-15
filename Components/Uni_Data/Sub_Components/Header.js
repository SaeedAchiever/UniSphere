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

const UG = require('../../../assets/ug.jpeg')


const Header = ({
 name, region, town, uni_image,
 logo_img, short_name, note
}) => {

  return (
    <View>
     <ImageBackground
       source={UG}
       style={styles.CollegeBgImage}
      >
       <Text style={styles.CollegeMainName}>{name}</Text>
       <Text style={styles.CollegeMainLocation}>{region}</Text>
       <Text style={styles.CollegeMainLocation}>{town}</Text>
      </ImageBackground>

        {/* Here */}

          <View style={styles.bodyContainer}>

            <View style={styles.paraContainer}>

              <View style={styles.uniHomeChildren}>

                {/* Review */}

                <View style={styles.uniHomeRevContainer}>
                  <Image  
                    source={Star}
                    style={styles.revStar}
                  />
                  <Image  
                    source={Star}
                    style={styles.revStar}
                  />
                  <Image  
                    source={Star}
                    style={styles.revStar}
                  />
                  <Image  
                   source={Star}
                   style={styles.revStar}
                  />
                  <Image  
                    source={Star}
                    style={styles.revStar}
                  />

                  <View style={styles.revTextContainer}>
                    <Text style={styles.revText}>Based On </Text>
                    <Text style={styles.revText}>20 Reviews</Text>
                  </View>

                </View>

                {/* Establishment */}

                <View>
                  <Text style={styles.revText}>Since 1940</Text>
                </View>

                {/* Ranking */}

                <View>
                  <Text style={styles.revText}>Ranked #4 Nationwide</Text>
                </View>

                {/* Alumni */}

                <View>
                  <Text style={styles.revText}>Over 100,000 Graduates</Text>
                </View>

              </View>

              <View style={styles.uniLogoMainContainer}>
                <Image  
                  source={logo_img}
                  style={styles.uniLogo}
                  alt='Logo'
                />
              </View>

            </View>
          </View>

            <View 
              style={styles.applyContainer}
              onTouchEnd={()=>{
                alert('Download Brochure')
              }}
            >
              <Text style={styles.applyText}>Download Brochure</Text>
            </View>

            <View style={styles.schoolNoteMainContainer}>
              <View style={styles.schoolNoteHeadContainer}>
                <Text style={styles.schoolNoteHeadText}>{`Welcome to  ${short_name}`}</Text>
              </View>
              
              {/* Body */}

              <View style={styles.schoolNoteBodyContainer}>
                  <Text style={styles.schoolNoteBodyText}>{`${note}`}</Text>
              </View>
            </View>
            
    </View>
  )
}

export default Header