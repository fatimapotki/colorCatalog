import React, { useState } from "react";
import { FlatList, View, StyleSheet, Alert, Button } from "react-native";
import ColorButton from "./ColorButton";
//import defaultColors from "./data/defaultColor.json";
import ColorForm from "./ColorForm";
import { generate } from "shortid";
import { useColors } from "../Hook/hooks";

export default function ColorList({ navigation }) {
	const { colors, addColor } = useColors();

	////const [backgroundColor, setBackgroundColor] = useState("lightblue");
	//because in this step we don't wanna change background color by pressing the button so
	// we are going to comment this line
	// and remove the {backgraoundColor} from the FlatList style and onPress={setBackgroundColor}

	return (
		<>
			<ColorForm onNewColor={addColor} />
			{/* <ColorForm onNewColor={(newColor) => Alert.alert(`${newColor} added`)} /> */}
			<FlatList
				style={[Styles.container]}
				data={colors}
				renderItem={({ item }) => {
					return (
						<>
							<ColorButton
								key={item.id}
								backgroundColor={item.color}
								onPress={() => {
									// we write { color: item.color } to pass the color name that is clicked
									navigation.navigate("details", { color: item.color });
								}}
							/>
							<Button
								style={{ flexDirection: "row" }}
								title='Delete'
								onPress={() => {}}
							/>
						</>
					);
				}}
			/>
		</>
	);
}

const Styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 6,
	},
});
