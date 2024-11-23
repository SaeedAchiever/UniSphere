import { 
  View, 
  Text, 
} from 'react-native';
import React,{memo} from 'react';

import styles from '../Styles';

const Like_Dislike = ({ university }) => {
  // Ensure university object is properly passed and contains the necessary data
  const strengths = university?.strength || [];
  const weaknesses = university?.weakness || [];

  return (
    <View style={styles.schoolNoteMainContainer}>
      <View style={styles.schoolNoteHeadContainer}>
        <Text style={styles.feedslogoText}>Strength and Weakness</Text>
      </View>

      <View style={styles.schoolNoteBodyContainer}>
        <Text style={styles.schoolNoteBodyText}>
          Discover the strengths and weaknesses of {university?.name || 'the university'}.
        </Text>
      </View>

      {/* Strengths */}
      <View style={styles.likesBodyMainContainer}>
        <View style={styles.likesBodyHeadContainer}>
          <Text style={styles.feedslogoText}>Strength</Text>
          
        </View>

        <View style={styles.mainLikeTextContainer}>
          {strengths.length > 0 ? (
            strengths.map((item, index) => (
              <View key={index} style={styles.mainLikeTextSubContainer}>
                <Text style={styles.schoolNoteBodyText}>{`• ${item}`}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.schoolNoteBodyText}>No strengths listed.</Text>
          )}
        </View>
      </View>

      {/* Weaknesses */}
      <View style={styles.likesBodyMainContainer}>
        <View style={styles.likesBodyHeadContainer}>
          <Text style={styles.feedslogoText}>Weakness</Text>
        </View>

        <View style={styles.mainLikeTextContainer}>
          {weaknesses.length > 0 ? (
            weaknesses.map((item, index) => (
              <View key={index} style={styles.mainLikeTextSubContainer}>
                <Text style={styles.schoolNoteBodyText}>• {item}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.schoolNoteBodyText}>No weaknesses listed.</Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default memo(Like_Dislike);
