import React, { useState, memo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';

import requirementsData from "../../University/json/requirements.json"

const Entry_Reg = ({ university }) => {

  // Filter the data for the current university
  const universityRequirements = requirementsData.find(requirementItem => requirementItem.name === university.name);

  // If no matching university is found, set default values
  const requirements = universityRequirements ? universityRequirements.requirements : [];

  // State to manage the expanded requirement
  const [expandedRequirementId, setExpandedRequirementId] = useState(null);

  // State to manage the number of requirements displayed
  const [showAllRequirements, setShowAllRequirements] = useState(false);

  const handlePress = (requirement_id) => {
    // Toggle the expanded state
    setExpandedRequirementId(prevId =>
      prevId === requirement_id ? null : requirement_id
    );
  };

  // Control how many items to display
  const displayedRequirements = showAllRequirements
    ? requirements
    : requirements.slice(0, 5); // Only show the first 5 if not showing all

  return (
    <View style={styles.schoolNoteMainContainer}>
      <View style={styles.schoolNoteHeadContainer}>
        <Text style={styles.campusesTitle}>General Entry Requirements</Text>
      </View>

      <FlatList
        data={displayedRequirements}
        keyExtractor={(item) => item.requirement_id.toString()}
        renderItem={({ item }) => {
          const isExpanded = item.requirement_id === expandedRequirementId;

          return (
            <View style={styles.feedsBodyMainContainer}>
              <TouchableOpacity
                style={styles.feedsBodyContainer}
                onPress={() => handlePress(item.requirement_id)}
              >
                <View style={styles.feedslogoTextContainer}>
                  <View style={styles.feedslogoTextSubContainer}>
                    <Text style={styles.uniHomeRevContainer}>
                      {item.requirement_name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {isExpanded && (
                <View style={styles.feedslogoTextSubContainer}>
                  {item.main_requirements.map((req, index) => (
                    <Text key={index} style={styles.schoolNoteBodyText}>
                      {req}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          );
        }}
      />

      {/* Button to Load More or Show Less */}
      {requirements.length > 5 && (
        <TouchableOpacity
          onPress={() => setShowAllRequirements(!showAllRequirements)}
          style={styles.loadMoreTextContainer}
        >
          <Text style={styles.loadMoreText}>
            {showAllRequirements ? 'Display Less' : 'Display All'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Entry_Reg);
