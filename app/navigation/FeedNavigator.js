import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator
		mode="modal"
		screenOptions={{
			headerTitleAlign: "center",
			gestureEnabled: true,
			headerShown: false,
		}}
	>
		<Stack.Screen
			name="Listings"
			component={ListingsScreen}
			options={{
				...TransitionPresets.ScaleFromCenterAndroid,
			}}
		/>
		<Stack.Screen
			name="ListingDetails"
			component={ListingDetailsScreen}
			options={{
				...TransitionPresets.RevealFromBottomAndroid,
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
