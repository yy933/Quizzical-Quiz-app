import { useState, useEffect } from 'react'
import backgroundImage from './assets/background-image.png'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import fetchApiData from './data/api'
function App() {
  // gameStage: "welcome"|"quiz"|"result"
  const [gameStage, setGameStage] = useState('welcome')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
   if (gameStage === 'quiz') {
     async function getQuestions() {
       const apiData = await fetchApiData()
       setQuestions(apiData)
     }
     getQuestions()
   }
  }, [gameStage])

  return (
    <main>
      {/* background blobs */}
      <img src={backgroundImage} alt="" className="background-image" />

      {/* conditional rendering */}
      {gameStage === 'welcome' && (
        <Welcome onStart={() => setGameStage('quiz')} />
      )}
      {(gameStage === 'quiz' || gameStage === 'result') && (
        <Quiz gameStage={gameStage} questions={questions} />
      )}
    </main>
  )
}

export default App
