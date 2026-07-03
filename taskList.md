## 1. Project Setup
 - [x] Initialize project：Initialize React + JavaScript project with Vite 
 - [x] Remove unnecessary default CSS and `.js/.jsx` files
 - [x]Basic Styling：fonts, background, background color, etc 
 - [x]Install packages： `he` or `html-entities`（Decode HTML entities in data retrieving from Open Trivia API）, `nanoid`。

## 2. UI & Conditional Rendering 
- [x] Setting gameStage state in `App.jsx` ` ("welcome" | "quiz" | "result")`
- [x] Create `<Welcome />` component（including title, description, and Start btn）
- [x] Create `<Quiz />` and `<Question />` component（use mock data for now）
- [x] add feature: click Start quiz btn and direct to quiz page

## 3. Data Fetching & Selection
- [x] Fetch API data： Fetch API data from Open Trivia Database (with `useEffect` hook, 5 questions per round) 

- [x] Shuffle array：Create a function that shuffle the array which mixed up with `correct_answer` and `incorrect_answers`. Otherwise the correct answer will always be at the same position.

- [x] Decode HTML entities：Decode HTML entities in returning data with `he.decode()` 

- [ ] Single choice logic：
  - When the user click the specific option, change its `isSelected` state.
  - Ensure only one option in each option can be `isSelected === true`


## 4. Checking Answers & Game Reset
- [ ] Check Answers:
  - When the user clicks the footer button, change the `gameStage` to `"result"`.
  - Calculate the total score by checking how many objects have `isSelected === true` and `value === correctAnswer`.
- [ ] Conditional Styling (Result Visuals):
  - In `"quiz"` stage: The selected button turns dark blue.
  - In `"result"` stage: Buttons apply different CSS classes based on the following logic:
    - If the option is the `correctAnswer` $\rightarrow$ **Green** (regardless of whether the user selected it).
    - If the option is selected but incorrect (`isSelected === true` AND not the correct answer) $\rightarrow$ **Pink/Light Red**.
    - Other unselected, incorrect options $\rightarrow$ **Faded/Dimmed**.
- [ ] Game Reset (Play Again):
  - Clicking the button resets the score, switches the `gameStage` back to `"quiz"`, and triggers a new API fetch to load a brand new set of random questions.