import { useState } from "react";
import Question from "./question";
import "./App.css";
import Score from "./score";
import qBank from "./QuestionBank";

function App() {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="container">
      <h1>UTAH QUIZ</h1>
      {!quizEnd ? (
        <Question
          question={questionBank[currentQuestion]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Score score={score} TryAgain={handleTryAgain} />
      )}
    </div>
  );
}

export default App;
