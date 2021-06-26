import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import Button from "./app/components/Button";
import * as Permissions from "expo-permissions";
import { Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
	const [imageUri, setImageUri] = useState();

	const requestPermission = async () => {
		const { granted } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted)
			alert("You need to enable permission to access the library");
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) {
				setImageUri(result.uri);
			}
		} catch (error) {
			console.log("Error reading Image ", error);
		}
	};
	return (
		<Screen>
			<ImageInput
				onChangeImage={(uri) => setImageUri(uri)}
				imageUri={imageUri}
			/>
		</Screen>
	);
}
