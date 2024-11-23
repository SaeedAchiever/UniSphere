import { View, Text, ScrollView, TextInput, Modal,Image } from 'react-native'
import React, { useState } from 'react'

import Universities from '../University/universities.json'


import styles from './MatchStyle'
import MatchUniversities from './MatchUniversities'

const Close = require('../../assets/close.png')


const MatchForm = () => {

const [isUniVisible, setIsUniVisible] = useState(false)

const [searchedData, setSearchedData] = useState('');


const searchedList = () => {
  if (searchedData === '') {
    return [];
  }
  return Universities.filter(
    value => value.name.toLowerCase().startsWith(searchedData.toLowerCase())
  );
};




  return (
    <View style={styles.MatchHomeMainContainer}>


      <ScrollView>
      <View style={styles.MatchHomeHeadContainer}>
        <Text style={styles.MatchHomeHeadText}>
          Complete the form below to get recommended to 
          Courses you're eligible to offer in your dream University
        </Text>
      </View>
        
        <View style={styles.MatchHomeCourseContainer}>
          <Text style={styles.MatchHomeCourseText}>
            Which University would you love to attend
          </Text>
            <TextInput 
              style={styles.courseInput}
              placeholder='Start typing then choose'
              value={searchedData}
            />
            <View style={styles.matchDisclaimer}>
              <Text style={styles.matchDisclaimerTitle}>Disclaimer</Text>
              <Text style={styles.matchDisclaimerText}>
                We do not store your results, its only used 
                as you intend and discarded aterwards
              </Text>
            </View>
        </View>

        {/* Core */}

        <View style={styles.coreContainer}>
          <Text style={styles.coreText}>Core Subjects</Text>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
              <Text style={styles.coreMainText}>Mathematics</Text>
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
              <Text style={styles.coreMainText}>English Lang.</Text>
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
              <Text style={styles.coreMainText}>Science</Text>
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
              <Text style={styles.coreMainText}>Social Studies</Text>
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

        </View>

        {/* Electives */}

        <View style={styles.coreContainer}>
          <Text style={styles.coreText}>Elective Subjects</Text>
          <Text style={styles.electiveText}>Enter your best three elective belows</Text>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
            <TextInput  
                style={styles.coreMainText}
                placeholder='Type to choose'
              />
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
            <TextInput  
                style={styles.coreMainText}
                placeholder='Type to choose'
              />
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

          <View style={styles.coreTextMainContainer}>
            <View style={styles.coreTextContainer}>
            <TextInput  
                style={styles.coreMainText}
                placeholder='Type to choose'
              />
            </View>
            <View>
              <TextInput  
                placeholder='.....'
                style={styles.gradeText}
              />
            </View>
          </View>

        </View>

        <View 
          style={styles.matchButton}
          onTouchEnd={()=>{
            setIsUniVisible(true)
          }}
        >
          <Text style={styles.matchButtonText}>Match Me</Text>
        </View>

      </ScrollView>

      <Modal
       visible={isUniVisible}
       animationType='slide'
      >
      <View
       style={{
        position:'absolute',
        right:20,top:20,
        zIndex:100
      }}
      onTouchEnd={()=>{
        setIsUniVisible(false)
      }}
      >
        <Image 
          source={Close}
          style={{width:35,height:35}}
        />
      </View>

        <View>
          <MatchUniversities  />
        </View>
        
      </Modal>


    </View>
  )
}

export default MatchForm