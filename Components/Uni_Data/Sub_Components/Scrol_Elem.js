import { 
 View, 
 Text, 
 Image, 
 ScrollView, 
 StatusBar, 
 ImageBackground, 
 SafeAreaView,
 Modal,
 FlatList 
} from 'react-native'

import React, {useState} from 'react'

import Overview from '../Sub_Elements/Overview';
import Admission from '../Sub_Elements/Admission';
import Programs from '../Sub_Elements/Programs';
import Fees from '../Sub_Elements/Fees';
import Scholarship from '../Sub_Elements/Scholarship';
import DistanceLearning from '../Sub_Elements/DistanceLearning';
import Reviews from '../Sub_Elements/Reviews';


import styles from '../Styles'

const Scrol_Elem = () => {

   // State to keep track of the selected body component

   const [selectedBody, setSelectedBody] = useState(() => ('Overview'));

   // Function to handle selecting a body com
   
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
    <Text style={styles.horHeadersTitle}>Admissions</Text>
  </View>
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Programs')}
  >
    <Text style={styles.horHeadersTitle}>Programs</Text>
  </View>
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Fees')}
  
  >
    <Text style={styles.horHeadersTitle}>Fees</Text>
  </View>
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('Scholarship')}
  
  >
    <Text style={styles.horHeadersTitle}>Scholarship</Text>
  </View>
  
  <View
  style={styles.horHeadersContaineter}
  onTouchEnd={() => handleSelectBody('DistanceLearning')}
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

{selectedBody === 'Overview' && <Overview />}
{selectedBody === 'Admission' && <Admission />}
{selectedBody === 'Programs' && <Programs />}
{selectedBody === 'Fees' && <Fees />}
{selectedBody === 'Scholarship' && <Scholarship />}
{selectedBody === 'DistanceLearning' && <DistanceLearning />}
{selectedBody === 'Reviews' && <Reviews />}
{/* Add more body components as needed */}


</View>
    </View>
  )
}

export default Scrol_Elem