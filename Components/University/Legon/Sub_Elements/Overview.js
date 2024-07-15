import { View, Text, Image, style } from 'react-native'
import React from 'react'

import styles from './Styles'

import Arrow  from  "../../../../assets/list.png"
import Pointer  from  "../../../../assets/recomended.png"
import Fact  from  "../../../../assets/bullet.png"

const Overview = () => {
  return (
    <View style={styles.overviewMainContainer}>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>Legon</Text>
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
          <Text style={styles.overviewHeadTitle}>Important Events</Text>
        </View>
      </View>

      {/* Events  table */}

      <View style={styles.tableMainContainer}>
        <View style={styles.tableLeftContainer}>
          <Text style={styles.tableTitle}>Events</Text>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>Admission Open</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>Admission Closed</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>Entrance Exams</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>Freshmen Reporting</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>Matriculation</Text>
          </View>

          

        </View>

        <View style={styles.tableRightContainer}>
          <Text style={styles.tableTitle}>Date</Text>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>10th Sep, 2024</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>12th Nov, 2024</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>22th Nov, 2024</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>17th Dec, 2024</Text>
          </View>

          <View style={styles.rowOne}>
            <Text style={styles.tableInnerText}>21th Dec, 2024</Text>
          </View>

        </View>

      </View>

      {/* Facts */}
      <View>

        <View style={styles.overviewHeadTitleContainer}>
          <View>
            <Image  
              source={Pointer}
              style={styles.overviewHeadImage}
            />
          </View>
          <Text style={styles.overviewHeadTitle}>Did You Know Legon Is The...</Text>
        </View>

        <View>
          <View style={styles.overviewFactContainer}>
            <Image  
              source={Fact}
              style={styles.factListImage}
            />
            <Text>Fastest Growing University  In Ghana ?</Text>
          </View>
          <View style={styles.overviewFactContainer}>
            <Image  
              source={Fact}
              style={styles.factListImage}
            />
            <Text>First University  to be Built In Ghana ?</Text>
          </View>
          <View style={styles.overviewFactContainer}>
            <Image  
              source={Fact}
              style={styles.factListImage}
            />
            <Text>Built By The Europeans</Text>
          </View>
        </View>
        

      </View>

    </View>
  )
}

export default Overview