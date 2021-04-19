import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function ColorButton({ backgroundColor, onPress = (f) => f }) {
	return (
		<TouchableHighlight
			style={Styles.button}
			onPress={() => onPress(backgroundColor)}
			underlayColor='orange'>
			<View style={Styles.row}>
				<View style={[Styles.sample, { backgroundColor }]} />
				<Text style={Styles.buttonText}> {backgroundColor}</Text>
			</View>
		</TouchableHighlight>
	);
}

const Styles = StyleSheet.create({
	button: {
		margin: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: "stretch",
		backgroundColor: "rgba(255,255,255, 0.8)", //Tranparent color
		//width: Dimensions.get("window").width - 35,
	},
	buttonText: {
		fontSize: 15,
		textAlign: "center",
	},
	sample: {
		margin: 5,
		height: 20,
		width: 20,
		backgroundColor: "white",
		borderRadius: 10,
	},
	row: { flexDirection: "row", flex: 2 },
});
