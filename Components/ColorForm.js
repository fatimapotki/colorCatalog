import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

export default function ColorForm({ onNewColor = (f) => f }) {
	const [inputValue, setValue] = useState("");
	//console.log("->", inputValue);
	const input = useRef();
	return (
		<View style={Styles.mainContainer}>
			<Text style={Styles.text}>Color:</Text>
			<TextInput
				style={Styles.textInput}
				ref={input}
				value={inputValue}
				autoCapitalize='none'
				onChangeText={setValue}
				placeholder='Enter here...'
			/>
			<Button
				title='Add'
				onPress={() => {
					input.current.blur();
					//Alert.alert(`${inputValue} added`);

					onNewColor(inputValue);
					setValue("");
				}}
			/>
		</View>
	);
}

const Styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "white",
		flexDirection: "row",
		padding: 16,
	},
	text: {
		padding: 5,
		fontSize: 16,
		fontWeight: "bold",
	},
	textInput: {
		flex: 1,
		padding: 5,
		borderWidth: 1,
		fontSize: 15,
		borderRadius: 10,
		marginRight: 10,
	},
});
