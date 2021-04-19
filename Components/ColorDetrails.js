import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
//import Color from "color";

export default function ColorDetials({ route }) {
	const { color } = route.params;

	return (
		<View style={[Styles.mainContainer, { backgroundColor: color }]}>
			{/* by adding {route.params.color} it will come up in the next page  */}

			{/* <Text style={Styles.text}> Color Details: {route.params.color}</Text> */}
			<Text style={Styles.text}>Color Details: {color}</Text>
		</View>
	);
}
const Styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
	},
});
