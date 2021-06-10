import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
	// return <WelcomeScreen />;
	// return <ViewImageScreen />;
	return <ListingDetailsScreen />;
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
	// return (
	// 	<View
	// 		style={{
	// 			backgroundColor: "#f8f4f4",
	// 			padding: 20,
	// 			paddingTop: 100,
	// 		}}
	// 	>
	// 		<Card
	// 			title="Red Jacket For Sale"
	// 			subTitle="$100"
	// 			image={require("./app/assets/jacket.jpg")}
	// 		/>
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
