import React from 'react'
import "./container.css"
import Button from './Button'
function Container({quotes, selectedQuoteIndex, getRandomQuote, addLikedQuote, darkMode}) {
  return (
    <div className="container mt-5">
    <div className={`jumbotron ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      {selectedQuoteIndex !== null && (
        <div>
          <h4 className="mb-4">{darkMode ? 'Random Quote (Dark Mode)' : 'Random Quote'}</h4>
          <p className="lead">{quotes[selectedQuoteIndex].quote}</p>
          <p className="font-italic">- {quotes[selectedQuoteIndex].author}</p>
        </div>
      )}
      <hr className="my-4" />
      <div className="text-left">
          <Button buttonDisplayName="Next Quote" clickHandler={getRandomQuote} className="mr-3" />
          <Button buttonDisplayName="Add to Liked" clickHandler={addLikedQuote} className="btn-primary" />
        </div>
    </div>
  </div>
  )
}

export default Container
