import React, {Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {black} from '../utils/colors'


class DeckListItem extends Component {


    componentDidMount(){

     // console.log("DeckList:" + JSON.stringify(this.props))

    }

    handleDeckDisplay = () => {
      const {navigation,id,title} = this.props
      navigation.navigate('Deck', {id:id,title:title})
    }

    render() {
      const {title,questions,id} = this.props
       return (
         <TouchableOpacity  onPress = {this.handleDeckDisplay} >
          <View key= {id} style ={styles.card}>
             <Text  style ={styles.cardTitle}>  {title} </Text>
             <Text  style ={styles.questionsCount}>  {questions.length} Cards </Text>
          </View>
          </TouchableOpacity>
        )}

}

const styles = StyleSheet.create({
  card: {
  margin: 15,
  backgroundColor: "#fff",
  shadowOffset: { width: 0, height: 3 },
  shadowColor: "#000",
  shadowRadius: 2,
  shadowOpacity: 0.2,
  padding: 15,
  paddingBottom: 25
},
 cardTitle : {
    fontSize: 28,
    color: black,
    fontWeight: "400",
    marginBottom: 0,
    paddingBottom: 5
  },
   questionsCount : {
    fontSize: 20,
    fontWeight: "200"
  }
})


export default DeckListItem
