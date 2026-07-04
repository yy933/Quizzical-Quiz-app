import { useState, useEffect } from 'react'
import backgroundImage from './assets/background-image.png'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'
import fetchApiData from './data/api'
function App() {
  // gameStage: "welcome"|"quiz"|"result"
  const [gameStage, setGameStage] = useState('welcome')
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)

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
          } else {
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

  function checkAnswers() {
    setGameStage('result')
    
    const finalScore = questions.reduce((totalScore, question) => {
      const isCorrect = question.allAnswers.some(
        (answer) =>
          answer.isSelected && answer.value === question.correctAnswer,
      ) 
      return isCorrect ? totalScore + 1 : totalScore
    }, 0) 

    setScore(finalScore)

    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        const isCorrect = question.allAnswers.some(
          (answer) =>
            answer.isSelected && answer.value === question.correctAnswer,
        )
        return { ...question, isCorrect: isCorrect }
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
          score={score}
          onSelectAnswer={handleSelectedAnswer}
          onCheckAnswers={checkAnswers}
        />
      )}
    </main>
  )
}

export default App
