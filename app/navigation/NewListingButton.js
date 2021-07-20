import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		// borderColor: colors.white,
		// borderRadius: 40,
		// borderWidth: 10,
		// bottom: 20,
		height: 80,
		justifyContent: "center",
		width: 80,
		borderRadius: 40,
		bottom: 35,
		borderColor: colors.white,
		borderWidth: 5,
		shadowColor: "#000",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 5,
	},
});

export default NewListingButton;
