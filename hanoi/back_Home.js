 import React, {
 	useEffect,
 	useState
 } from 'react';
 import {
 	ActivityIndicator,
 	FlatList,
 	Text,
 	View
 } from 'react-native';



 export default function Home() {

 	const [isLoading, setLoading] = useState(true);
 	const [data, setData] = useState([]);

 	useEffect(() => {
 		fetch('https://reactnative.dev/movies.json')
 			.then((response) => response.json())
 			.then((json) => setData(json.movies))
 			.catch((error) => console.error(error))
 			.finally(() => setLoading(false));
 	}, []);


 	return (
 		<View style={{ padding: 24 }}>
	      {isLoading ? <ActivityIndicator/> : (
	        <FlatList
	          data={data}
	          keyExtractor={({ id }, index) => id}
	          renderItem={({ item }) => (
	            <Text>{item.title}, {item.releaseYear}</Text>
	          )}
	        />
	      )}
	    </View>
 	);
 }