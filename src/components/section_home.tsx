import React, {useState} from 'react';
import {
  Text,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  ListRenderItemInfo,
  Alert,
  View,
  Dimensions,
} from 'react-native';

type AppItem = {
  id: string;
  name: string;
  icon: any; // you can change to ImageSourcePropType if you import it from 'react-native'
};

type SectionData = {
  title: string;
  data: AppItem[];
};

type CollapsibleAppListProps = {
  data: SectionData[];
};

import {DATA} from '../config/app';
import AppIcon from './app_Icon';

const {height, width} = Dimensions.get('window');

export default function CollapsibleAppList({data}: CollapsibleAppListProps) {
  const [currentActiveSections, setActiveSections] = useState([]);

  console.log('I am teh currrentActiveSections', currentActiveSections);

  const handleItem = (data: any) => {
    return (
      <FlatList
        style={{backgroundColor: '#ededed', padding: 5}}
        data={data}
        numColumns={4}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppIcon title={item.name} logoUrl={item.logo} />
        )}
      />
    );
  };

  const handleCollapse = (category: string) => {
    let currentSections = [...currentActiveSections];
    if (currentSections.includes(category)) {
      currentSections = currentSections.filter(i => i !== category);
    } else {
      currentSections.push(category);
    }
    setActiveSections(currentSections);
  };

  const renderSectionItem = (title: string, data: any) => {
    const isActive = currentActiveSections.includes(title);
    return (
      <View>
        <TouchableOpacity
          onPress={() => handleCollapse(title)}
          style={styles.sectionHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.header}>{title}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={{color: 'black'}}>{isActive ? '▲' : '▼'} </Text>
          </View>
        </TouchableOpacity>
        {isActive && handleItem(data)}
      </View>
    );
  };

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      //renderItem={({item, section}) => handleItem(item, section)}
      renderSectionHeader={({section: {title, data}}) =>
        renderSectionItem(title, data)
      }
      renderItem={() => null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  item: {
    //backgroundColor: '#f9c2ff',
    // padding: 20,
    //marginVertical: 8,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    //backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  sectionHeader: {
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row',
    width: width * 0.93,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderColor: 'black',
  },
  titleContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
