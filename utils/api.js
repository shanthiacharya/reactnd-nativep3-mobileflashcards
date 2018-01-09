import {AsyncStorage} from 'react-native'
import {FLASHCARDS_STORAGE_KEY,populateDecks} from './_decks'
import {uniqueNumber} from './utils'
import {objectToArray} from './utils'


export function clearAll () {
    AsyncStorage.clear()
    .then(() => {})
    .catch (e => {
      console.log(e)
    })
}
//getDecks: return all of the decks along with their titles, questions, and answers.
export function fetchDecks () {
  clearAll()
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
      .then (populateDecks)
}

//getDeck: take in a single id argument and return the deck associated with that id.
export function getDeckById(id) {
       return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
      .then((results) => {
            const data = JSON.parse(results)
            let deck = data[id]
            return deck
        })
}


//saveDeckTitle: take in a single title argument and add it to the decks.
export function addDeck (newdeck) {
    // clearAll()
    console.log ("New Deck Adding: " + newdeck.id +JSON.stringify(newdeck) )
   return AsyncStorage.mergeItem (FLASHCARDS_STORAGE_KEY, JSON.stringify({
    
       [newdeck.id]:newdeck

     }))
}
