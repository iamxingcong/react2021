import React, {
  useEffect,
  useState
} from 'react';

import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Button,
  Alert
} from 'react-native';



export default Fetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const win = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 22,
      color: '#fff',
      backgroundColor: 'transparent',
      padding: 4
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center"
    },
  });



  useEffect(() => {
    // fetch('https://reactnative.dev/movies.json')
    fetch('http://172.20.10.8:3000/api/wp_posts')
      .then((response) => response.json())
      .then((json) => setData(json.message))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={styles.container}>
  
              <ImageBackground source={require('./img/bg.png')}   
                 style={styles.image}>
                  {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                      data={data}
                      keyExtractor = {({ID}, index) =>  "" +ID }
                      renderItem={({ item }) => (
                        
                       <Text
                          style = {styles.text}
                          onPress={() => Alert.alert(item.post_title)}
                        >
                          {item.post_title}
                        </Text>
                      
                      )}

                    />

                  )}
              </ImageBackground>
            </View>


  );
};