import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateQuestion } from '../redux/actions/quizActions';
import AnswerList from "./AnswerList";
import { updateQuiz, updateQuizaddQuiz } from "../redux/reducers/quizReducer";

const QuestionForm = ({ quizId, question, questionIndex }) => {
  const [textx, setText] = useState(question.text);
  const [feedbackTrue, setFeedbackTrue] = useState(question.feedback_true);
  const [feedbackFalse, setFeedbackFalse] = useState(question.feedback_false);
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);


  const handleChange = ({ text, feedback_true, feedback_false }) => {
  
    const updatedQuestionsAnswers = {
      ...newQuizzes,
      questions_answers: newQuizzes.questions_answers.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              text  : textx,
              feedback_true : feedbackTrue,
              feedback_false : feedbackFalse,
            }
          : question
      ),
    };
    console.log(updatedQuestionsAnswers);
    dispatch(updateQuizaddQuiz(updatedQuestionsAnswers));
  };
  return (
    <div className=" mt-3 bg-light">
      <div>
        <div>
          <div className="mb-3">
            <label htmlFor="questionText" className="form-label">
              Question Text
            </label>
            <input
              type="text"
              className="form-control"
              id="questionText"
              value={textx}
              onChange={(e) => {
                setText(e.target.value);
                handleChange({ text: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="trueFeedback" className="form-label">
              True Feedback
            </label>
            <textarea
              className="form-control"
              id="trueFeedback"
              value={feedbackTrue}
              onChange={(e) => {
                setFeedbackTrue(e.target.value);
                handleChange({ feedback_false: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="falseFeedback" className="form-label">
              False Feedback
            </label>
            <textarea
              className="form-control"
              id="falseFeedback"
              value={feedbackFalse}
              onChange={(e) => {
                setFeedbackFalse(e.target.value);
                handleChange({ feedback_false: e.target.value });
              }}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Save
          </button> */}
        </div>
      </div>
      <AnswerList
        quizId={quizId}
        question={question}
        questionIndex={questionIndex}
      />
    </div>
  );
};

export default QuestionForm;
