import React from 'react';
import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubePlayer = props => {
  return (
    <YouTube
      ref={React.createRef()}
      apiKey="AIzaSyDhRir6UeCgyccKbRYkj9ASk5LgVQfCK2E"
      videoIds={props.videoIds}
      play={props.isPlaying}
      loop={true}
      controls={props.controls}
      style={{
        height: PixelRatio.roundToNearestPixel(
          Dimensions.get('window').width / 3,
        ),
      }}
      onError={e => {
        console.error(e.error);
      }}
    />
  );
};

export default YoutubePlayer;

const styles = StyleSheet.create({});
