import React, { useState, useRef } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function NewPerson({ onNewPerson = (f) => f }) {
	const [inputValue, setInput] = useState("");
	const input = useRef();

	return (
		<View style={{ backgroundColor: "lightgray", flex: 1 }}>
			<View style={Styles.mainContainer}>
				<TextInput
					ref={input}
					value={inputValue}
					style={Styles.textInput}
					onChangeText={setInput}
					placeholder='enter your order..'
				/>
				<Button
					title='Go'
					onPress={() => {
						input.current.blur();
						//Alert.alert(`${inputValue} added to cart`);
						onPerson(inputValue);
						setInput("");
					}}
				/>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	mainContainer: {
		marginTop: 40,
		flexDirection: "row",
		padding: 20,
	},
	textInput: {
		flex: 1,
		padding: 5,
		borderWidth: 1,
		fontSize: 20,
		borderRadius: 10,
		marginRight: 10,
	},
});
