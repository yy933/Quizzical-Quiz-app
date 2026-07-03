import { useState } from 'react'
import backgroundImage from './assets/background-image.png'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
function App() {
  // gameStage: "welcome"|"quiz"|"result"
  const [gameStage, setGameStage] = useState('welcome')
  return (
    <main>
      {/* background blobs */}
      <img src={backgroundImage} alt="" className="background-image" />

      {/* conditional rendering */}
      {gameStage === 'welcome' && (
        <Welcome onStart={() => setGameStage('quiz')} />
      )}
      {gameStage === 'quiz' && <Quiz gameStage={gameStage} />}
    </main>
  )
}

export default App
