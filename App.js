import React from 'react';
import {StyleSheet} from 'react-native';
import YouTubePlayer from './components/YouTubePlayer';

const App = () => {
  return (
    <>
      <YouTubePlayer
        isPlaying={true}
        controls={1}
        videoIds={['a_2Kp4kocwA', 'VYOjWnS4cMY']}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
