import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	fetch("https://supreme-meme-r46qj5xg45qp3x9v4-3000.app.github.dev/posts", requestOptions)
	.then(response => response.json())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));

	return (
		<View style={styles.container}>
			<Text>fael fede</Text>
			<StatusBar style="auto" />
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
