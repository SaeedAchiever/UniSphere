import { View, Text, FlatList,StatusBar} from 'react-native'
import React, { useState } from 'react';
import styles from './Style'
import Scholarships from  './Scholarship.json'

import { SafeAreaView } from 'react-native-safe-area-context';
import Head from '../HeadFoot/Head';
import { Pressable } from 'react-native';
import Header from '../Uni_Data/Sub_Components/Header';
import Footer from '../HeadFoot/Footer';

const ScholarshipHome = () => {

  const [hideDetails, setHideDetails] = useState(0)

  return (

      <SafeAreaView>
        <View style={styles.ScholarshipMainBodyContainer}>
          <Head />
          <FlatList
            data={Scholarships}
            keyExtractor= {item => item.id}
            
            renderItem={({item})=>{
              return (
                <View style={styles.ScholarshipListBodyContainer}>
                  <View>
                    <View>
                      <Text style={styles.ScholarshipMainBodyFlexHeaderText}>{`${item.name}`}</Text>
                    </View>

                    <View style={styles.ScholarshipMainBodyFlexContainer}>
                      <View style={styles.ScholarshipSubBodyFlexContainer}>
                        <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                        <Text style={styles.ScholarshipSubBodyFlexBodyText}>{`${item.deadline}`}</Text>
                      </View>
                      <View style={styles.ScholarshipSubBodyFlexContainer}>
                        <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                        <Text style={styles.ScholarshipSubBodyFlexBodyText}>{`${item.amount}`}</Text>
                      </View>
                      <View style={styles.ScholarshipButton}>
                        <Text style={styles.ScholarshipButtonText}>Apply</Text>
                      </View>
                    </View>
                  </View>

            <View>
              <View
               style={{height:hideDetails}}
               >
                <Text>Hello</Text>
              </View>

              <Pressable onPress={()=>{
                setHideDetails(hideDetails == 0 ? "auto" : 0)
              }}>
                <View style={styles.Button}>
                  <Text style={styles.ButtonText}>
                    Details
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
              )
            }}
          />
         <Footer />
        </View>
 </SafeAreaView>
  )
}
export default ScholarshipHome