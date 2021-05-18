import ProgressBar from "@ramonak/react-progress-bar";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import "./App.css";
import UrgeWithPleasureComponent from "./CountdownTimer";
function QuizComponent() {
  const { quizState, quizDispatch } = useQuizContext();

  const getQuestion = (id: number) => {
    return quizState.quiz.questions.find((ele) => ele.id == id);
  };

  const getCurrentQuestion = (id: number) => {
    return getQuestion(id)?.questionDesc;
  };

  return (
    <div className="quiz-body">
      <div className="quiz-main">
        {/* quiz left */}

        <div className="quiz-left">
          <div className="quiz-left-avatar">
            <img src={quizState.userAvatar} alt="" />
          </div>
          <div className="quiz-left-intro">
            <h2>
              Welcome <span>{quizState.userName}</span>{" "}
            </h2>
          </div>
          <div className="quiz-left-score">
            <h3>
              Current Score : <span>{quizState.currentScore}</span>
            </h3>
          </div>
          <div className="quiz-left-tree">
            <h3>Quiz Track</h3>
            <div className="tree-container">
              <div className="tree">
                <p>
                  Question 1 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 2 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 3 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 4 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 5 <i className="far fa-circle"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz-right">
          <div className="quiz-right-top">
            <h3>{quizState.categorySelected} Quiz</h3>
            <h2>
              <span>Question</span>
              <span>{quizState.currentQuestion}</span>
              <span>/</span>
              <span>{quizState.quiz.questions.length}</span>
            </h2>
          </div>
          <div className="quiz-right-progress">
            <ProgressBar
              completed={
                (quizState.currentQuestion / quizState.quiz.questions.length) *
                100
              }
              bgColor="#212949"
              height="1.5rem"
              labelColor="white"
            />
          </div>
          <div className="quiz-right-question">
            <p>
              <span>0{quizState.currentQuestion})</span>
              {getCurrentQuestion(quizState.currentQuestion)}
            </p>
          </div>
          <div className="quiz-right-countdown">
            <UrgeWithPleasureComponent />
          </div>
          <div className="quiz-right-options">
            <div className="option-top">
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
            </div>
            <div className="option-bottom">
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
            </div>
          </div>
          <div className="quiz-right-cta">
            <button className="quit-quiz-cta">
              <i className="fas fa-power-off"></i>Quit Quiz
            </button>
            <button className="skip-quiz-btn">Skip Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
