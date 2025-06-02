/**
 * Splash Screen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation, ParamListBase} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './styles';

function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.backgroundStyle}>
      <LottieView
        source={require('../../assets/lottie/ai_bot.json')}
        autoPlay
        loop
        style={styles.botAnimation}
      />
    </View>
  );
}

export default SplashScreen;
