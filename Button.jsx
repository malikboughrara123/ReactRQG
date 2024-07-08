import React from 'react'
//presentational component

function Button({buttonDisplayName, clickHandler}) {
  return (
    <button onClick={clickHandler}>
        {buttonDisplayName}
    </button>
  )
}

export default Button
