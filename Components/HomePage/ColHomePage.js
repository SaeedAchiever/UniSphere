import { View, Text,FlatList } from 'react-native'
import React from 'react';
import styles from './HomeStyle'

import colleges from "../College/College.json"

import Suggested from './UniSubComponents/Suggested';
import Top_Place from './UniSubComponents/Top_Place';
import Ongoing_Admission from './UniSubComponents/Ongoing_Admission';
import Preference from './UniSubComponents/Preference';
import Certification from './UniSubComponents/Certification';
import Sub_Scholarship from './UniSubComponents/Sub_Scholarship';
import Desired_Course from './UniSubComponents/Desired_Course';
import My_Match from './UniSubComponents/My_Match';
import Head from '../HeadFoot/Head';
import HomePageHeader from './HomePageHeader';
import Footer from '../HeadFoot/Footer';

// Helper function to get a random university

const getRandomUniversity = (data, exclude = []) => {
  let filteredData = data.filter(uni => !exclude.includes(uni.id));
  const randomIndex = Math.floor(Math.random() * filteredData.length);
  return filteredData[randomIndex];
};

// Function to get three different random universities
const getThreeRandomUniversities = (data) => {
  const firstUni = getRandomUniversity(data);
  const secondUni = getRandomUniversity(data, [firstUni.id]);
  const thirdUni = getRandomUniversity(data, [firstUni.id, secondUni.id]);
  return [firstUni, secondUni, thirdUni];
};

// Preference
const getRandomUniversities = (data, count) => {
  // Shuffle the array
  let shuffled = data.sort(() => 0.5 - Math.random());
  // Get the first 'count' elements
  return shuffled.slice(0, count);
};

// Get 5 random universities
const Preference_Uni = getRandomUniversities(colleges, 5);


const data = [
  // {id : 1, component : Head},
  {id : 2, component : HomePageHeader},
  {id : 3, component : Suggested},
  {id : 4, component : Top_Place},
  {id : 5, component : My_Match},
  {id : 6, component : Ongoing_Admission},
  {id : 7, component : Desired_Course},
  {id : 8, component : Preference},
  {id : 9, component : Certification},
  {id : 10, component : Sub_Scholarship},
]

const ColHomePage = () => {
          // Random U niversities
  const [uni1, uni2, uni3] = getThreeRandomUniversities(colleges);

         // Ongoing Admission
  const Ongoing_List  = colleges.filter(
    (value) =>  {
      return  value.id < 5
    }
  )


  const renderItem = ({item}) => {
    const AllComponents = item.component
    return (
      <AllComponents
       title={`AllComponents ${item.id}` }
       uni1={uni1}
       uni2={uni2}
       uni3={uni3}
       Ongoing_List={Ongoing_List}
       Preference_Uni={Preference_Uni}
      />
    )
  }

  return (
    <View style={styles.allHomeContainer}>
      <Head />
      <View style={styles.HomeContainer}>
        <FlatList 
          data={data}
          renderItem={renderItem}
        />
     </View>

     <Footer />
     
    </View>

  )
}

export default ColHomePage