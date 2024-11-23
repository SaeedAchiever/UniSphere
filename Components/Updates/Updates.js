import { View, Text, Image,useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import  {useNavigation} from  '@react-navigation/native'
import Swiper from 'react-native-swiper';

import styles from '../HomePage/HomeStyle'
import Footer from '../HeadFoot/Footer';

const News_One =  require('../../assets/knust_students.jpg')
const News_Two =  require('../../assets/students_two.jpg')
const News_Three =  require('../../assets/staff.jpg')

const Suggested = () => {

 // DEFINING  WIDTH AND HEIGHT 
 const deviceWidth = useWindowDimensions().width
 const deviceHeight = useWindowDimensions().height

 const navigation = useNavigation()

  return (
    <View>
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.updatesHeadMainContainer}>
        <Swiper  autoplay showsPagination={false}>

          <View style={styles.updatesHeaderContainer}>
            <View style={styles.updatesHeaderImageContainer}>
              <Image  
                source={News_One}
                style={styles.updatesHeaderImage}
              />
            </View>

            <View style={styles.updatesHeaderTextContainer}>
              <Text style={styles.updatesHeaderText}>{`KNUST commence matricuation of  freshers despite the freshers number appearing quite small`}</Text>
            </View>
          </View>

          <View style={styles.updatesHeaderContainer}>
            <View style={styles.updatesHeaderImageContainer}>
              <Image  
                source={News_Two}
                style={styles.updatesHeaderImage}
              />
            </View>

            <View style={styles.updatesHeaderTextContainer}>
              <Text style={styles.updatesHeaderText}>{`UEW qualifies to the final NSMQ Stage`}</Text>
            </View>
          </View>

          <View style={styles.updatesHeaderContainer}>
            <View style={styles.updatesHeaderImageContainer}>
              <Image  
                source={News_Three}
                style={styles.updatesHeaderImage}
              />
            </View>

            <View style={styles.updatesHeaderTextContainer}>
              <Text style={styles.updatesHeaderText}>{`Legon SRC President donates 200 laptops to NSMQ contestants`}</Text>
            </View>
          </View>

        </Swiper>
      </View>
      
      <View style={styles.updatesContainer}>
        <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>
      </View>

      <View style={styles.updatesContainer}>
        <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>

      <View  style={styles.updatesBodyMainContainer}>
        <View style={styles.updatesBodyContainer}>
          <Text style={styles.updatesBodyHeadText}>UEW accpeting Admission D7</Text>
          <Text style={styles.updatesBodyText}>Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui dolore eu consequat officia. Deserunt enim tempor elit occaecat eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.</Text>
        </View>
      </View>
      </View>

    </ScrollView>
      <View>
        <Footer />
      </View>
    </View>
  )
}

export default Suggested