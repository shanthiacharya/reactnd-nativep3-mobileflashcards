import React, {Component} from 'react'
import { View,Text,FlatList,StyleSheet,Button } from 'react-native';
import {receiveDecks} from '../actions';
import {fetchDecks} from '../utils/api'
import  { objectToArray } from '../utils/utils'
import {connect} from 'react-redux'
import DeckListItem from './DeckListItem'
// import {Button} from 'nachos-ui'

class DeckList extends Component {

    state = {
      decksList:[],
      loading:true
    }

    componentDidMount(){
      this.getDeckList()

    }

     getDeckList(){
      const {dispatch} = this.props
      fetchDecks().then((decks) =>{
        dispatch(receiveDecks(decks))
        if (decks) {
            const decksList = Object.values(decks)
            decksList.map((d) => {
              d.key = d.id
            })

            this.setState(() => ({ decksList }))
        }
      })
    }


    _renderItem = ({item}) => {
        return (
          <DeckListItem key={item.id} {...item} navigation = {this.props.navigation}/>
        );
    }

    render() {
      const {decksList} = this.state
       if (decksList) {
         return (
            <View style= {styles.maindeckListStyle} >

              <FlatList
              data = {decksList}
              renderItem = {this._renderItem}
              keyExtractor={(item, index) => index}
            />

            </View>
         )
       }
       else{
       return (
         <NoDeckFound/>
       )
       }
    }
}

const resetBtn = {

    height:50,
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f4c842'



}

const styles = StyleSheet.create ({


  maindeckListStyle: {
    flex:1,
    alignContent:'space-between',
    justifyContent:'flex-start',
    paddingTop:40,



  }
})

function mapStateToProps ( decks ) {

    return {
         decks
       }

}
export default connect(mapStateToProps) (DeckList)
