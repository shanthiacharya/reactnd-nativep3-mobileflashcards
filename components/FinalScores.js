import React, {Component} from 'react'
// import {Button} from 'nachos-ui'
import {Text, View, StyleSheet,Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {black} from '../utils/colors'
import {clearLocalNotification,setLocalNotification} from '../utils/notification'

class FinalScores extends Component {

   calculateScores = () => {
     const correctpoints = this.props.correctpoints
     const totalquestions = this.props.totalquestions

     let finalscore = 0
     if (correctpoints > 0 )
       finalscore = Math.round((correctpoints/totalquestions) *100)

     if (finalscore === 0)
        return {
          message: "0 Points? Try harder ! You can do it",
          iconname :'md-sad',
          score: finalscore
        }

     if (finalscore <= 40)
        return {
          message: "OK, You can do better!",
          iconname :'md-happy',
          score: finalscore
         }

    if (finalscore <= 80)
        return {
          message: "Almost there!, Study a bit more ",
          iconname :'md-star',
          score: finalscore
        }

      return {
        message: "Awesome, You nailed it",
        iconname :'md-trophy',
        score: finalscore
        }



     }


    resetNotification =() => {
        clearLocalNotification()
          .then(setLocalNotification)
    }

    startQuiz = () => {

        this.props.navigation.navigate ('Quiz', {id:this.props.id})
     }

   gobacktoDeck = () => {
        this.props.navigation.navigate ('Deck',{id:this.props.id})
        this.resetNotification()
     }

   goBacktoHome = () => {

        this.props.navigation.navigate ('Home')
        this.resetNotification()
     }



   render () {

     const scoredetails = this.calculateScores()
     return (
         <View style={styles.deckView}>
              <Ionicons name={scoredetails.iconname } size={100} style={{ color:'#FFDF00'}} />
              <Text style={styles.Title}> Your Results : {scoredetails.score }% </Text>
              <Text style={styles.Subtitle}> {scoredetails.message }</Text>
              <Button title= "Retake Quiz" style={btnStyle}  type='success' onPress = {this.startQuiz}/>
              <Button title= "Back to Deck" style={btnStyle} onPress = {this.gobacktoDeck}/>
              <Button title= "Back to Home " style={btnStyle}  iconName='md-home' onPress = {this.goBacktoHome}/>
         </View>
     )}
   }


const btnStyle = {
  margin: 50,
}
const styles = StyleSheet.create({
  deckView: {
    flex:0.75,
    margin:40,
    alignItems: "center",
    justifyContent: "space-around",
  },
 Title : {
     fontSize: 28,
     color: black,
     fontWeight: "400",
     marginBottom: 0,
     paddingBottom: 5
   },
 Subtitle : {
     fontSize: 20,
     fontWeight: "200",
     paddingBottom: 50
   }

})
export default FinalScores
