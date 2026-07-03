import React from 'react'

export default function Welcome(props) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Quizzical</h1>
      <p className="welcome-text">Some description if needed</p>
      <button className="welcome-btn" onClick={props.onStart}>
        Start quiz
      </button>
    </div>
  )
}
