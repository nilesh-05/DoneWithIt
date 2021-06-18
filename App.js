import React, { useState } from "react";
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

import { Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
	const [firstName, setFirstName] = useState("");
	return (
		<Screen>
			<AppTextInput placeholder="Username" icon="email" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
