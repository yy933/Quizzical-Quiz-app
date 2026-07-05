import { clsx } from 'clsx'

export default function Question(props) {
  const { questionData, onSelect, gameStage } = props
  const { question, allAnswers, id: questionId, correctAnswer } = questionData

  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      <div className="answers-grid">
        {allAnswers.map((answer) => {
          const isCurrentAnswerCorrect = answer.value === correctAnswer
          const isResultStage = gameStage === 'result'
          const className = clsx('answer-btn', {
            selected: gameStage === 'quiz' && answer.isSelected,
            correct: isResultStage && isCurrentAnswerCorrect,
            incorrect: isResultStage && answer.isSelected && !isCurrentAnswerCorrect,
            dimmed: isResultStage && !answer.isSelected && !isCurrentAnswerCorrect,
          })
          return (
            <button
              key={answer.id}
              className={className}
              onClick={() => onSelect(questionId, answer.id)}
            >
              {answer.value}
            </button>
          )
        })}
      </div>
      <hr className="question-divider" />
    </div>
  )
}
