# Quizzical

Quizzical is a React + Vite trivia quiz app that fetches five multiple-choice questions from the [Open Trivia Database API](https://opentdb.com/api_config.php), lets users select answers, checks their results, and offers a play-again flow.

## Features

- Welcome screen with a clear start action
- Quiz flow with five trivia questions
- Answer selection for each question
- Final score summary after submitting answers
- Option to play again or return home
- Responsive UI with a polished quiz layout

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- [Open Trivia Database API](https://opentdb.com/api_config.php)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to view the app.

## Available Scripts

- `npm run dev` – start the local Vite development server
- `npm run build` – create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint checks

## Project Structure

- `src/App.jsx` – main app state and game flow
- `src/components/` – reusable UI components for the welcome screen, quiz, and questions
- `src/data/api.js` – API fetching and question formatting logic
- `public/` – static assets and manifest files

## Notes

The app uses the [Open Trivia Database API](https://opentdb.com/api_config.php) to generate fresh questions for each quiz session.
