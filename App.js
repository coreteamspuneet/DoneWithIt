import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handelPress = () => {
    console.log('text clicked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handelPress}>Hello</Text>
      <Image source={require('./assets/favicon.png')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // backgroundColor:'green',
    // fontSize:'20rem'
    // fontSize:'10px',
  },
});
