import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import AppIcon from '../../components/app_Icon';
import {appConfig, DATA} from '../../config/app';
import CollapsibleAppList from '../../components/section_home';

const {height, width} = Dimensions.get('window');

const WelcomeBoard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.paddingBottom}>
        <View>
          <Text style={styles.welcomeLabel}>SpyNance Ai</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: '#C62828'}]}>
            <Text style={styles.label}>Drainer</Text>
            <Text style={styles.value}>Amazon</Text>
            <Text style={styles.value}>₹6,000</Text>
            <LottieView
              source={require('../../assets/lottie/drainer.json')}
              autoPlay
              loop
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>Balance</Text>
            <Text style={styles.value}>₹36,000</Text>
            <LottieView
              source={require('../../assets/lottie/balance.json')}
              autoPlay
              loop
              style={{height: 100, width: 100}}
            />
          </View>
        </View>
        <View style={styles.circleContainer}>
          <CollapsibleAppList data={[]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeBoard;
