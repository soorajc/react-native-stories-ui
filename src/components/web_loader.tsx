import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';

const Mahindra360View = () => {
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const url =
    'https://www.team-bhp.com/forum/electric-cars/288203-mahindra-6-review.html';

  useEffect(() => {
    // Optional: You can add any initialization logic here
  }, []);

  const handleWebViewLoad = () => {
    setWebViewLoaded(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        source={{uri: url}}
        style={styles.webView}
        onLoad={handleWebViewLoad}
        // Optional: You can add other WebView props as needed
        // For example:
        originWhitelist={['*']} // To allow all origins, use with caution
        allowFileAccess={true}
        javaScriptEnabled={true} //  Enable JavaScript if the 360 view requires it.  Most do.
        domStorageEnabled={true}
        mixedContentMode="always" //  For Android, to allow HTTP content in HTTPS
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingTop is added to handle the top SafeAreaView inset on iOS
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff', // You can set a background color for the SafeAreaView
  },
  webView: {
    flex: 1,
  },
});

export default Mahindra360View;
