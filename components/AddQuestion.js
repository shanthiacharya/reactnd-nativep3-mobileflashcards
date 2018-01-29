import React, {Component} from 'react'
import { View,Text,TextInput,StyleSheet,Button } from 'react-native';
import {receiveDecks} from '../actions';
import {fetchDecks,getDeckById,addDeck} from '../utils/api'
import {objectToArray} from '../utils/utils'
import {connect} from 'react-redux'
// import {Bubble,Button} from 'nachos-ui'
import {black} from '../utils/colors'


class AddQuestion extends Component {


  constructor(props) {
    super(props);
    this.state = {
         question: '',
         answer: '',
         emptyquestionfield:false,
         emptyanswerfield:false
     }
   }


    componentDidMount(){


    }


    addQuestion = () => {


      const {question, answer,emptyquestionfield,emptyanswerfield} = this.state
       if (question === '')
       this.setState ({emptyquestionfield:true})

       if (answer === '')
       this.setState ({emptyanswerfield:true})

      if (question && question.length > 0 && answer && answer.length > 0){
        const {dispatch, decks} = this.props
        const {id} = this.props.navigation.state.params

        getDeckById(id)
        .then(deck => {
          deck.questions.push({question,answer})
            addDeck (deck)
            .then(() => {
              fetchDecks().then((decksNew) => {
                dispatch(receiveDecks(decksNew))
                this.props.navigation.navigate ('Deck',{id:id})
                this.setState({question: '',answer: ''});
                 this.setState ({emptyquestionfield:false,emptyanswerfield:false })
              })
            })
          })
        }

    }




    render() {
            const {question, answer,emptyquestionfield,emptyanswerfield} = this.state
       return (
          <View style = {styles.deckView}>

           <Text style={styles.cardTitle}>  Question </Text>
           <TextInput style ={{height:40,borderColor:'gray',borderWidth:1,margin:10}}
             onChangeText = {(question) => this.setState({question})}
             value= {this.state.question}
             />
             {(emptyquestionfield) && <Text style={bubbleStyle}  arrowPosition='top'color='#ff0000' > Question cannot be empty!</Text>}
             <Text style={styles.cardTitle}>  Answer </Text>
             <TextInput  multiline ={true} numberOfLines = {4} style ={{height:300,borderColor:'gray',borderWidth:1,margin:10}}
               onChangeText = {(answer) => this.setState({answer})}
               value= {this.state.answer}
               />
               {(emptyanswerfield) && <Text style={bubbleStyle}  arrowPosition='top'color='#ff0000' >Answer cannot be empty!</Text>}
               <Button title="Add Question" onPress = {this.addQuestion }/>


          </View>
       );
    }
}

const bubbleStyle = { marginBottom: 10 }

const styles = StyleSheet.create({
  deckView: {
    flex:1,
    margin:20,
    alignItems: "stretch",
    justifyContent: "center",
  },
  cardTitle : {
     fontSize: 28,
     color: black,
     fontWeight: "300",
     marginBottom: 0,
     paddingBottom: 5
   },
    questionsCount : {
     fontSize: 20,
     fontWeight: "200",
     paddingBottom: 50
   }

})




function mapStateToProps ( decks ) {
  
    return {
          decks
       }

}
export default connect(mapStateToProps) (AddQuestion)
