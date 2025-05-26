
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#1976D2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botAnimation: {
        height: height * 0.55, 
        width: width * 0.55
    }
});

export default styles;