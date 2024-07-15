import { View, Text,ImageBackground, ScrollView,Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Nalerigu = require('../../../assets/nalerigu.jpeg')
const Midwifery = require('../../../assets/midwifery.jpg')
const AlliedHealth = require('../../../assets/allied_health.jpg')
const GeneralNurses = require('../../../assets/general-nurses.jpg')
const NursingAssisants = require('../../../assets/nursing-assistants.png')

const CloseBtn = require('../../../assets/close.png')

const NaleriguHome = () => {

  const navigation  = useNavigation()

  const [isRegModalVisible, setisRegModalVisible] = useState(false)

  return (
   <ScrollView>
    <View style={styles.collegeHomeMainContainer}>
      <ImageBackground
       source={Nalerigu}
       style={styles.CollegeBgImage}
      >
       <Text style={styles.CollegeMainName}>Nalerigu College of Nursing and midwifery</Text>
       <Text style={styles.CollegeMainLocation}>Nalerigu , North East Region</Text>
      </ImageBackground>

      <View style={styles.collegeInfoContainer}>
        <Text style={styles.collegeInfoText}>
          Founded in 2008, Nalerigu's Nursing and Midwifery 
          Training College has become a top choice for applicants, 
          dedicated to the motto "Caring for Humanity is Our Supreme 
          Commitment." The institution focuses on producing 
          cost-effective and efficient healthcare professionals. 
          Graduates contribute significantly to reducing disability, 
          suffering, and mortality, especially among marginalized populations in Ghana.
        </Text>
      </View>

      <View style={styles.collegeHomeBodyMainContainer}>
        <View style={styles.collegeHomeHeadContainer}>
         <Text style={styles.collegeHomeHeadText}>
          Departments / Programmes Offered
        </Text>
        </View>

        <View style={styles.collegeHomeBodyContainer}>

          <View style={styles.collegeSubContainer}>
                    <View style={styles.collegeHomeBodySubContainer}>
                      <Image 
                        source={NursingAssisants}
                        style={styles.collegeDepartmentImage}
                      />
                      <View onTouchEnd={()=>{
                        navigation.navigate('NursingAssistant')
                      }}>
                        <Text style={styles.collegeDepartmentText}>College Of</Text>
                       <Text style={styles.collegeDepartmentText}>nursing</Text>
                        <Text style={styles.collegeDepartmentText}>assistants</Text>
                      </View>
                    </View>

                    <View style={styles.collegeHomeBodySubContainer}>
                      <Image 
                        source={GeneralNurses}
                        style={styles.collegeDepartmentImage}
                      />
                      <View onTouchEnd={
                        ()=>{
                          navigation.navigate('GeneralNursing')
                        }
                      }>
                      <Text style={styles.collegeDepartmentText}>College Of</Text>
                      <Text style={styles.collegeDepartmentText}>registered</Text>
                      <Text style={styles.collegeDepartmentText}>general nurses </Text>
                      </View>
                    </View>
          </View>

          <View style={styles.collegeSubContainer}>
                    <View style={styles.collegeHomeBodySubContainer}>
                      <Image 
                        source={AlliedHealth}
                        style={styles.collegeDepartmentImage}
                      />
                      <View onTouchEnd={
                        ()=>{
                          navigation.navigate('AlliedHealth')
                        }
                      }>
                      <Text style={styles.collegeDepartmentText}>College Of</Text>
                      <Text style={styles.collegeDepartmentText}>Allied Health</Text>
                      </View>
                    </View>

                    <View style={styles.collegeHomeBodySubContainer}>
                      <Image 
                        source={Midwifery}
                        style={styles.collegeDepartmentImage}
                      />
                      <View onTouchEnd={
                        ()=>{
                          navigation.navigate('MidWifery')
                        }
                      }>
                      <Text style={styles.collegeDepartmentText}>College Of</Text>
                      <Text style={styles.collegeDepartmentText}>midwifery</Text>
                      </View>
                    </View>
          </View>

        </View>

        {/* MISSION */}

        <View style={styles.misVisContainer}>
          <Text style={styles.misVisHeadText}>mission statement</Text>

          <Text style={styles.misVisBodyText}>
            "
            We are dedicated to producing high quality polyvalent 
            nurses through training methodologies that nurture positive 
            character development, attitudes, superior academic skills 
            and the attainment of full human potential which guarantees 
            the delivery of exceptional care that exceeds client’s 
            expectations for satisfaction and accountability
            "
          </Text>
        </View>

        {/* ENTRY REWUIREMENTS */}

        <View style={styles.collegeMainEntryRequirementsContainer}
          onTouchEnd={()=>{
            setisRegModalVisible(true)
          }}
        >
            <Text style={styles.collegeMainEntryRequirementsText}>
              Entry requirements
            </Text>
        </View>

          {/* MISSION */}

        <View style={styles.misVisContainer}>
          <Text style={styles.misVisHeadText}>vision statement</Text>

          <Text style={styles.misVisBodyText}>
            "
            A prominent institution dedicated to advancing the quality 
            of nursing practice through nursing education programmes that 
            foster the discovery and application of research/evidence-based 
            knowledge in response to the contemporary health needs of clients.
            "
          </Text>
        </View>



      </View>

    </View>

                 {/* ENTRY REQUIREMENTS */}

    <Modal
      visible={isRegModalVisible}
    >
    <ScrollView>

    <View 
     style={styles.modalBtnContainer}
     onTouchEnd={()=>{
      setisRegModalVisible(false)
     }}
    >
       <Image 
        source={CloseBtn}
        style={styles.modalBtnImage}
       />
      </View>

      <View style={styles.entryReqModalMainContainer}>
        <View style={styles.entryReqModalHeadContainer}>
          <Text style={styles.entryReqModalHeadText}>Admission Requirements</Text>
        </View>
        
        <View style={styles.entryReqModalBodyContainer}>
          <Text style={styles.entryReqModalBodyText}>
          The school will follow the entry requirement set 
          by the Nursing and Midwives council of Ghana. 
          The school welcomes graduates from second cycle 
          institutions- SSSCCE and WASSCE.
          </Text>

          <View style={styles.entryReqModalBodyMainContainer}>
            <View>
             <Text style={styles.entryReqModalHeadText}>(i) For SSSCE Candidates</Text>
             <Text style={styles.entryReqModalBodyText}>
              An aggregate score of twenty-seven (27 ) 
              or better, comprising (A-E) in three (3) Core
              Subjects, i.e. ENGLISH,MATHEMATICS, and 
              INTEGRATED SCIENCE and (A=E ) in any three 
              ( 3 ) Elective subjects from any programme in 
              Senior Secondary School.
              </Text>
            </View>

            <View>
             <Text style={styles.entryReqModalHeadText}>(ii) For WASSCE Candidates</Text>
             <Text style={styles.entryReqModalBodyText}>
             An aggregate score of fourty-two (42)or better, 
             comprising(A1-E8) in three (3) Core Subjects, 
             i.e. ENGLISH, MATHEMATICS, and INTEGRATED 
             SCIENCE and (A1-E8) in any three ( 3 ) Elective 
             subjects from any programme Senior High School 
             with any of the electives below; Agric.econs. 
             & ext. Agric.sc. & env.stud, Animal husbandry, 
             Applied electricity, Auto mechanics, Basketry, 
             Biology, Building, Construction, Bus.maths & 
             Cost bus.maths & Prn.cost Business Management, 
             Ceramics, Chemistry, Christian Rel Studies, 
             Clerical Office Duties, Clothing & Textiles, 
             Crop Husb & Horticulture, Dagaare, Dagbani, 
             Dangme, Economics, Electronics, Ewe, Fante, 
             Farm Mechanisation, Financial Accounting, 
             Fisheries, Foods & Nutrition Forestry, French, 
             Ga, Gen know in Art, General Agric, Geography, 
             Gonja, Government, Graphic Design, History, 
             Horticulture, Islamic Rel Studies Jewellery, 
             Kasem, leatherwork, Life skills, literature-in-english, 
             Management in living, Mathematics(elect) metalwork, 
             music, Nzema, physics picture making, Prin of cost 
             Accounting, Sculpture, Technical Drawing, Textiles 
             Twi(Akuapem) Twi(Asante) typewriting woodwork
             </Text>
            </View>
          </View>

          <View>
             <Text style={styles.entryReqModalHeadText}>ADDITIONAL INFORMATION</Text>
             <Text style={styles.entryReqModalBodyText}>
                According to the Ghana Nurses and Midwives Council, 
                students completing the program successfully must 
                register with the Council and take a qualifying 
                examination. Programs are offered in English and 
                are delivered using a variety of instruction modes. 
                Courses may be offered in the classroom, lab and 
                online. Upon successful registration, each 
                student is provided with various documentation, 
                including ID cards, an e-mail account which is used to
              communicate important information about programme
              and course events. The syllabus/course content 
              for the following program is approved by the 
              Nurses and Midwives Council of Ghana
              </Text>
            </View>

        </View>
      </View>
      </ScrollView>
    </Modal>
    
   </ScrollView>

  )
}

export default NaleriguHome