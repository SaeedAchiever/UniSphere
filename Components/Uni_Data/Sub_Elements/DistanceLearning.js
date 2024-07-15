import { View, Text,Image } from 'react-native'
import React from 'react'

import Arrow  from  "../../../assets/list.png"
import Star  from  "../../../assets/star.png"


import styles from './Styles'

const DistanceLearning = () => {
  return (
    <View style={styles.overviewMainContainer}>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>Distance Learning</Text>
      </View>

                  {/* Body */}
      
      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Dolore exercitation esse ad cillum duis veniam 
          dolor ut elit consequat quis Lorem magna magna.
          Sit ad irure ullamco proident. Ut minim aliquip 
          nisi reprehenderit officia in excepteur dolore 
          ex tempor sit deserunt occaecat nulla. Laboris 
        </Text>
      </View>

      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Star}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>General Requirements</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Deserunt nulla reprehenderit aute exercitation exercitation 
          deserunt nulla incididunt. Labore consequat sunt duis ex minim 
          irure. Velit esse Lorem nulla consectetur ullamco sint nulla. 
          Eu labore nisi quis minim cillum quis aliqua. Et laborum elit 
        </Text>
      </View>

      <View style={styles.distLernMainContainer}>
        <View style={styles.overviewHeadTitleContainer}>
          <View>
            <Image  
              source={Arrow}
              style={styles.overviewHeadImage}
            />
          </View>
            <Text style={styles.overviewHeadTitle}>Distance Learning Centers</Text>
        </View>

        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Ashante Region</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Western Region</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Volta Region</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Upper East</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Upper West</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Northern Region</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Bono Region</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Bono East</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Ahafo Region</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Central Region</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
        </View>
        <View style={styles.distLernSubContainer}>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
          <View style={styles.distLernSubBtn}>
           <Text style={styles.distLernSubBtnText}>Greater Accra</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default DistanceLearning