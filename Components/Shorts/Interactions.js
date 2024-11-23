import { View, Text,useWindowDimensions, Pressable } from 'react-native'
import React from 'react'

import styles from './Style'
import { Image } from 'react-native'

const Like = require("../../assets/like2.png")
const DisLike = require("../../assets/dislike2.png")
const Comment = require("../../assets/comment2.png")
const Share = require("../../assets/share2.png")

const Interactions = ({showComments,item}) => {

 const width = useWindowDimensions().width
 const height = useWindowDimensions().height

  return (
    <View style={styles.InteractionsContainer}>
      <View style={[styles.InteractionsButtonsContainer,{width:width > 600 ? 90 : 70,height : width > 600 ? 90 : 70}]}>
       <Image source={Like} style={styles.InteractionsButtons}/>
       <Text style={[styles.InteractionsText, {
        fontSize: width > 600 ? 15 : 10
       }]}>{`${item.likes.length}`}</Text>
      </View>
      <View style={[styles.InteractionsButtonsContainer,{width:width > 600 ? 90 : 70,height : width > 600 ? 90 : 70}]}>
       <Image source={DisLike} style={styles.InteractionsButtons}/>
       {/* <Text style={[styles.InteractionsText, {
        fontSize: width > 600 ? 15 : 10
       }]}>102K</Text> */}
      </View>

      <View
       style={[styles.InteractionsButtonsContainer,{
        width:width > 600 ? 90 : 70,
        height : width > 600 ? 90 : 70
        }]}
        onTouchEnd={()=>{
         showComments()
        }}
      >
       <Image source={Comment} style={styles.InteractionsButtons}/>
       <Text style={[styles.InteractionsText, {
        fontSize: width > 600 ? 15 : 10
       }]}>{`${item.comments.length}`}</Text>
      </View>

      <View style={[styles.InteractionsButtonsContainer,{width:width > 600 ? 90 : 70,height : width > 600 ? 90 : 70}]}>
       <Image source={Share} style={styles.InteractionsButtons}/>
       {/* <Text style={[styles.InteractionsText, {
        fontSize: width > 600 ? 15 : 10
       }]}>102K</Text> */}
      </View>
    </View>
  )
}

export default Interactions