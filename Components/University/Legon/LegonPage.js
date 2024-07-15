import { 
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import React, { useState } from 'react'

import UniData from '../../Uni_Data/UniData';

import  Header from '../../Uni_Data/Sub_Components/Header'
import Campus from '../../Uni_Data/Sub_Components/Campuses';
import Rating from '../../Uni_Data/Sub_Components/Rating';
import Scrol_Elem from '../../Uni_Data/Sub_Components/Scrol_Elem';
import Faq from '../../Uni_Data/Sub_Components/Faq';
import Virt_Tour from '../../Uni_Data/Sub_Components/Virt_Tour';
import Camp_News from '../../Uni_Data/Sub_Components/Camp_News';
import Feeds from '../../Uni_Data/Sub_Components/Feeds';
import Like_Dislike from '../../Uni_Data/Sub_Components/Like_Dislike';


const LegonPage = () => {

    // ACORDION



  const Name  = 'University Of Ghana'
  const Region  = 'Greater Accra'
  const Town= 'Legon'
  const Uni_Image = require('../../../assets/ug.jpeg')
  const LogoImg = require('../../../assets/uog.png')
  const Campuses =  ['Legon','Kumasi']
  const CampusOne =  require('../../../assets/accra.jpg')
  const CampusTwo =  require('../../../assets/kumasi.jpeg')
  const short_name =  'UG'
  const note  = "The University of Ghana, established in 1948, is the oldest and largest university in Ghana. Located in the capital city, Accra, it offers a broad range of undergraduate and postgraduate programs across various fields such as humanities, sciences, business, and engineering. The university is known for its strong emphasis on research, with several institutes and centers dedicated to advancing knowledge in areas like population studies, environment, and agriculture. It also has a diverse student body and faculty, fostering a vibrant academic community."

  

  return (
    <View>

      <UniData 
        name={Name}
        region={Region}
        town={Town}
        uni_image={Uni_Image}
        logo_img={LogoImg}
        campuses={Campuses}
        campus_one={CampusOne}
        campus_two={CampusTwo}
        short_name={short_name}
        note={note}
        />
    
    </View>

  )
}


export default LegonPage