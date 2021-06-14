import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import Colors from "../config/Colors";

function ListItem({ title, subTitle, image }) {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<View>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: 500,
	},
	subTitle: {
		color: Colors.medium,
		marginTop: 5,
		fontSize: 16,
	},
});

export default ListItem;
