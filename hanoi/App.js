import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView

} from 'react-native';


import Menucomp from './Menucomp.js'

export default App = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  return (

    <SafeAreaView style={styles.container}>
       <Menucomp />
    </SafeAreaView>


  );
};