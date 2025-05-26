import React from 'react';

import {SafeAreaView, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const WelcomeBoard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require('../../assets/van.json')}
        autoPlay
        loop
        style={styles.botAnimation}
      />
      <View>
        <Text style={styles.welcomeLabel}>WelcomeBoard</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeBoard;
