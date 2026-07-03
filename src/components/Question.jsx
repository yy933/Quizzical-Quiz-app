import { clsx } from 'clsx'

export default function Question(props) {
  const { question, allAnswers, correctAnswer } = props.questionData

  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      <div className="answers-grid">
        {allAnswers.map((answer) => (
          <button
            key={answer.id}
            className={clsx('answer-btn', {
              selected: answer.isSelected,
            })}
          >
            {answer.value}
          </button>
        ))}
      </div>
      <hr className="question-divider" />
    </div>
  )
}
