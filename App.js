import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
	return <WelcomeScreen />;
	// return <ViewImageScreen />;
	// return (
	// 	<View
	// 		style={{
	// 			flex: 1,
	// 			justifyContent: "center",
	// 			alignItems: "center",
	// 		}}
	// 	>
	// 		<AppButton title="Login" onPress={() => console.log("Tapped")} />
	// 	</View>
	// );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
