export default function Welcome({ onStart }) {
  return (
    <section className="welcome-container">
      <h1 className="welcome-title">Quizzical</h1>
      <p className="welcome-text">Some description if needed</p>
      <button className="welcome-btn" onClick={onStart}>
        Start quiz
      </button>
    </section>
  )
}
