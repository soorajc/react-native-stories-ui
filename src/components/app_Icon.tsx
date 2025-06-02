import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');

const AppIcon = (props: any) => {
  const {title, logoUrl} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={logoUrl} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    width: width * 0.18,
    margin: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    //borderWidth: 1,
    height: 50,
    width: 50,
    //borderRadius: 25,
    overflow: 'hidden',
    resizeMode: 'contain',
    //borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  circle: {
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    fontSize: height * 0.023,
  },
});
