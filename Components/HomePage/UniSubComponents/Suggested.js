import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import styles from '../HomeStyle';

const Location = require("../../../assets/location.png");
const SmallImage = require("../../../assets/recomended.png");

const Suggested = ({uni1,uni2,uni3}) => {
  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;
  const navigation = useNavigation();

  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <Image
          source={SmallImage}
          style={{
            width: deviceWidth > 500 ? 40 : 25,
            height: deviceWidth > 500 ? 40 : 25,
            marginHorizontal: 7,
          }}
        />
        <Text
          style={[
            styles.recommendationHeadText,
            { fontSize: deviceWidth > 500 ? 22 : 17 },
          ]}
        >
          Suggested for you
        </Text>
      </View>

      <Swiper autoplay showsPagination={false}>
        {/* First University */}
        <View
          style={[styles.recommendationContainer, { height: deviceWidth > 500 ? 250 : 200 }]}
          onTouchEnd={() => {
            navigation.navigate('UniData', { university: uni1 });
          }}
        >
          <View style={styles.recommendationTextContainer}>
            <View>
              <Text style={styles.recommendationTextName}>{uni1.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingTop: 5,
                }}
              >
                <Image source={Location} style={styles.recommendationLocation} />
                <Text style={styles.recommendationTextHead}>{uni1.town}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.recommendationTextFee}>{`Fee GHC 1k-40k`}</Text>
              <Text style={styles.recommendationTextRate}>{`${uni1.rate} Rating`}</Text>
            </View>
          </View>
          <View style={styles.recommendationImageContainer}>
            <Image source={{ uri: uni1.image }} style={styles.recommendationImage} />
          </View>
        </View>

        {/* Second University */}
        <View
          style={[styles.recommendationContainer, { height: deviceWidth > 500 ? 250 : 200 }]}
          onTouchEnd={() => {
            navigation.navigate('UniData', { university: uni2 });
          }}
        >
          <View style={styles.recommendationTextContainer}>
            <View>
              <Text style={styles.recommendationTextName}>{uni2.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingTop: 5,
                }}
              >
                <Image source={Location} style={styles.recommendationLocation} />
                <Text style={styles.recommendationTextHead}>{uni2.town}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.recommendationTextFee}>{`Fee GHC 1k-40k`}</Text>
              <Text style={styles.recommendationTextRate}>{`${uni2.rate} Rating`}</Text>
            </View>
          </View>
          <View style={styles.recommendationImageContainer}>
            <Image source={{ uri: uni2.image }} style={styles.recommendationImage} />
          </View>
        </View>

        {/* Third University */}
        <View
          style={[styles.recommendationContainer, { height: deviceWidth > 500 ? 250 : 200 }]}
          onTouchEnd={() => {
            navigation.navigate('UniData', { university: uni3 });
          }}
        >
          <View style={styles.recommendationTextContainer}>
            <View>
              <Text style={styles.recommendationTextName}>{uni3.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingTop: 5,
                }}
              >
                <Image source={Location} style={styles.recommendationLocation} />
                <Text style={styles.recommendationTextHead}>{uni3.town}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.recommendationTextFee}>{`Fee GHC 1k-40k`}</Text>
              <Text style={styles.recommendationTextRate}>{`${uni3.rate} Rating`}</Text>
            </View>
          </View>
          <View style={styles.recommendationImageContainer}>
            <Image source={{ uri: uni3.image }} style={styles.recommendationImage} />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Suggested;
