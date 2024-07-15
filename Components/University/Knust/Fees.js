import { View, Text,SafeAreaView, ScrollView, Modal, Image, StatusBar } from 'react-native'
import React,{useState} from 'react'

import styles from '../..//Styles'
import FeesPricing from '../Winneba/FeesPricing'

const CloseBtn  = require("../../../assets/close.png")


const Fees = () => {

  const [isFeesModalVisible, setIsFeesModalVisible]  = useState(false)

  return (
    <SafeAreaView>

      <View style={styles.feesHeadContainer}>
            <Text style={styles.feesHeadText}>Provisional Fees for 2023-2024 Academic Year</Text>
          </View>
      <ScrollView>
        <View style={styles.feesMainContainer}>
          

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text>UNDERGRADUATE FEES</Text>
            </View>

            <View
             style={styles.feesBodyTextContainer}
             onTouchEnd={
              ()=>{
                setIsFeesModalVisible(true)
              }
             }
            >
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 400</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 300</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Undergraduate Level 200</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Undergraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Undergraduate Continuing Students</Text>
            </View>
          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text>POSTGRADUATE FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Postgraduate Final Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Regular Postgraduate Continuing Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Weekend/Evening Postgraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Postgraduate Final Year Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Ghanaian Fee Paying Postgraduate Continuing Students</Text>
            </View>
          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text>DISTANCE FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Distance Undergraduate Final Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Distance Undergraduate Continuing Students</Text>
            </View>

          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text>GENERAL FEES</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Faculty/School/Departmental Fees</Text>
            </View>

          </View>

          <View style={styles.feesBodyMainContainer}>
            <View style={styles.feesBodyContainer}>
             <Text>INTERNATIONAL STUDENTS</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Undergraduate Students</Text>
            </View>

            <View style={styles.feesBodyTextContainer}>
             <Text style={styles.feesBodyText}>Postgraduate Students</Text>
            </View>

          </View>

        </View>

             {/* MODALS */}

      <Modal  visible={isFeesModalVisible}>
        
        <FeesPricing  />

      </Modal>
      <StatusBar  />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Fees