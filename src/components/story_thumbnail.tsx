/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {PageIndicator} from 'react-native-page-indicator';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';

import {profileConfig} from '../config/users';
import {storiesConfig} from '../config/posts';
import CircularPaginationIndicator from './pagination';

// const playerRef = useRef<VideoPlayerRef>();

const {width, height} = Dimensions.get('window');

function StoryThumbnail(): React.JSX.Element {
  const scrollX = useRef(new Animated.Value(0));
  const animatedCurrent = useRef(Animated.divide(scrollX, width))?.current;
  const [pageNumber, setPageNumber] = useState(1);

  const handlePagination = (event: any) => {
    const currentPage = event.nativeEvent.contentOffset.x / width;
    setPageNumber(currentPage + 1);
    console.log(
      'I am the page number',
      event.nativeEvent.contentOffset.x / width,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>I am the story thumbnail</Text> */}
      <View style={styles.mainContainer}>
        <ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}>
          {profileConfig.map(item => (
            <TouchableOpacity key={item.id} style={styles.button}>
              <ImageBackground
                source={item.imageBackground}
                borderRadius={40}
                style={styles.backgroundImage}>
                <Image
                  source={{uri: item.profilePic}}
                  style={styles.profileImage}
                />
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          bounces={false}
          onMomentumScrollEnd={handlePagination}>
          {storiesConfig.map(item => (
            <ImageBackground
              source={item.imageBackground}
              style={styles.containerImage}>
              <Image
                key={item.id}
                source={{uri: item.profilePic}}
                style={styles.storyImage}
                borderRadius={15}
              />
            </ImageBackground>
          ))}
        </ScrollView>
        <CircularPaginationIndicator
          totalPageCount={6}
          currentPage={pageNumber}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  mainContainer: {
    padding: 5,
    backgroundColor: '#ededed',
    verticalAlign: 'middle',
    //justifyContent: '',
    //alignItems: 'center',
  },
  button: {
    margin: 5,
  },
  backgroundImage: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  containerImage: {
    width: width,
    padding: width * 0.01,
  },
  imageContainer: {
    height: height * 0.9,
  },
  storyImage: {
    height: Platform.OS === 'ios' ? height * 0.7 : height * 0.8,
    width: width * 0.95,
    //width: width,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: height * 0.05,
    elevation: 5,
  },
});

export default StoryThumbnail;
