import { View , FlatList } from 'react-native';
import React from 'react';

import styles from './Style';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

import Footer from '../HeadFoot/Footer';

const data = [
  { id: '1', component: 'ProfileHeader' },
  // { id: '2', component: 'ProfileBody' }
];

const User_Profile = () => {

  const renderItem = ({ item }) => {

    // Render components conditionally based on the component name in `data`
    
    let Component;
    if (item.component === 'ProfileHeader') {
      Component = ProfileHeader;
    } else if (item.component === 'ProfileBody') {
      Component = ProfileBody;
    }

    return (
      <View>
        {Component && <Component />}
      </View>
    );
  };

  return (
    <View style={styles.User_ProfileMainContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* <Footer /> */}

    </View>
  );
};

export default User_Profile;
