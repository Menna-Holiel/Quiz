// import React, { useState, useEffect } from "react";
// import questionsData from "./quiz.json";
// import "./Quiz.css";

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [quizFinished, setQuizFinished] = useState(false);

//   useEffect(() => {
//     setQuestions(questionsData);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     if (selectedOption === questions[currentQuestionIndex].answer) {
//       setScore(score + 1);
//     }
//   };

//   const handleNext = () => {
//     setIsSubmitted(false);
//     setSelectedOption("");

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setQuizFinished(true);
//     }
//   };

//   if (questions.length === 0) {
//     return <p>Loading questions...</p>;
//   }

//   return (
//     <div className="quiz-container">
//       {quizFinished ? (
//         <div>
//           <h1 className="quiz-header">Quiz Finished!</h1>
//           <p className="feedback">
//             Your score: {score} out of {questions.length}
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <h1 className="quiz-header">Quiz</h1>
//           <h3 className="question-counter">
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </h3>
//           <h4 className="question-text">
//             {questions[currentQuestionIndex].question}
//           </h4>

//           {questions[currentQuestionIndex].options.map((option) => (
//             <div className="option" key={option}>
//               <label>
//                 <input
//                   type="radio"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={(e) => setSelectedOption(e.target.value)}
//                   disabled={isSubmitted}
//                 />
//                 {option}
//               </label>
//             </div>
//           ))}

//           {!isSubmitted ? (
//             <button type="submit" disabled={!selectedOption}>
//               Submit
//             </button>
//           ) : (
//             <div>
//               <p className={`feedback ${selectedOption === questions[currentQuestionIndex].answer ? 'correct' : 'incorrect'}`}>
//                                 {selectedOption === questions[currentQuestionIndex].answer ? "Correct!" : "Incorrect!"}
//                             </p>
//               {currentQuestionIndex < questions.length - 1 ? (
//                 <button onClick={handleNext}>Next</button>
//               ) : (
//                 <button onClick={handleNext}>Finish Quiz</button>
//               )}
//             </div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Quiz;
import React, { useState, useEffect } from "react";
import questionsData from "./quiz.json";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setSelectedOption("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="quiz-container">
      {quizFinished ? (
        <div>
          <h1 className="quiz-header">Quiz Finished!</h1>
          <p className="feedback">
            Your score: {score} out of {questions.length}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="quiz-header">Quiz</h1>
          <h3 className="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h3>
          <h4 className="question-text">
            {questions[currentQuestionIndex].question}
          </h4>

          {questions[currentQuestionIndex].options.map((option) => (
            <div className="option" key={option}>
              <label className={
                selectedOption === option ? 'selected' : 
                (isSubmitted && option === questions[currentQuestionIndex].answer) ? 'correct' : 
                'incorrect'
              }>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  disabled={isSubmitted}
                />
                {option}
              </label>
            </div>
          ))}

          {!isSubmitted ? (
            <button type="submit" disabled={!selectedOption}>
              Submit
            </button>
          ) : (
            <div>
              <p className={`feedback ${selectedOption === questions[currentQuestionIndex].answer ? 'correct' : 'incorrect'}`}>
                {selectedOption === questions[currentQuestionIndex].answer ? "Correct!" : "Incorrect!"}
              </p>
              {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button onClick={handleNext}>Finish Quiz</button>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Quiz;

