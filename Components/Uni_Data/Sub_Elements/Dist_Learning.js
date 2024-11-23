import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, memo } from 'react';
import styles from '../Styles';

// Import distance learning data
import distanceDataJson from "../../University/json/distance.json";

const Dist_Learning = ({ university }) => {
  // Find the distance data for the current university by matching the name
  const distanceData = distanceDataJson.find(
    (distanceItem) => distanceItem.name === university.name
  )?.distance || [];

  // State to track the selected region, initializing with the first region if available
  const [selectedRegion, setSelectedRegion] = useState(
    distanceData.length > 0 ? distanceData[0].region : null
  );

  // Handle region selection
  const handleRegionPress = (region) => {
    setSelectedRegion(region);
  };

  // Filter data based on the selected region
  const filteredData = distanceData.filter((item) => item.region === selectedRegion);

  // Show message if no distance courses are available
  if (distanceData.length === 0) {
    return (
      <View style={styles.distanceLearningMainContainer}>
        <Text style={styles.noCoursesText}>No distance courses available</Text>
      </View>
    );
  }

  return (
    <View style={styles.distanceLearningMainContainer}>
      <View style={styles.distanceLearningHeaderContainer}>
        <Text style={styles.distanceLearningHeaderTitle}>Distance Learning</Text>
      </View>

      <View style={styles.distanceLearningBodyMainContainer}>
        <Text style={styles.distanceLearningBodyTitle}>
          Explore available distance learning programs by region.
        </Text>
      </View>

      {/* FlatList to display regions */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={distanceData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRegionPress(item.region)}>
            <View style={styles.scrollregionsButton}>
              <Text style={styles.scrollregionsButtonText}>{item.region}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* ScrollView for detailed table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableBodyMainContainer}>
          {/* Table Header */}
          <View
            style={[
              styles.tableMainContainer,
              { borderTopWidth: 1, borderRightWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2 },
            ]}
          >
            <View style={styles.tableContainer}>
              <View style={[styles.table, { width: '30%' }]}>
                <Text style={styles.tabletitle}>Town</Text>
              </View>
              <View style={[styles.tableMiddle, styles.table]}>
                <Text style={styles.tabletitle}>Institution</Text>
              </View>
              <View style={[styles.table, { width: '40%' }]}>
                <Text style={styles.tabletitle}>Programs</Text>
              </View>
            </View>
          </View>

          {/* Table Body */}
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              item.location.map((locationItem) =>
                locationItem.town.map((townItem, index) => (
                  <View key={index} style={styles.tableMainContainer}>
                    <View style={styles.tableContainer}>
                      <View style={[styles.table, { width: '30%' }]}>
                        <Text style={styles.schoolNoteBodyText}>{townItem.location}</Text>
                      </View>
                      <View style={[styles.tableMiddle, styles.table]}>
                        <Text style={styles.schoolNoteBodyText}>{townItem.school}</Text>
                      </View>
                      <View style={[styles.table, { width: '40%' }]}>
                        <Text style={styles.schoolNoteBodyText}>{townItem.courses.join(', ')}</Text>
                      </View>
                    </View>
                  </View>
                ))
              )
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Dist_Learning);
