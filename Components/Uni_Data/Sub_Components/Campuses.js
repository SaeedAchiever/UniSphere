import { 
  View, 
  Text, 
} from 'react-native';
import React,{memo} from 'react';
import styles from '../Styles';

const Campus = ({ university }) => {
  return (
    <View style={styles.campusesContainer}>
      <View style={styles.campusesTitleContainer}>
        <Text style={styles.campusesTitle}>Explore Our Campus</Text>
      </View>
      <View style={styles.collegeHomeBodyContainerTwo}>
        {university.campuses.map((description, index) => (
          <Text key={index} style={styles.schoolNoteBodyText}>
            {description}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default memo(Campus);
