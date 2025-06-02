import { StyleSheet, Dimensions } from 'react-native';


const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white', // You can set a background color for the SafeAreaView
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
    marginBottom: height * 0.02,
    color: 'black',
  },
  circleContainer: {
    padding: 15,
    //backgroundColor: 'white',
    //marginTop: height * 0.01,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    //height: height * 0.22,
    padding: width * 0.02,
    width: width * 0.45,
    alignSelf: 'center',
    backgroundColor: '#4caf50',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: height * 0.01,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
    fontSize: height * 0.03,
    marginTop: height  * 0.01,
  },
  value: {
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    fontSize: height * 0.022,
    marginTop: height  * 0.012,
  },
  paddingBottom: {
    paddingBottom: height * 0.1,
  }
  
});

export default styles;