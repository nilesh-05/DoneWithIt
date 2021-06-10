import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
			blurRadius={3}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-red.png")}
				/>
				<Text style={styles.tagline}>
					Get rid of what you don't need :)
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton
					title="Login"
					onPress={() => console.log("Tapped")}
				/>
				<AppButton
					title="Register"
					color="secondary"
					onPress={() => console.log("Tapped")}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	buttonContainer: {
		padding: 20,
		width: "100%",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	tagline: {
		padding: 20,
		fontSize: 20,
		fontWeight: "500",
	},
});

export default WelcomeScreen;
