import React from 'react';

import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');

const Circle = (props: any) => {
  const {circleHeight, circleWidth, backgroundColor, title, customStyles} =
    props;
  return (
    <TouchableOpacity
      style={[
        styles.circle,
        {
          backgroundColor: backgroundColor,
          height: circleHeight * height,
          width: circleHeight * height,
          borderRadius: (circleHeight * height) / 2,
        },
        customStyles,
      ]}>
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Circle;

const styles = StyleSheet.create({
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
