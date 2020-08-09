import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {UserSigninScreenStyles as styles} from '../styles/Styles';

export default function UserSigninScreen({navigation}) {
  const [username, setUsername] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.wrapper}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../assets/app-icon.png')}
        />
        <Text style={styles.title}>Username</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
          placeholder="Type username"
          placeholderTextColor="#bdbdbd"
        />
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              if (username) {
                navigation.navigate('chat', {
                  _id: Math.round(Math.random() * 10000),
                  username: username,
                });
                setUsername('');
              } else alert('You must input your name!!!');
            }}>
            <AntDesignIcon name="arrowright" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
