import { View, Text, Image, FlatList, Linking, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './Styles'

import linksData from '../../University/json/links.json'
import factsData from '../../University/json/facts.json'

import Arrow from "../../../assets/list.png"
import Pointer from "../../../assets/recomended.png"
import Fact from "../../../assets/bullet.png"

const Overview = ({ university }) => {

  // Function to handle link opening with error handling
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url)
      } else {
        throw new Error('Unsupported URL')
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to open the link. Please try again later.')
    }
  }

  // Find the university in the links.json that matches the current university's name
  const universityLinks = linksData.find(linkItem => linkItem.name === university.name)
  const universityFacts = factsData.find(factItem => factItem.name === university.name)

  return (
    <View style={styles.overviewMainContainer}>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>{university.nick}</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Enim nulla esse occaecat eiusmod nisi. Laboris 
          mollit dolore ex amet veniam exercitation sint 
          adipisicing amet veniam quis deserunt esse. Officia 
          mollit commodo exercitation magna voluptate. Velit 
          mollit voluptate laboris culpa proident.
        </Text>
      </View>

      <View>
        <View style={styles.overviewHeadTitleContainer}>
          <View>
            <Image  
              source={Pointer}
              style={styles.overviewHeadImage}
            />
          </View>
          <Text style={styles.overviewHeadTitle}>Important Links</Text>
        </View>
      </View>

      {/* Links Section */}
      <View>
        {universityLinks && universityLinks.links.length > 0 ? (
          <FlatList
            data={universityLinks.links}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => openLink(item.link)} 
                style={styles.linkTextContainer}
              >
                <Text style={styles.linkText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>No links available for {university.name}</Text>
        )}
      </View>

      {/* Facts */}
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Pointer}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>{`Did You Know ${university.nick}...`}</Text>
      </View>

      <View style={styles.overviewFactContainer}>
        <FlatList 
          data={universityFacts.facts}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                <Image  
                  source={Fact}
                  style={styles.factListImage}
                />
                <Text
                 style={[styles.tableInnerText, 
                 { marginVertical: 10 }]}>
                  {`${item}`}
                </Text>
              </View>
            )
          }}
        />
      </View>

    </View>
  )
}

export default Overview
