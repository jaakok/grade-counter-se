import React from 'react'

const Results = ({totalS, title}) => {
  return (
    <div>
      <h4>Sammandrag</h4>
      {title.length > 0
        ?
          <div>
            <p>Total poäng: {totalS}</p>
            <p>Poäng på enskilda ämnen:</p>
          {title.map(t => <p>{t}</p>)}
          </div>
        : null
      }
    </div>
  )
}

export default Results
