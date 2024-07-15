import { View, Text,SafeAreaView, ScrollView, Modal, Image, StatusBar } from 'react-native'
import React,{useState} from 'react'

import styles from '../..//Styles'

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

      <View style={styles.modalFeeHeadContainer}>
        <View style={styles.modalFeeHeadTextContainer}>
          <Text style={styles.modalFeeHeadText}>
            PROVISIONAL FEES FOR 2023/2024 ACADEMIC YEAR
          </Text>
        </View>
        
        
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
      </View>

        <ScrollView showsVerticalScrollIndicator={false}>

        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
          
          <View style={styles.feeModalMainContainer}>
            
            <View style={styles.SerialNumMainContainer}>
              <View style={styles.ContainerOne}>
               <Text>S/N</Text>
              </View>

              <View style={styles.ContainerTwo}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>i .</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>ii .</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>iii .</Text>
              </View>

                              {/* 2 */}

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>2.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerTwoText}>1.</Text>
              </View>
              
            </View>

                    {/* FACULTY/PROGRAMME */}

             <View style={styles.FacultyMainContainer}>
              <View style={styles.ContainerOne}>
               <Text>FACULTY/PROGRAMME</Text>
              </View>

              <View style={styles.ContainerTwo}>
               <Text style={styles.ContainerTwoText}>
                  FACULTY OF APPLIED BEHAVIOURAL
                  SCIENCES IN EDUCATION
                </Text>
              </View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
                B.Ed. (Counselling Psychology/ Psychology/Special
                Education/Early Grade Education/Special Education
                with ICT, Intergrated Home Economics, Clothing &
                Textiles, Social Studeis, French, English, HPERS)
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>B.Ed.(Community-Based Rehabilitation and Dsibaility Studies)</Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                Diploma (Community-Based Rehabilitation &
                Disability Studies)
               </Text>
              </View>

            </View>

            {/* Main University Fees */}


            <View style={styles.MainUniFeesContainer}>
              <View style={styles.ContainerOne}>
                <Text style={styles.MainUniFeesText}>Main University Fees (A)</Text>
              </View>

              <View style={styles.ContainerTwo}></View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
                108.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                108.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>
              
              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>
              
              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                110.00
                </Text>
              </View>

            </View>

            {/* End Of Main University Fees */}


                {/* TUTITION  FEES */}


            <View style={styles.MainUniFeesContainer}>
              <View style={styles.ContainerOne}>
                <Text style={styles.MainUniFeesText}>Tuition Fees (B)</Text>
              </View>
              <View style={styles.ContainerTwo}></View>
              
              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

            </View>

                {/* END OF  TUITION */}



                {/* Fees for Third Party Services  */}

            <View style={styles.MainUniFeesContainer}>
              <View style={styles.ContainerOne}>
                <Text style={styles.MainUniFeesText}>Fees for Third Party Services (C)</Text>
              </View>
              <View style={styles.ContainerTwo}></View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
                2,324.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                2,324.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>
              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                1,853.00
                </Text>
              </View>

            </View>

                {/* End Of Fees for Third Party Services  */}


                {/* Residential Fees  */}

            <View style={styles.MainUniFeesContainer}>
              <View style={styles.ContainerOne}>
                <Text style={styles.MainUniFeesText}>Residential Fees (D)</Text>
              </View>
              <View style={styles.ContainerTwo}></View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>
              
              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

            </View>

                {/* End Of Residential Fees  */}


                {/* Total Fees  */}

            <View style={styles.MainUniFeesContainer}>
              <View style={styles.ContainerOne}>
                <Text style={styles.MainUniFeesText}>Total Fees (D)</Text>
              </View>
              <View style={styles.ContainerTwo}></View>

              <View style={styles.ContainerThree}>
               <Text style={styles.ContainerThreeText}>
               2,432.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
               2,432.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
               1,963.00
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>
              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                ---
                </Text>
              </View>

              <View style={styles.ContainerFour}>
               <Text style={styles.ContainerThreeText}>
                end
                </Text>
              </View>

            </View>

                {/*End Of Total Fees  */}

            
          </View>
        </ScrollView>

        </ScrollView>

      </Modal>
      <StatusBar  />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Fees