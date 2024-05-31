import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addAnswer } from '../redux/actions/quizActions';
import AnswerForm from "./AnswerForm";
import { updateQuiz, updateQuizaddQuiz } from "../redux/reducers/quizReducer";

const AnswerList = ({ quizId, question, index, questionIndex }) => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizReducer.quizzes[0]);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);

  const handleAddAnswer = () => {
    const newQuestion = {
      id: null,
      is_true: false,
      text: "",
    };



    const updatedQuestionsAnswers = {
      ...newQuizzes,
      questions_answers: newQuizzes.questions_answers.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              answers: [...question.answers, newQuestion],
            }
          : question
      ),
    };
    console.log(updatedQuestionsAnswers);
    dispatch(updateQuizaddQuiz  (updatedQuestionsAnswers));
  };
  return (
    <div className=" mt-3 py-2 bg-light">
      <h5>Answers</h5>
      <button className="btn btn-primary mb-3" onClick={handleAddAnswer}>
        Add Answer
      </button>
      <ul className="">
        {question.answers.map((answer, index) => (
          <li key={index} className="-item">
            <h5>{answer.text}</h5>

            <AnswerForm
              quizId={quizId}
              questionId={question.id}
              answer={answer}
              answerIndex={index}
              questionIndex={questionIndex}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;
