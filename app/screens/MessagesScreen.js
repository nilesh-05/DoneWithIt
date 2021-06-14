import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
	{
		id: 1,
		title: "T1",
		desc: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		desc: "D2",
		image: require("../assets/mosh.jpg"),
	},
];

function MessagesScreen(props) {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.desc}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={() => (
					<View
						style={{
							width: "100%",
							height: 1,
							backgroundColor: "#000",
						}}
					/>
				)}
			/>
		</Screen>
	);
}

export default MessagesScreen;
