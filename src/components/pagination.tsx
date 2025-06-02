import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

interface CircularPaginationIndicatorProps {
  totalPageCount: number;
  currentPage: number;
}

const {width, height} = Dimensions.get('window');

const CircularPaginationIndicator: React.FC<
  CircularPaginationIndicatorProps
> = ({totalPageCount, currentPage}) => {
  useEffect(() => {}, [currentPage]);

  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= totalPageCount; i++) {
      const isActive = i === currentPage;
      circles.push(
        <View
          key={i}
          style={[styles.circle, isActive && styles.circleActive]}
        />,
      );
    }
    return circles;
  };

  return <View style={styles.container}>{renderCircles()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    marginTop: height * 0.4,
    width: width,
    height: height * 0.1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#212121',
    margin: 5,
  },
  circleActive: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
  },
});

export default CircularPaginationIndicator;
