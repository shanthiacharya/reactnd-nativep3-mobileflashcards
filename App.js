import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { TabNavigator,StackNavigator} from 'react-navigation';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import CreateDeck from './components/CreateDeck'
import AddQuestion from './components/AddQuestion'
import Quiz from './components/Quiz'
import reducers from './reducers/index'
import { Ionicons } from '@expo/vector-icons';
import {setLocalNotification} from './utils/notification'
import { Platform, StatusBar } from 'react-native';

const store = createStore(reducers)

const Tabs = TabNavigator ({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Decks List",
      header: null,
      headerRight: <Text> Clear All </Text>,
      tabBarIcon:({focused}) => <Ionicons name="md-list" size={32} style={{ color: focused ? '#33A3F4' : '#949494'}} />,


    },

  },
  Create: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: "New Deck",
      tabBarIcon: ({focused}) => <Ionicons name="md-add" size={32} style={{ color: focused ? '#33A3F4' : '#949494'}} />,

    }
  }


});

const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title:"Add Question "
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title:" "
    }
  },
  Quiz : {
    screen:Quiz
  }
})


export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification ()
  }

  render() {

    return (

      <Provider store ={store}>
        <View style={{ flex: 1}}>
          <Stack/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
