import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useCallback, memo } from 'react';
import styles from '../Sub_Elements/Styles';
import Arrow from "../../../assets/list.png";
import Listing from "../../../assets/arrow.png";
import Bullet from "../../../assets/bullet.png";
import Note from "../../../assets/note.jpg";

import coursesData from "../../University/json/faculties.json";

const Courses = ({ university }) => {
  const [selectedDegreeType, setSelectedDegreeType] = useState('Undergraduate');
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Added search state

  const toggleAccordion = useCallback((courseId) => {
    setExpandedCourseId(prevId => (prevId === courseId ? null : courseId));
  }, []);

  const setSelectedDegree = useCallback((degreeType) => {
    setSelectedDegreeType((prevType) => (prevType !== degreeType ? degreeType : prevType));
  }, []);

  const filterCoursesByUniversity = useCallback((data, universityName) => {
    const universityData = data.find(univ => univ.name === universityName);
    if (!universityData || !universityData.faculties) {
      return [];
    }

    return universityData.faculties.map(faculty => ({
      faculty_name: faculty.faculty_name,
      note: faculty.note,
      undergraduateCourses: faculty.courses.filter(course => course.course_type === 'undergraduate'),
      mastersCourses: faculty.courses.filter(course => course.course_type === 'masters'),
      phdCourses: faculty.courses.filter(course => course.course_type === 'phd'),
      certificateCourses: faculty.courses.filter(course => course.course_type === 'certificate'),
      diplomaCourses: faculty.courses.filter(course => course.course_type === 'diploma'),
      hndCourses: faculty.courses.filter(course => course.course_type === 'hnd'),
    }));
  }, []);

  const groupedCourses = filterCoursesByUniversity(coursesData, university.name);

  const getCoursesBySelectedType = (group) => {
    switch (selectedDegreeType) {
      case 'Undergraduate':
        return group.undergraduateCourses;
      case 'Masters':
        return group.mastersCourses;
      case 'Phd/MPhil':
        return group.phdCourses;
      case 'Certificate':
        return group.certificateCourses;
      case 'Diploma':
        return group.diplomaCourses;
      case 'HND':
        return group.hndCourses;
      default:
        return [];
    }
  };

  const allCourses = groupedCourses.reduce((acc, group) => {
    const courses = getCoursesBySelectedType(group).map(course => ({
      ...course,
      faculty_name: group.faculty_name,
      note: group.note,
    }));
    return acc.concat(courses);
  }, []);

  // Filter courses based on search term
  const filteredCourses = allCourses.filter(course =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCourses = showAllCourses ? filteredCourses : filteredCourses.slice(0, 15);
  const coursesAvailable = displayedCourses.length > 0;

  return (
    <View>
      <View style={[styles.overviewHeadTitleContainer, { marginTop: 50 }]}>
        <Image source={Arrow} style={styles.overviewHeadImage} />
        <Text style={styles.overviewHeadTitle}>Programmes / Courses</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Enim nulla esse occaecat eiusmod nisi. Laboris mollit dolore ex amet veniam exercitation sint 
          adipisicing amet veniam quis deserunt esse.
        </Text>
      </View>

      <View style={styles.departmentMainContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.degreeTypeMainContainer}>
            {['Undergraduate', 'Masters', 'Phd/MPhil', 'Certificate', 'Diploma', 'HND'].map((degreeType) => (
              <TouchableOpacity key={degreeType} onPress={() => setSelectedDegree(degreeType)}>
                <View
                  style={[
                    styles.degreeTypeContainer,
                    selectedDegreeType === degreeType && styles.activeDegreeType
                  ]}
                >
                  <Text style={styles.departments}>{degreeType.charAt(0).toUpperCase() + degreeType.slice(1)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search For A Program Here..."
            style={styles.searchBar}
            value={searchTerm}
            onChangeText={setSearchTerm} // Handle search input
          />
        </View>

        <View style={styles.facultyMainContainer}>
          {!coursesAvailable ? (
            <View style={styles.noCoursesContainer}>
              <Text style={styles.noCoursesText}>No courses match your search.</Text>
            </View>
          ) : (
            displayedCourses.map((course, index) => {
              const uniqueCourseId = `${course.faculty_name}_${course.course_id}`;
              return (
                <View key={uniqueCourseId} style={styles.facultyContainer}>
                  {index === 0 || course.faculty_name !== displayedCourses[index - 1].faculty_name ? (
                    <View>
                      <View style={styles.facultyNameContainer}>
                        <Image source={Bullet} style={styles.overviewHeadImage} />
                        <Text style={styles.facultyName}>{course.faculty_name}</Text>
                      </View>

                      {course.note && course.note.length > 0 && (
                        <View style={styles.noteContainer}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, width: 40 }}>
                            <Text style={styles.courseName}>Note</Text>
                            <Image source={Note} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                          </View>
                          {course.note.map((noteItem, noteIndex) => (
                            <Text key={noteIndex} style={styles.requirementText}>
                              <Image source={Bullet} style={{ width: 15, height: 15, resizeMode: 'contain' }} /> {noteItem}
                            </Text>
                          ))}
                        </View>
                      )}
                    </View>
                  ) : null}

                  <TouchableOpacity onPress={() => toggleAccordion(uniqueCourseId)}>
                    <View style={styles.courseNameListContainer}>
                      <Text style={styles.courseName}>{course.course_name}</Text>
                      <Image source={Listing} style={styles.overviewHeadImage} />
                    </View>
                  </TouchableOpacity>

                  {expandedCourseId === uniqueCourseId && (
                    <View style={styles.entryRequirementsContainer}>
                      <Text style={styles.requirementsTitle}>Notes:</Text>
                      {course.entry_requirements.length > 0 ? (
                        course.entry_requirements.map((requirement, reqIndex) => (
                          <Text key={reqIndex} style={styles.requirementText}>** {requirement}</Text>
                        ))
                      ) : (
                        <Text style={styles.requirementText}>No specific entry requirements available.</Text>
                      )}
                    </View>
                  )}
                </View>
              );
            })
          )}

          {filteredCourses.length > 15 && (
            <TouchableOpacity onPress={() => setShowAllCourses(!showAllCourses)} style={styles.loadMoreTextContainer}>
              <Text style={styles.loadMoreText}>
                {showAllCourses ? 'Display Less' : 'Display All'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(Courses);