import { clsx } from 'clsx'

export default function Question(props) {
  const { questionData, onSelect } = props
  const { question, allAnswers, id: questionId } = questionData

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
            onClick={() => onSelect(questionId, answer.id)}
          >
            {answer.value}
          </button>
        ))}
      </div>
      <hr className="question-divider" />
    </div>
  )
}
