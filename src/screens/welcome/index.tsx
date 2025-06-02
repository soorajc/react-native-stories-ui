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
import {appConfig} from '../../config/app';

const {height, width} = Dimensions.get('window');

const WelcomeBoard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} pagingEnabled>
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
          <FlatList
            data={appConfig}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({item}: any) => (
              <AppIcon title={item.name} id={item.id} logoUrl={item.logo} />
            )}
            numColumns={4} // or any number of columns you need
            columnWrapperStyle={styles.circleContainer} // same style applied to each row
            contentContainerStyle={{paddingBottom: 20}} // optional
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeBoard;
