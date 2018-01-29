import {AsyncStorage} from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:decks'
import {uniqueNumber} from './utils'

export function populateDecks (results) {
  if (results === null) {
    return setInitialData()
  }
    return JSON.parse (results)

}


function setInitialData() {


  const u1 = uniqueNumber()
  const u2 = uniqueNumber()
  const dummyData = {
    12345: {
      id: 12345,
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    37898: {
      id: 37898,
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  AsyncStorage.setItem (FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}
