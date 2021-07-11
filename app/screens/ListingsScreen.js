import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import route from "../navigation/route";

function ListingsScreen({ navigation }) {
	const [listings, setlistings] = useState([]);

	useEffect(() => {
		loadListings();
	}, []);

	const loadListings = async () => {
		const res = await listingsApi.getListings();
		setlistings(res.data);
	};
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"$" + item.price}
						imageUrl={item.images[0].url}
						onPress={() =>
							navigation.navigate(route.LISTING_DETAILS, item)
						}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 10,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
