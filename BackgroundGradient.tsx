import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundGradient = () => {
  return (
    <LinearGradient
      colors={['#cc2b5e', '#753a88']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>GRADIENT BACKGROUND</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 250,
    width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default BackgroundGradient;
