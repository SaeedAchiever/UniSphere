import React,{memo} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Linking, Alert } from 'react-native';
import styles from '../Styles';

const Star = require('../../../assets/star.png');

const Header = ({ university }) => {

  const openApplicationLink = () => {
    const url = university.application;
  
    if (typeof url === 'string' && url.startsWith('http')) {
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            Linking.openURL(url);
          } else {
            Alert.alert("Error", "Unable to open the link.");
          }
        })
        .catch((err) => Alert.alert("Error", err.message));
    } else {
      Alert.alert("Invalid URL", "The application link is not valid.");
    }
  };
  

  return (
    <View>
      <ImageBackground
        source={{ uri: university.image }}
        style={styles.CollegeBgImage}
      >
        <View style={{backgroundColor:'rgba(0, 0, 0, 0.4)',padding:5,width:'100%'}}>
        <Text style={styles.CollegeMainName}>{`${university.name}`}</Text>
        <Text style={styles.CollegeMainLocation}>{`${university.region}`}</Text>
        <Text style={styles.CollegeMainLocation}>{`${university.town}, ${university.location}`}</Text>
        </View>
      </ImageBackground>

      <View style={styles.bodyContainer}>
        <View style={styles.paraContainer}>
          <View style={styles.uniHomeChildren}>

            {/* Review */}
            <View style={styles.uniHomeRevContainer}>
              <Text style={styles.schoolNoteBodyText}>{university.rate}</Text>
              <Image source={Star} style={styles.revStar} />

              <View style={styles.revTextContainer}>
                <Text style={styles.schoolNoteBodyText}>{`Based On ${university.reviews} Reviews`}</Text>
              </View>
            </View>

            {/* Establishment */}
            <View>
              <Text style={styles.schoolNoteBodyText}>{` Since ${university.est_year}`}</Text>
            </View>

            {/* Ranking */}
            <View>
              <Text style={styles.schoolNoteBodyText}>{`Ranked ${university.rank} of 1104 in Africa`}</Text>
            </View>

            {/* Admission */}
            <View style={styles.AdmissionStat}>
              <Text style={styles.AdmissionStatText}>Admissions : Forms Sales Ongoing</Text>
            </View>

          </View>

          <View style={styles.uniLogoMainContainer}>
            <Image source={{uri:  university.logo}} style={styles.uniLogo} alt='Logo' />
          </View>

        </View>
      </View>

      <TouchableOpacity
        style={styles.applyContainer}
        onPress={openApplicationLink}>
        <Text style={styles.applyText}>Apply Now</Text>
      </TouchableOpacity>

      <View style={styles.schoolNoteMainContainer}>
        <View style={styles.schoolNoteHeadContainer}>
          <Text style={styles.campusesTitle}>{`Welcome to ${university.nick}`}</Text>
        </View>

        {/* Body */}
        <View style={styles.schoolNoteBodyContainer}>
          <Text style={styles.schoolNoteBodyText}>{university.note}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
