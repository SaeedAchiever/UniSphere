import { View, Text, Modal, Image } from 'react-native'
import React, { useState } from 'react'

import styles from '../HomeStyle'
import MatchForm from '../../MatchMe/MatchForm'

const Close  =  require('../../../assets/close.png')

const My_Match = () => {

  const [isMatchVisible,  setIsMatchVisible] = useState(false)

  return (
   <View style={styles.HomeMainScholarshipContainer}>
   <View style={styles.HomeScholarshipHeaderContainer}>
     <View>
       <Text style={styles.HomeScholarshipHeaderText}>Lets Get It For You</Text>
     </View>

   </View>

     <View style={styles.myMatchContainer}>
        <Text style={styles.myMatchText}>
         Take a two minutes survey to see which University 
         is best for you based on grades and preferred course
        </Text>
        <View
         style={styles.myMatchBtn}
         onTouchEnd={()=>{
          setIsMatchVisible(true)
         }}
         
        >
          
         <Text style={styles.myMatchBtnText}>Start</Text>
        </View>
     </View>

     <Modal 
      visible={isMatchVisible}
      animationType='fade'
    >
      <View 
        onTouchEnd={()=>{
          setIsMatchVisible(false)
        }}
        style={{
          position:'absolute',
        right:20,top:20,
        zIndex:100
        }}
      >
        <Image 
          source={Close}
          style={{
            width:35,
            height:35
          }}
        />
      </View>

      <MatchForm  />

     </Modal>
    </View>
  )
}

export default My_Match