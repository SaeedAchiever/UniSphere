import { View, FlatList, Image, useWindowDimensions, Modal, Pressable } from 'react-native';

import React, { useState, useRef } from 'react';
import { Video } from 'expo-av';

import videos from './allvideos.json'; // Your JSON data file

import styles from './Style';
import Interactions from './Interactions';
import User from './User';
import Search from './Search';
import Comments from './Comments';
import Footer from '../HeadFoot/Footer';

const Menu = require('../../assets/menu.png');
const Close = require('../../assets/minus.png');

const Shorts = () => {
  const [isCommentsVisible, setIsCommentsVisible] = useState('none');
  const [isScrollable, setIsScrollable] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // Track the current video index

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const videoRefs = useRef([]); // Array to store video references

  const showComments = () => {
    setIsCommentsVisible('flex');
    setIsScrollable(false);
  };

  // Handle viewable items change to detect the current video in focus
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentVideoIndex(index);
    }
  }).current;

  // Configuration for FlatList to track viewable items
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Trigger when 50% of the item is visible
  };

  return (
    <View style={styles.shortsMainContainer}>
      <View style={styles.shortsMenuContainer}>
        <Pressable onPress={() => setIsModalVisible(true)}>
          <View style={{
            width: width > 600 ? 70 : 50,
            height: width > 600 ? 70 : 50
          }}>
            <Image
              source={Menu}
              style={styles.shortsMenu}
            />
          </View>
        </Pressable>
      </View>
      
      <FlatList 
        pagingEnabled={true}
        scrollEnabled={isScrollable}
        showsVerticalScrollIndicator={false}
        snapToAlignment='start'
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <View
              style={[styles.shortsVideoContainer, {
                height: height,
                width: width
              }]}
            >
              <Video 
                ref={(ref) => (videoRefs.current[index] = ref)} // Store the reference to each video
                style={styles.shortsVideo}
                source={{ uri: item.source }}
                resizeMode='cover'
                shouldPlay={currentVideoIndex === index} // Play only if the current index matches
                isLooping={true}
                useNativeControls={true}
              />
            </View>

            {/* Comments Section */}
            <View style={[styles.showCommentsContainer, {
              display: isCommentsVisible
            }]}>
              <Pressable onPress={() => {
                setIsCommentsVisible('none');
                setIsScrollable(true);
              }}>
                <View style={styles.MenuBtnContainer}>
                  <Image 
                    source={Close}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </Pressable>

              <Comments item={item} />
            </View>

            {/* Interactions Section */}
            <View style={styles.InteractionsMainContainer}>
              <Interactions item={item} showComments={showComments} />
            </View>

            {/* User Section */}
            <View style={styles.UserMainContainer}>
              <User item={item} />
            </View>
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      
      {/* Modal for Search */}
      <View>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <Pressable onPress={() => setIsModalVisible(false)}>
            <View style={styles.MenuBtnContainer}>
              <Image 
                source={Close}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </Pressable>

          <View>
            <Search />
          </View>
        </Modal>
      </View>

      <View style={{display: isCommentsVisible === "flex" ? "none" : "flex"}}>
       <Footer />
      </View>
    </View>
  );
};

export default Shorts;
