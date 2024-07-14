import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Detail from './src/pages/Detail';
import Home from './src/pages/Home';
const Stack = createStackNavigator();

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Homes' component={Home} />
					<Stack.Screen name='Detail' component={Detail} />
				</Stack.Navigator>
			</NavigationContainer>
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
