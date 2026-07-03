import Question from './Question'

export default function Quiz(props) {
  const { questions, gameStage, onSelectAnswer } = props
  // if questions haven't been fetched yet, show a loading message
  if (questions.length === 0) {
    return (
      <div className="quiz-container" style={{ textAlign: 'center' }}>
        <h2>Loading questions...</h2>
      </div>
    )
  }
  return (
    <section className="quiz-container">
      {/* render questions */}
      {questions.map((question) => (
        <Question key={question.id} questionData={question} onSelect={onSelectAnswer}/>
      ))}

      {/* button section */}
      <div className="quiz-footer">
        {gameStage === 'result' && (
          <span className="score-text">You scored 3/5 correct answers</span>
        )}
        <button className="footer-btn">
          {gameStage === 'quiz' ? 'Check answers' : 'Play again'}
        </button>
      </div>
    </section>
  )
}
