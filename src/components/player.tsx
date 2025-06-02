/**
 * Video Player Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const {height, width} = Dimensions.get('window');

function VideoPlayer() {
  return (
    <View style={styles.videoPlayerContainer}>
      <WebView
        mediaPlaybackRequiresUserAction={true}
        allowsInlineMediaPlayback={false}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
        domStorageEnabled={true}
        cacheEnabled={true}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#212121" />
          </View>
        )}
        source={{
          uri: 'https://www.youtube.com/embed/Mk6b7_UW8eA?si=Bw4apr3pMl-dt3rL',
        }}
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  videoPlayerContainer: {
    alignSelf: 'center',
    width: width * 0.95,
    borderRadius: 10,
    height: height * 0.4,
    backgroundColor: '#ededed',
    padding: width * 0.03,
    margin: height * 0.01,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webView: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});

export default VideoPlayer;
