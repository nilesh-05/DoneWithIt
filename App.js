import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
	// return <WelcomeScreen />;
	// return <ViewImageScreen />;
	// return <MessagesScreen />;
	// return <ListingDetailsScreen />;
	// return (
	// 	<Screen>
	// 		<ListItem
	// 			title="Title 1"
	// 			subTitle="Subtitle 1"
	// 			IconComponent={<Icon name="email" />}
	// 		/>
	// 	</Screen>
	// );
	// return <AccountScreen />;
	return <ListingsScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
