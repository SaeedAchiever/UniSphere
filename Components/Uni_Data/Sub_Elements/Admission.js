import { View, Text,Image, ScrollView, style } from 'react-native'
import styles from './Styles'

import Arrow  from  "../../../assets/list.png"


export default function Admission() {
  return (
    <View>
      <View style={styles.overviewHeadTitleContainer}>
        <View>
          <Image  
            source={Arrow}
            style={styles.overviewHeadImage}
          />
        </View>
        <Text style={styles.overviewHeadTitle}>2024 | Admissions</Text>
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

     <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      <View style={styles.admissionTableContainer}>
       <View style={styles.admissionTableOneContainer}>
        <View style={styles.tableTitleContainer}>
          <Text style={styles.tableTitle}>Event</Text>
        </View>

        <View style={styles.tableBodyContainer}>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Freshmen Reporting  to Campus</Text>
          </View>
          <View style={styles.tableListContainer}>
           <Text style={styles.tableList}>Matriculation</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Culture Day</Text>
          </View>
          <View style={styles.tableListContainer}>
           <Text style={styles.tableList}>Mid-Sem Exams</Text>
          </View>
        </View>
       </View>
       <View style={styles.admissionTableTwoContainer}>
        <View style={styles.tableTitleContainer}>
         <Text style={styles.tableTitle}>Date</Text>
        </View>

        <View style={styles.tableBodyContainer}>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Jun 01 - Jun 03</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Jun 04 - Jun 06</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Jun 13 - Jun 16</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Jul 01 - Jul 02</Text>
          </View>
        </View>
       </View>
       <View style={styles.admissionTableThreeContainer}>
        <View style={styles.tableTitleContainer}>
          <Text style={styles.tableTitle}>Status</Text>
        </View>

        <View style={styles.tableBodyContainer}>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Ongoing</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Upcoming</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Upcoming</Text>
          </View>
          <View style={styles.tableListContainer}>
            <Text style={styles.tableList}>Past</Text>
          </View>
        </View>
       </View>
      </View>

     </ScrollView>


    </View>
  )
}