import React, { useState, useEffect } from "react";
import { generate } from "shortid";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export default useAdd = () => {
// 	const [items, setItems] = useState([]);
// 	const addItem = (item) => {
// 		const newItem = { id: generate(), item };
// 		setItem([newItem, items]);
// 	};
// 	return { items, addItem };
// };

export const useColors = () => {
	const [colors, setColors] = useState([]);

	const loadColors = async () => {
		const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
		if (colorData) {
			const colors = JSON.parse(colorData);
			setColors(colors);
		}
	};
	//Load Data
	useEffect(() => {
		if (colors.length) return;
		loadColors();
	}, []);

	// Save Colors
	useEffect(() => {
		AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
	}, [colors]);

	const addColor = (color) => {
		const newColor = { id: generate(), color };
		setColors([newColor, ...colors]);
	};
	return { colors, addColor };
};
