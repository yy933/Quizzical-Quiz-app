import React, { useState } from 'react'
import backgroundImage from './assets/background-image.png'
import Welcome from './components/Welcome'
function App() {
  // gameStage: "welcome"|"quiz"|"result"
  const [gameStage, setGameStage] = useState("welcome")
  return (
    <main>
      {/* background blobs */}
      <img src={backgroundImage} alt="" className="background-image" />
      
      {/* conditional rendering */}
      {gameStage === 'welcome' && (
        <Welcome onStart={() => setGameStage('quiz')} />
      )}
      {gameStage === 'quiz' && (
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <h2>Quiz Page</h2>
          <button onClick={() => setGameStage('welcome')}>Back to Home</button>
        </div>
      )}
    </main>
  )
}

export default App
