import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import './src/styles/global.css';
export default function App() {
	return (
		<View style={tw`flex justify-center  items-center w-full h-full `}>
			<Text style={tw`text-red-500`}>Mening birinchi mobile app ilovam</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
