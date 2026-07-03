import  { useState } from 'react'
import Question from './Question'

// mock data for testing
const mockQuestions = [
  {
    id: 'q1',
    question: 'How Many Hearts Does An Octopus Have?',
    correctAnswer: 'Three',
    allAnswers: [
      { id: 'a1', value: 'One', isSelected: false },
      { id: 'a2', value: 'Two', isSelected: false },
      { id: 'a3', value: 'Three', isSelected: true }, // correct answer (mocked)
      { id: 'a4', value: 'Four', isSelected: false },
    ],
  },
  {
    id: 'q2',
    question: 'What is the hottest planet in our Solar System?',
    correctAnswer: 'Venus',
    allAnswers: [
      { id: 'a5', value: 'Mercury', isSelected: false },
      { id: 'a6', value: 'Venus', isSelected: false },
      { id: 'a7', value: 'Mars', isSelected: false },
      { id: 'a8', value: 'Saturn', isSelected: false },
    ],
  },
]

export default function Quiz(props) {
  const [questions, setQuestions] = useState(mockQuestions)

  return (
    <section className="quiz-container">
      {/* render questions */}
      {questions.map((question) => (
        <Question key={question.id} questionData={question} />
      ))}

      {/* button section */}
      <div className="quiz-footer">
        {props.gameStage === 'result' && (
          <span className="score-text">You scored 3/5 correct answers</span>
        )}
        <button className="footer-btn">
          {props.gameStage === 'quiz' ? 'Check answers' : 'Play again'}
        </button>
      </div>
    </section>
  )
}
