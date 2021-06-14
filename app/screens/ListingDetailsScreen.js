import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem";

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
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/mosh.jpg")}
						title="Nilesh Sharma"
						subTitle="5 Listings"
					/>
				</View>
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
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
