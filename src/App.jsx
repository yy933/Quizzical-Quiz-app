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

  function handleSelectedAnswer(questionId, answerId) {
    if (gameStage !== 'quiz') return
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        // check if this is the question we want to update
        if (question.id !== questionId) return question // if not, return the question as is

        const updatedAnswers = question.allAnswers.map((answer) => {
          // check if this is the answer we want to update
          if (answer.id === answerId) {
            return { ...answer, isSelected: true } // if th answer is selected, set isSelected to true
          } else{
            return { ...answer, isSelected: false }
          }
        })

        return {
          ...question,
          allAnswers: updatedAnswers,
        }
      })
    })
  }

  return (
    <main>
      {/* background blobs */}
      <img src={backgroundImage} alt="" className="background-image" />

      {/* conditional rendering */}
      {gameStage === 'welcome' && (
        <Welcome onStart={() => setGameStage('quiz')} />
      )}
      {(gameStage === 'quiz' || gameStage === 'result') && (
        <Quiz
          gameStage={gameStage}
          questions={questions}
          onSelectAnswer={handleSelectedAnswer}
        />
      )}
    </main>
  )
}

export default App
