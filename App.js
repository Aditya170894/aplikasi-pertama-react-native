import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height:80, backgroundColor: 'red'}} />
      <Text>Aditya Saputra</Text>
      <Sos />
      <Photo />
      {/* <TextInput style={{borderWidth: 1}} /> */}
    </View>
  );
};

const Sos = () => {
  return <Text>Saputra</Text>;
};

const Photo = () => {
  return (
    <Image 
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height:100}}
    />
  );
}

export default App;