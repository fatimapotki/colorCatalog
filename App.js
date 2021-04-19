import React from "react";
import ColorDetials from "./Components/ColorDetrails";
import ColorList from "./Components/ColorList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name='home'
					options={{ title: "Color List" }}
					component={ColorList}
				/>
				<Screen
					name='details'
					options={{ title: "Color Details" }}
					component={ColorDetials}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
