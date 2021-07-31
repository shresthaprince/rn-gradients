import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GradientText from './GradientText';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GradientText colors={['#cc2b5e', '#753a88']} style={styles.text}>
        GRADIENT TEXT
      </GradientText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
  },
});

export default App;
