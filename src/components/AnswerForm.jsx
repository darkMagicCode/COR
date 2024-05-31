import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz, updateQuizaddQuiz } from "../redux/reducers/quizReducer";
// import { updateAnswer } from "../redux/actions/quizActions";

const AnswerForm = ({
  quizId,
  questionId,
  answer,
  answerIndex,
  questionIndex,
}) => {
  const [textx, setText] = useState(answer.text);
  const [isTrue, setIsTrue] = useState(answer.is_true);
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);


  const handleChange = ({ text, is_true }) => {


    const updatedQuestionsAnswers = {
      ...newQuizzes,
      questions_answers: newQuizzes.questions_answers.map((question, qIndex) =>
        qIndex === questionIndex
          ? {
              ...question,
              answers: question.answers.map((answer, aIndex) =>
                aIndex === answerIndex
                  ? {
                      ...answer,
                      text : textx,
                      isTrue : isTrue,
                      // is_true,
                    }
                  : answer
              ),
            }
          : question
      ),
    };
    dispatch(updateQuizaddQuiz(updatedQuestionsAnswers));
  };
  return (
    <div className=" mt-3 py-2  bg-light">
      {/* <h6>Edit Answer</h6> */}
      <div>
        <div className="mb-3">
          <label htmlFor="answerText" className="form-label">
            Answer Text
          </label>
          <input
            type="text"
            className="form-control"
            id="answerText"
            value={textx}
            onChange={(e) => {
              setText(e.target.value);
              handleChange({ text: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isTrue"
            checked={isTrue}
            onChange={(e) => {
              setIsTrue(e.target.checked);
              handleChange({ is_true: e.target.value });
            }}
          />
          <label className="form-check-label" htmlFor="isTrue">
            Is Correct
          </label>
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Save
        </button> */}
      </div>
    </div>
  );
};

export default AnswerForm;
