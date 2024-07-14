import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
const Stack = createStackNavigator();
function Detail({ route }) {
	const item = route.params.data;
	return (
		<View>
			<Text>{item.text}</Text>
		</View>
	);
}

export default Detail;
