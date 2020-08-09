import {StyleSheet} from 'react-native';
import {IMAGE_WIDTH, SCREEN_WIDTH, BUTTON_WIDTH} from '../constants/Constants';

export const UserSigninScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  textInput: {
    width: SCREEN_WIDTH - 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 50,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c27b0',
    borderRadius: BUTTON_WIDTH,
  },
});

export const ChatScreenStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 17,
    marginLeft: 10,
  },
});
