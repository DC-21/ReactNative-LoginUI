import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpeg')} style={styles.image}/>
      <View>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Background;
