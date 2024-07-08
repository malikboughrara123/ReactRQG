import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
function Header({darkMode, toggleDarkMode}) {
  return (
    <header className='App-header'>
        <h1>Random Quote Generator</h1>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
        </div>
    </header>
  )
}

export default Header
