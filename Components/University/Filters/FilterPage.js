import { View, Text, SafeAreaView, ScrollView,Image,FlatList } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './Style'

const Arrow = require('../../../assets/arrow.png')
const Location = require('../../../assets/top_place.png')
const Star = require('../../../assets/star.png')
import  Universities from './Uni_filter.json'

const FilterPage = () => {

  // Fees

  const [isFeeVisible, setIsFeeVisible] = useState('none')
  const [isHostelVisible, setIsHostelVisible] = useState('none')
  const [isAdmissionVisible, setIsAdmissionVisible] = useState('none')
  const [isPopularityVisible, setIsPopularityVisible] = useState('none')
  const [isPopulationVisible, setIsPopulationVisible] = useState('none')
  const [isFacilitiesVisible, setIsFacilitiesVisible] = useState('none')
  const [isCoursesVisible, setIsCoursesVisible] = useState('none')
  
  
const navigation = useNavigation()


  return (
   <SafeAreaView>
    <View style={styles.FilterPageMainContainer}>

     <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.FilterPageContainer}>

       <View style={styles.FilterChildMainContainer}>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
         setIsFeeVisible(isFeeVisible === 'none' ? 'flex' : 'none')
         }}
        
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Fees</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsHostelVisible(isHostelVisible === 'none' ? 'flex' : 'none')
          }}
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Hostels</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsAdmissionVisible(isAdmissionVisible === 'none' ? 'flex' : 'none')
          }}
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Admission</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsPopularityVisible(isPopularityVisible === 'none' ? 'flex' : 'none')
          }}
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Popularity</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsPopulationVisible(isPopulationVisible ===  'none' ?  'auto' :  'none')
         }}
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Population</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsFacilitiesVisible(isFacilitiesVisible ===  'none' ?  'auto' :  'none')
         }}
        >
         <View>
          <Text style={styles.FilterChildHeadText}>Facilities</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

        <View
         style={styles.FilterChildHeadContainer}
         onTouchEnd={()=>{
          setIsCoursesVisible(isCoursesVisible ===  'none' ?  'auto' :  'none')
         }}
         >
         <View>
          <Text style={styles.FilterChildHeadText}>Courses</Text>
         </View>
         <View>
          <Image 
          source={Arrow}
          style={styles.FilterChildHeadImage}
          />
         </View>
        </View>

       </View>

       

      </View>
     </ScrollView>

     {/* BODY */}

     <View>

     {/* Fees */}

     <View style={[styles.filterOptionMainContainer,{display:isFeeVisible}]}>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Lowest</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Average</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Highest</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Instalment</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Lowest</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Average</Text>
        </View>
      </View>
     </View>

     {/* Hostels */}

     <View style={[styles.filterOptionMainContainer,{display:isHostelVisible}]}>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Cheapest</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Good Roads</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Serene Environment</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Conducive</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Close to Campus</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Urban</Text>
        </View>
      </View>
     </View>

     {/* Admission */}

     <View style={[styles.filterOptionMainContainer,{display:isAdmissionVisible}]}>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Ongoing</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Opening Soon</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>High Acceptance</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Closed</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Freshman Reporting</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>On Hold</Text>
        </View>
      </View>
     </View>

     {/* Popularity */}

     <View style={[styles.filterOptionMainContainer,{display:isPopularityVisible}]}>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Accra</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Kumasi</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Takoradi</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Sunyani</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Tamale</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Wa</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Sunyani</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Tamale</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>In Wa</Text>
        </View>
      </View>
     </View>

     {/* Population */}

     <View style={[styles.filterOptionMainContainer,{display:isPopulationVisible}]}>
      
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Highly Populated</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Lowly Populated</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Most Females</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Most Males</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Equal Gender</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Single Sex</Text>
        </View>
      </View>
     </View>

     {/* Facilities */}

     <View style={[styles.filterOptionMainContainer,{display:isFacilitiesVisible}]}>
      
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Best Science Labs</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Best ICT Labs</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Football Facilities</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Volley Ball Facilities</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Basket Ball Facilities</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Kitchen SetUp</Text>
        </View>
      </View>
     </View>

     {/* Courses */}

     <View style={[styles.filterOptionMainContainer,{display:isCoursesVisible}]}>
      
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Civil Eng.</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Medicine</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Software Eng.</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Web  Dev't.</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Pharmacology</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Business</Text>
        </View>
      </View>
      <View style={styles.filterOptionContainer}>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Mobile  App  Dev.</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Home Econs</Text>
        </View>
        <View style={styles.filterOptionBtnContainer}>
          <Text style={styles.filterOptionBtnText}>Agriculture</Text>
        </View>
      </View>
     </View>

     </View>

     {/* Flatlist */}

     <FlatList  
      data={Universities}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item})=>{
        return (
          <View
       style={styles.FilterPageUniContainer}
       onTouchEnd={()=>{
        navigation.navigate(item.page)
       }}
       >
       <View style={styles.FilterPageUniHeaderContainer}>

        <View style={styles.FilterPageUniHeaderNameContainer}>
         <Text style={styles.FilterPageUniHeaderNameText}>{`${item.name}`}</Text>
        </View>

        <View style={styles.FilterBothContainer}>

         <View style={styles.FilterPageUniHeaderLocationContainer}>
          <Image 
           source={Location}
           style={styles.FilterPageUniHeaderLocationImage}
          />
        <Text style={styles.FilterPageUniHeaderLocationText}>{`${item.location}`}</Text>
         </View>
         <View style={styles.FilterPageUniHeaderRatingContainer}>
           <View style={styles.FilterPageUniHeaderRatingImageContainer}>
           <Image 
             source={Star}
             style={styles.FilterPageUniHeaderLocationImage}
            />
            <Image 
             source={Star}
             style={styles.FilterPageUniHeaderLocationImage}
            />
            <Image 
             source={Star}
             style={styles.FilterPageUniHeaderLocationImage}
            />
            <Image 
             source={Star}
             style={styles.FilterPageUniHeaderLocationImage}
            />
            <Image 
             source={Star}
             style={styles.FilterPageUniHeaderLocationImage}
            />
           </View>
           
           <Text style={styles.FilterPageUniHeaderRateText}>{`${item.rate} Stars`}</Text>
         </View>

         <View>
          <Text style={styles.FilterPageUniHeaderRateText}>{`${item.institution} Inst.`}</Text>
         </View>
         
        </View>

        <View style={styles.FilterCourseFeesMainContainer}>
         <View style={styles.FilterCourseFeesContainer}>
          <Text style={styles.FilterCourseFeesHeadText}>Courses Offered</Text>
          <View>
          <Text style={styles.FilterCourseFeesText}>{`5 Courses`}</Text>
          </View>
         </View>
         <View style={styles.FilterCourseFeesContainer}>
          <Text style={styles.FilterCourseFeesHeadText}>Fee Range</Text>
          <View>
          <Text style={styles.FilterCourseFeesText}>{`GHC 1.7k-19.7k`}</Text>
          </View>
         </View>
        </View>

        <View style={styles.FilterAdmissionContainer}>
         <View style={styles.FilterCourseFeesContainer}>
          <Text style={styles.FilterCourseFeesHeadText}>Admission Status : </Text>
         </View>
          <View>
          <Text style={styles.FilterCourseFeesText}>Closed</Text>
          </View>
        </View>
        
       </View>
      </View>
        )
      }}
     />

         </View>
   </SafeAreaView>

  )
}

export default FilterPage