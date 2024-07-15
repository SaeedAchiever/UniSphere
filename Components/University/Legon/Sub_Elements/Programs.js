import { View, Text,Image } from 'react-native'
import React from 'react'

import styles from './Styles'

import Arrow  from  "../../../../assets/list.png"
import Star  from  "../../../../assets/star.png"
import List  from  "../../../../assets/lists.jpg"


const Programs = () => {
  return (
    <View>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>Programmes / Courses</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Enim nulla esse occaecat eiusmod nisi. Laboris 
          mollit dolore ex amet veniam exercitation sint 
          adipisicing amet veniam quis deserunt esse.
        </Text>
      </View>

      <View style={styles.departmentMainContainer}>

       
       <View style={styles.departmentContainer}>
        <Image  
          source={Star}
          style={styles.departmentListImage}
        />
        <Text style={styles.departments}>HEALTH SCIENCES</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>Medical School</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>Medicine and of Surgery</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>School of Pharmacy</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>Doctor of Pharmacy (PharmD)</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>Dental School</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>Dental Surgery</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>Biomedical and Allied Health Sciences</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>Bachelor of Science in Dietetics</Text>
        <Text style={styles.programs}>Bachelor of Science in Medical Laboratory</Text>
        <Text style={styles.programs}>Bachelor of Science in Occupational Therapy</Text>
        <Text style={styles.programs}>Bachelor of Science in Physiotherapy</Text>
        <Text style={styles.programs}>Bachelor of Science in Radiography</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>Nursing & Midwifery</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>Bachelor of Science in Nursing</Text>
        <Text style={styles.programs}>Bachelor of Science in Midwifery</Text>
       </View>

       <View style={styles.departmentFacultyContainer}>
        <Image 
         source={List}
         style={styles.departmentListImage}
        />
        <Text style={styles.faculties}>School of Public Health</Text>
       </View>

       <View style={styles.departmentistContainer}>
        <Text style={styles.programs}>
         Bachelor of Public Health (Health Promotion, 
         Nutrition, Health Information, Disease Control, 
         Environmental Health)
        </Text>
       </View>

       <View style={styles.smallLine}></View>

      </View>
    </View>
  )
}

export default Programs