import { View, Text,SafeAreaView,StatusBar,Image } from 'react-native'
import React from 'react'

import styles from '../..//Styles'

const ProgrammesHome = () => {

 const Cape_Coast = require('../../../assets/kumasi.jpeg')
 
  return (
    <SafeAreaView>

     <View style={styles.ProgrammesHomeMainContainer}>
      <View style={styles.ProgrammesHomeHeadContainer}>
       <Text style={styles.ProgrammesHomeHeadText}>Programmes offered</Text>
      </View>

      <View style={styles.ProgrammesHomeBodyContainer}>

              <View style={styles.ProgrammesHomeSubBodyContainer}>
                <Image 
                  source={Cape_Coast}
                  style={styles.ProgrammesHomeImage}
                />
                <View>
                <Text style={styles.ProgrammesHomeText}>Regular Postgraduate</Text>
                </View>
              </View>

              <View style={styles.ProgrammesHomeSubBodyContainer}>
                <Image 
                  source={Cape_Coast}
                  style={styles.ProgrammesHomeImage}
                />
                <View>
                <Text style={styles.ProgrammesHomeText}>Sandwich Postgraduate</Text>
                </View>
              </View>

              <View style={styles.ProgrammesHomeSubBodyContainer}>
                <Image 
                  source={Cape_Coast}
                  style={styles.ProgrammesHomeImage}
                />
                <View>
                <Text style={styles.ProgrammesHomeText}>Regular Undergraduate</Text>
                </View>
              </View>

              <View style={styles.ProgrammesHomeSubBodyContainer}>
                <Image 
                  source={Cape_Coast}
                  style={styles.ProgrammesHomeImage}
                />
                <View>
                <Text style={styles.ProgrammesHomeText}>Sandwich Undergraduate</Text>
                </View>
              </View>

              <View style={styles.ProgrammesHomeSubBodyContainer}>
                <Image 
                  source={Cape_Coast}
                  style={styles.ProgrammesHomeImage}
                />
                <View>
                <Text style={styles.ProgrammesHomeText}>Distance Programmes</Text>
                </View>
              </View>
              
      </View>

     </View>

    <StatusBar />
    </SafeAreaView>
  )
}

export default ProgrammesHome