import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/Colors";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image
				style={styles.image}
				source={require("../assets/jacket.jpg")}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for Sale</AppText>
				<AppText style={styles.price}>$100</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 500,
	},
	price: {
		color: Colors.secondary,
		marginVertical: 10,
		fontWeight: "bold",
		fontSize: 20,
	},
});

export default ListingDetailsScreen;
