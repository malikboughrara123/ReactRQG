import React from 'react';
import "./library.css";
import Button from './Button';
function Library({likedQuotes, removeLikedQuote, darkMode}) {
  return (
    <div className="container mt-5">
      <div className={`card ${darkMode ? 'text-white bg-dark' : ''}`}>
        <div className={`card-header ${darkMode ? 'bg-info' : 'bg-light'}`}>
          <h4>Liked Quotes</h4>
        </div>
        <div className="card-body">
          {likedQuotes.length === 0 ? (
            <p className="card-text">No liked quotes yet.</p>
          ) : (
            <ul className="list-group">
              {likedQuotes.map((quote, index) => (
                <li key={index} className={`list-group-item ${darkMode ? 'bg-dark text-white' : ''}`}>
                  <p>{quote.quote}</p>
                  <p className="font-italic">- {quote.author}</p>
                  <Button buttonDisplayName="Delete" clickHandler={() => removeLikedQuote(index)} className="btn-sm" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Library
