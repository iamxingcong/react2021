 import React from "react";
 import {
 	StyleSheet,
 	Text,
 	View
 } from "react-native";

 import {
 	NativeRouter,
 	Route,
 	Link
 } from "react-router-native";

 import Netnews from './Netnews.js';
 import Home from './Home.js';
 import Topics from './Topics.js';


 function Menucomp() {
 	return (
 		<NativeRouter>
	      <View style={styles.container}>
	        <View style={styles.nav}>
	          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
	            <Text>Home</Text>
	          </Link>
	          <Link to="/Netnews" underlayColor="#f0f4f7" style={styles.navItem}>
	            <Text>Netnews</Text>
	          </Link>
	          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
	            <Text>Topics</Text>
	          </Link>
	        </View>

	        <Route exact path="/" component={Home} />
	        <Route path="/Netnews" component={Netnews} />
	        <Route path="/topics" component={Topics} />
	      </View>
	    </NativeRouter>
 	);
 }

 const styles = StyleSheet.create({
 	container: {
 		marginTop: 5,
 		padding: 13
 	},
 	header: {
 		fontSize: 10
 	},
 	nav: {
 		flexDirection: "row",
 		justifyContent: "space-around"
 	},
 	navItem: {
 		flex: 1,
 		alignItems: "center",
 		padding: 0
 	},
 	subNavItem: {
 		padding: 5
 	},
 	topic: {
 		textAlign: "center",
 		fontSize: 15
 	}
 });

 export default Menucomp;