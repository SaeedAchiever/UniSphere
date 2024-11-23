import { View, Text, Image, TextInput, FlatList, Modal, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, } from 'react';

import styles from '../HomePage/HomeStyle';
import Universities from '../University/universities.json';
import FilterPage from './Filters/FilterPage';

const Filter = require("../../assets/filter.png");
const Back = require("../../assets/back.jpg");
const Close = require("../../assets/close.png");

const UniversityHead = () => {
  const [searchedData, setSearchedData] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState('none');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const navigation = useNavigation();

  const searchedList = () => {
    if (searchedData === '') {
      return [];
    }
    return Universities.filter(
      value => value.name.toLowerCase().startsWith(searchedData.toLowerCase())
    );
  };

  return (
    <View>
      <View style={styles.uniHeader}>
        <View style={styles.logoContainer}>
          <View>
            <Text style={styles.logoName}>Afro UniSphere</Text>
          </View>
          <View
            style={styles.filterImageContainer}
            onTouchEnd={() => {
              setIsFilterVisible(true);
            }}
          >
            <Image source={Filter} style={styles.filterImage} />
          </View>
        </View>

        <View style={styles.searchBarContainer}>
          <View
            onTouchEnd={() => {
              setIsSearchVisible('none');
              setSearchedData('')
            }}
            style={{ display: isSearchVisible }}
          >
            <Image source={Back} style={styles.searchBack} />
          </View>

          <TextInput
            placeholder="Search Here..."
            value={searchedData}
            onChangeText={(text) => setSearchedData(text)}
            onFocus={() => {
              setIsSearchVisible('flex');
            }}
            style={styles.searchBar}
          />
        </View>

        <View
         style={[styles.searchContainer, 
         { display: isSearchVisible }]}>
          <FlatList
            data={searchedList()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={styles.searchListContainer}
                  onTouchEnd={() => {
                    navigation.navigate('UniData', { university: item });
                  }}
                >
                  <Text style={styles.searchListText}>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <Modal visible={isFilterVisible}>
        <View
          style={{
            position: 'absolute',
            right: 20,
            zIndex: 100,
          }}
          onTouchEnd={() => {
            setIsFilterVisible(false);
          }}
        >
          <Image source={Close} style={styles.filterImage} />
        </View>

        <FilterPage />
      </Modal>
    </View>
  );
};

export default UniversityHead;
