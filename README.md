This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Project 3 - Mobile Flash Cards - Built with React Native

* DeckListView : Primary View shows a list of decks and number of cards.
Tapping on the Deck from the list takes to a Individual DeckView.
* Deck View : Shows the deck title , Number of cards in the deck.
Option to start a quiz or add a new question to the deck
* New Question View : Form with fields for a question and answer, and a submit button.
* Quiz View : Shows a question from the selected deck, along with a button to show the answer.Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
* Final Score View : Shows the score of the quiz along with button to start the quiz over or go back to the Individual Deck view
* Notifications : Logic for push notification has been implemented. Push notifications are generated at 8PM  if the user hasn't completed at least one quiz for that day.



The application requires yarn or npm install and yarn start to launch.

## How to run :
* npm install
* yarn start

If needed run the following command if yarn gives error:
 Unable to start server
 See https://git.io/v5vcn for more information, either install watchman or ## run the following snippet:
* sudo sysctl -w kern.maxfiles=5242880
* sudo sysctl -w kern.maxfilesperproc=524288

* Press i to open iOS emulator.
* Press q to display QR code.
* Press r to restart packager, or R to restart packager and clear cache.
* Press d to toggle development mode. (current mode: development)

**Note:** This project works only on iOS currently
