import { StyleSheet, Dimensions } from 'react-native';


const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff', // You can set a background color for the SafeAreaView
  },
  botAnimation: {
    backgroundColor: '#AD1457',
    height: height * 0.25, 
    width: width * 0.96,
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  welcomeLabel: {
    fontSize: height * 0.035,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    marginTop: height * 0.02,
  }
});

export default styles;