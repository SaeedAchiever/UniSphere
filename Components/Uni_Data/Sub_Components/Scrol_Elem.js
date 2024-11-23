import { 
 View, 
 Text, 
 ScrollView, 
} from 'react-native'

import React, {useState} from 'react'

import Overview from '../Sub_Elements/Overview';
import Admission from '../Sub_Elements/Admission';
import Scholarship from '../Sub_Elements/Scholarship';
import Reviews from '../Sub_Elements/Reviews';
import Entry_Reg from '../Sub_Elements/Entry_Reg';
import Dist_Learning from '../Sub_Elements/Dist_Learning'

import styles from '../Styles'

const Scrol_Elem = ({university}) => {

   const [selectedBody, setSelectedBody] = useState(() => ('Overview'));

   const handleSelectBody = (body) => {
     setSelectedBody(body);
   };

  return (
    <View>
      <ScrollView horizontal  showsHorizontalScrollIndicator={false}>

<View style={styles.horHeadersMainContaineter}>
  <View 
    style={styles.horHeadersContaineter}
    onTouchEnd={() => handleSelectBody('Overview')}
  >
    <Text style={styles.horHeadersTitle}>Overview</Text>
  </View>
  <View 
    style={styles.horHeadersContaineter}
    onTouchEnd={() => handleSelectBody('Admission')}
  >
    <Text style={styles.horHeadersTitle}>Notice Board</Text>
  </View>
  <View 
    style={styles.horHeadersContaineter}
    onTouchEnd={() => handleSelectBody('Entry_Reg')}
  >
    <Text style={styles.horHeadersTitle}>Entry Requirements</Text>
  </View>
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Scholarship')}
  
  >
    <Text style={styles.horHeadersTitle}>Scholarship</Text>
  </View>
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Dist_Learning')}
  
  >
    <Text style={styles.horHeadersTitle}>Distance Learning</Text>
  </View>
  
  
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Reviews')}
  >
    <Text style={styles.horHeadersTitle}>Reviews</Text>
  </View>
</View>

</ScrollView>

<View style={styles.horBodyMainContainer}>

{/* Render the selected body component */}

{selectedBody === 'Overview' && <Overview university={university}/>}
{selectedBody === 'Admission' && <Admission university={university}/>}
{selectedBody === 'Entry_Reg' && <Entry_Reg university={university}/>}
{selectedBody === 'Scholarship' && <Scholarship university={university}/>}
{selectedBody === 'Dist_Learning' && <Dist_Learning university={university}/>}
{selectedBody === 'Reviews' && <Reviews />}
{/* Add more body components as needed */}


</View>
    </View>
  )
}

export default Scrol_Elem