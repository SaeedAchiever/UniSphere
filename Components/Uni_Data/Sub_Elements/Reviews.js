import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './Styles'

import Arrow  from  "../../../assets/list.png"
import Bullet  from  "../../../assets/star.png"
const UserPic = require('../../../assets/user_3.jpg')
const Rev_1 = require('../../../assets/user_1.jpg')
const Rev_2 = require('../../../assets/user_2.jpg')

const Reviews = () => {
  return (
    <View style={styles.overviewMainContainer}>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>User's Review</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
         Deserunt nulla reprehenderit aute exercitation exercitation 
         deserunt nulla incididunt. Labore consequat sunt duis ex minim 
          ex tempor sit deserunt occaecat nulla. Laboris 
        </Text>
      </View>

      {/* Review Body */}

      <View style={styles.reviewMainContainer}>
       <View style={styles.reviewSubContainer}>
        <View style={styles.reviewerPicContainer}>
         <Image 
          source={UserPic}
          style={styles.reviewerPic}
         />

         <View style={styles.reviewerStarContainer}>
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         </View>



        </View>

        <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
         Laboris Labore aute ullamco ad exercitation. Aute aliquip 
         tempor cupidatat labore ut exercitation veniam tempor 
         voluptate cillum veniam ea. Enim ut ex magna eiusmod ea 
         irure velit officia incididunt dolor. Non dolore nulla 
         exercitation cillum nisi qui tempor proident enim. 
        </Text>
      </View>
      <View style={styles.reviewerInfoContainer}>
          <Text style={styles.reviewerInfoText}>Gariba Saeed</Text>
      </View>
       </View>
      </View>

       {/* Review Body */}

       <View style={styles.reviewMainContainer}>
       <View style={styles.reviewSubContainer}>
        <View style={styles.reviewerPicContainer}>
         <Image 
          source={Rev_2}
          style={styles.reviewerPic}
         />

         <View style={styles.reviewerStarContainer}>
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         </View>



        </View>

        <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
        Adipisicing adipisicing enim officia irure proident sint 
        minim voluptate ipsum labore. Veniam aliquip velit enim 
        exercitation qui cupidatat officia fugiat reprehenderit. 
        Ex velit culpa non amet elit officia deserunt ad. Eu nostrud 
        </Text>
      </View>
      <View style={styles.reviewerInfoContainer}>
          <Text style={styles.reviewerInfoText}>Achiever Here</Text>
      </View>
       </View>
      </View>

       {/* Review Body */}

       <View style={styles.reviewMainContainer}>
       <View style={styles.reviewSubContainer}>
        <View style={styles.reviewerPicContainer}>
         <Image 
          source={Rev_1}
          style={styles.reviewerPic}
         />

         <View style={styles.reviewerStarContainer}>
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         <Image 
          source={Bullet}
          style={styles.reviewStar}
         />
         </View>



        </View>

        <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
         Consectetur ea deserunt nisi cupidatat minim amet proident 
         culpa esse. Incididunt eu labore ad sint proident adipisicing. 
         Consectetur veniam esse enim ad commodo voluptate sunt mollit 
         officia. Elit aute veniam id excepteur qui velit tempor sit 
         excepteur esse id laboris cillum. 
        </Text>
      </View>
      <View style={styles.reviewerInfoContainer}>
          <Text style={styles.reviewerInfoText}>Saeed Zibur</Text>
      </View>
       </View>
      </View>
    </View>
  )
}

export default Reviews