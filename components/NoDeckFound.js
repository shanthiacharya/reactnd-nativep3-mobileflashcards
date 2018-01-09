import React, {Component} from 'react'
// import {Button} from 'nachos-ui'
import {Text, Button} from 'react-native'

class NoDeckFound extends Component {

   render () {
     return (
       <Text> No Decks Exists </Text>
       <Button title= "Add New Deck" />  
     ) }


}
export default NoDeckFound
