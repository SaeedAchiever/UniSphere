import { View, Text,SafeAreaView, ScrollView, Modal, Image, StatusBar } from 'react-native'
import React,{useState} from 'react'

import styles from '../Styles'

const CloseBtn  = require("../../../assets/close.png")
const Arrow  = require("../../../assets/list.png")


const Fees = () => {

  const [isFeesModalVisible, setIsFeesModalVisible]  = useState(false)

  return (
    <SafeAreaView>

      

      <View style={styles.overviewHeadTitleContainer}>
      <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
            <Text style={styles.overviewHeadTitle}>2023-2024 Provisional Fees</Text>
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

        
      <View 
        style={styles.modalBtnContainer}
        onTouchEnd={()=>{
          setIsFeesModalVisible(false)
        }}
        >
       <Image 
        source={CloseBtn}
        style={styles.modalBtnImage}
       />
      </View>
      

        <Text>Hello</Text>

      

      </Modal>

      <StatusBar  />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Fees