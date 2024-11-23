import { View, Text, useWindowDimensions, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './Style';

const SearchBtn = require("../../assets/send.png");
const UserPic = require("../../assets/user_1.jpg");
const Like = require("../../assets/like2.png");
const Comment = require("../../assets/comment2.png");

const Comments = ({ item }) => {
  const width = useWindowDimensions().width;

  return (
    <View style={styles.CommentsMainContaier}>

      <View style={styles.CommentsHeaderContaier}>
        <Text style={[styles.CommentsHeaderText, 
          { fontSize: width > 600 ? 18 : 15 }
        ]}>
          {`Comments   •   ${item.comments.length}`}
        </Text>
      </View>

      <View style={styles.commentInputContainer}>
        <View style={[styles.menuOutputSearchContainer, { width: '95%' }]}>
          <TextInput 
            placeholder="Write your comments here"
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

      <ScrollView>
        <View style={{ marginBottom: 40 }}>
          {item.comments.map((comment, index) => (
            <View key={comment.comment_id} style={styles.mainCommentsMainContainer}>
              <View style={styles.mainCommentsContainer}>
                <View style={styles.mainCommentsImageContainer}>
                  <Image 
                    source={UserPic}  // Replace with commenter's profile picture if available
                    style={styles.mainCommentsImage}
                  />
                </View>
                <View style={styles.mainCommentsTextContainer}>

                  <View style={styles.mainCommentsUserContainer}>
                    <Text style={[styles.mainCommentsUserName, {
                      fontSize: width > 600 ? 14 : 11
                    }]}>
                      @{comment.username}
                    </Text>
                  </View>

                  <View style={styles.mainCommentsMainTextContainer}>
                    <Text style={[styles.mainCommentsUserName, {
                      fontSize: width > 600 ? 16 : 14
                    }]}>
                      {comment.text}
                    </Text>
                  </View>

                  <View style={styles.commenteactionsMainContainer}>
                    <View style={styles.commenteactionsIconContainer}>
                      <Text style={[styles.mainCommentsUserName, {
                        fontSize: width > 600 ? 14 : 11
                      }]}>
                        {comment.likes.length}
                      </Text>
                      <Image
                        source={Like}
                        style={styles.commenteactionsIcon}
                      />
                    </View>
                    <View style={styles.commenteactionsIconContainer}>
                      <Text style={[styles.mainCommentsUserName, {
                        fontSize: width > 600 ? 14 : 11
                      }]}>
                        {comment.replies.length}
                      </Text>
                      <Image
                        source={Comment}
                        style={styles.commenteactionsIcon}
                      />
                    </View>
                  </View>

                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

export default Comments;
