import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../config/Colors";

function AppButton({ title, onPress, color = "primary" }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, { backgroundColor: Colors[color] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		backgroundColor: Colors.primary,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		marginVertical: 5,
		width: "100%",
	},
	text: {
		color: Colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});

export default AppButton;
