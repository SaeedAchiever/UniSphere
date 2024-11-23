import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './Styles';

// Import the scholarship data from the JSON file
import scholarshipData from "../../University/json/scholarship.json";

const Preloader = require('../../../assets/loading.gif');

const Scholarship = ({ university }) => {
  // Find the corresponding scholarship data for the university
  const universityScholarship = scholarshipData.find(
    (scholarshipItem) => scholarshipItem.name === university.name
  );

  // If there's no matching scholarship data, fall back to an empty array
  const scholarship = universityScholarship?.scholarship || [];

  return (
    <View style={styles.schoolNoteMainContainer}>
      {scholarship.length > 0 ? (
        scholarship.map((item) => <ScholarshipItem key={item.id} item={item} />)
      ) : (
        <Text style={styles.noScholarshipText}>No scholarships available.</Text>
      )}
    </View>
  );
};

// Separate component for each scholarship item
const ScholarshipItem = ({ item }) => {
  const [loading, setLoading] = useState(true); // State to handle loading

  return (
    <View style={styles.scholarshipItemContainer}>
      {/* Preloader while loading image */}
      {loading && (
        <Image
          source={Preloader}
          style={{ width: 40, height: 40, resizeMode: 'center' }}
        />
      )}

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}  // Load image from URI
          style={styles.scholarshipImage}
          onLoadStart={() => setLoading(true)}  // Start loading
          onLoadEnd={() => setLoading(false)}  // Finish loading
        />
      </View>

      {/* Scholarship Text */}
      <View style={styles.scholarshipTextContainer}>
        <Text style={styles.scholarshipNoteTitle}>{item.name}</Text>
        <Text style={styles.scholarshipNote}>{item.note}</Text>
      </View>
    </View>
  );
};

export default Scholarship;
