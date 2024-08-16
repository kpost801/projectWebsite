import React from "react";
import "../src/App.css";

function Question({ question, selectedOption, onOptionChange, onSubmit }) {
  return (
    <div>
      <h3>
        Question {question.id}: {question.question}
      </h3>
      <form onSubmit={onSubmit}>
        {question.options.map((option, index) => (
          <div key={index} className="form-option">
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={onOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Question;
