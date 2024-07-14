import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
function Home({ navigation }) {
	const [toggle, setToggle] = useState(false);
	const Toggle = press => {
		navigation.navigate('Home');
	};

	const data = [
		{
			text: 'HTMl',
		},
		{
			text: 'Css',
		},
		{
			text: 'JavaScript',
		},
	];

	const datas = Array.from(Array(6).keys());
	return (
		<SafeAreaView style={styles.container}>
			{/* <ScrollView></ScrollView> */}

			<Button title='press' />

			<Pressable onPress={Toggle}>
				<Text>{toggle ? 'pressed' : 'press me'}</Text>
			</Pressable>

			<FlatList
				data={data}
				renderItem={({ item }) => {
					return (
						<TouchableHighlight
							activeOpacity={0.3}
							key={item}
							onPress={() => {
								navigation.navigate('Detail', { data: item });
							}}
						>
							<View style={styles.block}>
								<Text>{item.text}</Text>
							</View>
						</TouchableHighlight>
					);
				}}
			/>

			<StatusBar
				animated={true}
				backgroundColor='#61dafb'
				barStyle={'dark-content'}
				translucent={true}
				hidden={true}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	block: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000',
		shadowColor: '#000',
		borderRadius: 16,
		marginTop: 10,
		height: 100,
		width: '100%',
		shadowColor: '#000',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 3,
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
});
export default Home;
