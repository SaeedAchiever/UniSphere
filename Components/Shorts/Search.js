import { View, Text, FlatList, Image, useWindowDimensions,TextInput } from 'react-native';
import React from 'react';
import styles from './Style';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

import videos from "./videos.json"
import { Pressable } from 'react-native';

const UserPic = require("../../assets/user_3.jpg")
const SearchBtn = require("../../assets/send.png")




const Search = () => {

  const navigation = useNavigation()

  // Screen width
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // Determine the number of columns based on the screen width
  const numColumns = width > 600 ? 3 : 2;

  return (
    <View style={[styles.SearchMainContainer, {minHeight:height}]}>
      <View style={styles.menuOutputHeaderContainer}>
        {/* <Pressable onPress={()=>{
          navigation.navigate("User_Profile")
        }}>
          <View style={[styles.userPicContainer, {
            width:width > 700 ? 75 : 50,
            height:width > 700 ? 75 : 50,
            }]}>
            <Image 
              source={UserPic}
              style={styles.userPic}
            />
          </View>
        </Pressable> */}

        <View style={styles.menuOutputSearchContainer}>
          <TextInput 
            placeholder="Search For Shorts"
            placeholderTextColor={"#cfcfcf"}
            style={styles.shortSearch}
          />
          <View style={styles.menuOutputSearchBtn}>
            <Image 
              source={SearchBtn}
              style={styles.SearchBtn}
            />
          </View>
        </View>
      </View>
     <View style={{marginBottom:200}}>
     <View style={styles.shortsFilterContainer}>
      <View>
        <Text style={styles.searchedResultsFilterText}>All</Text>
      </View>
      <View>
        <Text style={styles.searchedResultsFilterText}>Shorts</Text>
      </View>
      <View>
        <Text style={styles.searchedResultsFilterText}>Users</Text>
      </View>
     </View>
     <View style={{
      marginBottom:200,
     }}>
      <FlatList
        data={videos}
        numColumns={numColumns} // Set the number of columns dynamically
        key={numColumns} // Re-render FlatList when the number of columns changes
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={[styles.searchResultsContainer,
             {width : width > 600 ? "32%" : "49%",
              height : width > 600 ? 300 : 250
             }]}
            >
             <View style={styles.searchedVideoContainer}>
              {/* <Video
                source={{uri : item.source}}
                style={styles.searchedVideo}
                useNativeControls={false}
                resizeMode="cover"
                isLooping={true}
                shouldPlay={false}
               /> */}
             </View>

             <View style={styles.searchedVideoInfoContainer}>
             <View style={styles.userInfooterContainer}>
                    <View style={styles.userInfooterImageContainer}>
                      <Image 
                        source={UserPic}
                        style={styles.userInfooterImage}
                      />
                    </View>
                    <View>
                      <Text style={styles.accountName}>{`${item.profile_name}`}</Text>
                      <Text style={[styles.accountName]}>{`@${item.user_name}`}</Text>
                    </View>
                  </View>
              
             </View>

            </View>
          )
        }}
      />
     </View>

     </View>
    </View>
  );
};

export default Search;
