import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';

import videos from "../Shorts/allvideos.json"
import styles from '../Shorts/Style';

const UserPic = require("../../assets/user_3.jpg")

const ProfileBody = () => {

  // Screen width
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // Determine the number of columns based on the screen width
  const numColumns = width > 600 ? 4 : 3;

  return (
    <View style={[styles.SearchMainContainer, {height:height}]}>
     <View>
     <View>
      <FlatList
        data={videos}
        numColumns={numColumns} // Set the number of columns dynamically
        key={numColumns} // Re-render FlatList when the number of columns changes
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={[styles.searchResultsContainer,
             {width : width > 600 ? "24%" : "32%",
              height : width > 600 ? 230 : 170
             }]}
            >
             <View style={[styles.searchedVideoContainer, {height:'100%'}]}>
              <Video
                source={{uri : item.source}}
                style={styles.searchedVideo}
                useNativeControls={false}
                resizeMode="cover"
                isLooping={true}
                shouldPlay={false}
               />
             </View>
            </View>
          );
        }}
      />
     </View>

     </View>
    </View>
  );
};

export default ProfileBody;
