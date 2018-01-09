import React, {Component} from 'react'
import { StyleSheet,View,Text, TextInput,Button } from 'react-native';
import {connect} from 'react-redux'
import {fetchDecks,addDeck} from '../utils/api'
import {receiveDecks} from '../actions'
import {uniqueNumber} from '../utils/utils'
// import {Bubble,Button} from 'nachos-ui'
import {black} from '../utils/colors'


class CreateDeck extends Component {

  constructor (props) {
    super (props)
    this.state = {
      title :'',
      id :'',
      emptyfield:false
    }
  }

  createDeck = () =>  {


    const {dispatch} = this.props
    const {title,emptyfield} = this.state
    let deckId = uniqueNumber()
    this.state.id = deckId
    if (title === "")
      this.setState ({emptyfield:true})
    else {

        const deck = {
          id: this.state.id,
          title: this.state.title,
          questions: []
        }
        addDeck(deck).then(res => res.json())


        }
    }



    render() {
          const {title,emptyfield} = this.state
       return (
          <View  style = {styles.deckView}>
          <Text style ={styles.cardTitle}> Deck Name </Text>
          <TextInput style ={{height:40,width:350,borderColor:'gray',borderWidth:1,margin:10}}
            onChangeText = {(title) => this.setState({title,emptyfield:false})}
            value= {this.state.title}
            />
            {(emptyfield) && <Text style={bubbleStyle}  arrowPosition='top'color='#ff0000' > Name cannot be empty!</Text>}
            <Button  title="Create Deck" onPress = {this.createDeck}>  </Button>
          </View>

       );
    }
}

const bubbleStyle = { marginBottom: 10 }

const styles = StyleSheet.create({
  deckView: {
    paddingTop:200,
    margin:10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle : {
     fontSize: 28,
     color: black,
     fontWeight: "400",
     marginBottom: 0,
     paddingBottom: 5,

   }

})


function mapStatetoProps (decks) {
  return {
    decks
  }
}





export default connect (mapStatetoProps ) (CreateDeck)
