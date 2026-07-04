import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}
export default async function fetchApiData() {
  try {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=5&type=multiple',
    )
    const data = await res.json()

    const formattedQuestions = data.results.map((question) => {
      const decodedCorrectAnswer = decode(question.correct_answer)
      const decodedIncorrectAnswers = question.incorrect_answers.map((answer) =>
        decode(answer),
      )
      const combinedAnswers = [
        ...decodedIncorrectAnswers,
        decodedCorrectAnswer,
      ]
      const shuffledAnswers = shuffleArray(combinedAnswers)
      const allAnswers = shuffledAnswers.map((answer) => {
        return {
          id: nanoid(),
          value: answer,
          isSelected: false,
        }
      })
      console.log('Correct answer: ', decodedCorrectAnswer)

      return {
        id: nanoid(),
        question: decode(question.question),
        correctAnswer: decodedCorrectAnswer,
        allAnswers: allAnswers,
      }
    })

    return formattedQuestions
  } catch (err) {
    console.error('Fetch API data error: ', err)
    return []
  }
}
