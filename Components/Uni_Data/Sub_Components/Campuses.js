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

const Campus = ({
 name, region, town, uni_image,
 logo_img, campuses, campus_one, 
 campus_two, short_name, note
}) => {
  return (
         <View style={styles.campusesContainer}>
         <View style={styles.campusesTitleContainer}>
           <Text style={styles.campusesTitle}>explore a campus</Text>
         </View>

         <ScrollView horizontal  showsHorizontalScrollIndicator={false}>

           {/* TWO CAMPUS  CONTAINER */}

       <View style={styles.collegeHomeBodyContainerTwo}>


           {/* CAMPUS  ONE */}

       <View style={styles.collegeSubContainer}>

           <View style={styles.collegeHomeBodySubContainer}>
             <Image 
               source={campus_one}
               style={styles.collegeDepartmentImage}
             />
             <View
             >
             <Text style={styles.collegeDepartmentText}>{`3 Campus`}</Text>
             </View>
           </View>

       </View>

           {/* CAMPUS  TWO */}


       <View style={styles.collegeSubContainer}>
         <View style={styles.collegeHomeBodySubContainer}>
           <Image 
             source={campus_two}
             style={styles.collegeDepartmentImage}
           />
           <View
             style={styles.collegeDepartmentContainer}
           >
           <Text style={styles.collegeDepartmentText}>{`3 Campus`}</Text>
           </View>
         </View>
       </View>


      </View>

      </ScrollView>


         </View>
  )
}

export default Campus