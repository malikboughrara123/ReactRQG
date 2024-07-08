import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import {random} from 'lodash'
import Button from './components/Button';
import Library from './components/Library';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
function App() {
//State managemenet with "useState"
//quotes is a state variable that holds an array of quotes fetched
//from an external API
  const [quotes, setQuotes] = useState ([]);
  //selectedQuoteIndex is a state variable that keeps track of the index of the
  //currently selected quote from the "quotes" array
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
   
  const [likedQuotes, setLikedQuotes] = useState([]);

  //new state for managing toggling the dark mode
  const [darkMode, setDarkMode] = useState(false);

  //we fetch the data whenever the componenet is mounted/created 
  //using useEffect hook 
  //useEffect is used to perform side effects in function components
  //it is used to fetch quotes from an API when the component mounts ('[]')
  useEffect(()=> {
    getQuotes()    }, []);
    

    //this function makes an HTTP GET request using axios library
    //to fetchc data from the provided URL upon a successful response
    //updating the "quotes" state with the fetched data aka the reponse.data
    //it sets 'selectedQuoteIndex' to a random index within the "quotes" array
    //using library lodash to use the function random
    function getQuotes (){
      axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json').then(function(response){
        // console.log(response.data);
        setQuotes(response.data);
        setSelectedQuoteIndex(random(0, response.data.length -1));
        // console.log(quotes)
      }).catch (function(error){
        console.log(error);
      })
    }
//this function returns a random index within the "quotes" array. 
//it checks if "quotes" is empty; if so it returns null to avoid errors
    const getRandomIndex = () => {
      if (!quotes.length){
        return null;
      } else {
        return random(0, quotes.length - 1);
      }
    }

    const addLikedQuote = () => {
      if (selectedQuoteIndex !== null){
        const likedQuote = {
          quote: quotes[selectedQuoteIndex].quote,
          author: quotes[selectedQuoteIndex].author
        };
        setLikedQuotes([...likedQuotes, likedQuote])
      }
    }

    const removeLikedQuote = (index) => {
      const updatedLikedQuotes = [...likedQuotes];
      updatedLikedQuotes.splice(index, 1);
      setLikedQuotes(updatedLikedQuotes);
    }
    //function to manage whenever it's called to change the state to it's opposite for example if it was light
    //it will make it dark
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
//handling next quote button click = what it does is updating the selectedQuoteIndex state with a 
//random new index, triggering a re-render of the component with the next quote
//displayed



  function getRandomQuote () {
    // console.log("hi");
    setSelectedQuoteIndex(getRandomIndex());
  }

  //rendering quotes
  //conditionally renders the quote and its author 
  //('quotes[selectedQuoteIndex].quote) and "quotes[selectedQuoteIndex].author" only
  //if 'selectedQuoteIndex' is not "null", ensuring that quotes are displayed
  //only when data is availables

  return (
    // here's a conditional reendering inside the className of the main div of the app
    //if dark mode is true we apply the darkMode Class in css
    //if not then we apply the standard style of the App div
    //also we pass to all the components the props of darkMode so we can change the style in all the components 
    //based on the value of the state variable darkMode
    
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

    <Container
      quotes={quotes}
      selectedQuoteIndex={selectedQuoteIndex}
      getRandomQuote={getRandomQuote}
      addLikedQuote={addLikedQuote}
      darkMode={darkMode}
    />
    <Library
      likedQuotes={likedQuotes}
      removeLikedQuote={removeLikedQuote}
      darkMode={darkMode}
    />
  </div>
  );
}
export default App;
