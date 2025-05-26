import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
  Animated,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {profileConfig} from '../config/users';
import {storiesConfig} from '../config/posts';
import CircularPaginationIndicator from './pagination';

const {width, height} = Dimensions.get('window');

function StoryThumbnail(): React.JSX.Element {
  const scrollX = useRef(new Animated.Value(0));
  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;
  const [pageNumber, setPageNumber] = useState(1);

  const navigation = useNavigation();

  const handlePagination = (event: any) => {
    const currentPage = Math.round(event.nativeEvent.contentOffset.x / width);
    setPageNumber(currentPage + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={profileConfig}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button}>
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
          )}
        />
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
          totalPageCount={storiesConfig.length}
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
  },
  button: {
    margin: 5,
  },
  backgroundImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
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
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: height * 0.05,
    elevation: 5,
  },
});

export default StoryThumbnail;
