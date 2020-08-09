import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Keyboard} from 'react-native';
import database from '@react-native-firebase/database';
import {
  UserSigninScreenStyles,
  ChatScreenStyles as styles,
} from '../styles/Styles';
import {GiftedChat} from 'react-native-gifted-chat';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

export default function ChatScreen({navigation, route}) {
  const {username, _id} = route.params;
  const [chatMessages, setChatMessages] = useState([]);
  const dbRef = database().ref('/messages');
  const onSend = useCallback((messages = []) => {
    dbRef.push(messages[0]).then(() => console.log('texted'));
  }, []);
  useEffect(() => {
    const addEvent = dbRef.limitToLast(20).on('child_added', (snapshot) => {
      setChatMessages((prevMessages) =>
        GiftedChat.append(prevMessages, snapshot.val()),
      );
    });
    return () => {
      dbRef.off('child_added', addEvent);
    };
  }, []);

  return (
    <View style={UserSigninScreenStyles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            style={styles.buttonContainer}>
            <IoniconIcon name="ios-arrow-back" size={25} color="black" />
            <Text style={styles.headerText}>Home</Text>
          </TouchableWithoutFeedback>
        </View>
        <GiftedChat
          renderUsernameOnMessage={true}
          messages={chatMessages}
          onSend={(newMessage) => onSend(newMessage)}
          user={{
            _id: _id,
            name: username,
            avatar:
              'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
