import * as API from '../utils/api'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK_BY_ID = 'RECEIVE_DECK_BY_ID'
export const ADD_DECK ='ADD_DECK'

export const receiveDecks = (decks) => ({
  type:RECEIVE_DECKS,
  decks

})
export const receiveDeckById = (deck) => ({
  type:RECEIVE_DECK_BY_ID,
  deck

})

export const addDeck = (deck) => ({
  type:ADD_DECK,
  deck
})
