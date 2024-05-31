import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionForm from "./QuestionForm";
import { updateQuiz, updateQuizaddQuiz } from "../redux/reducers/quizReducer";

const QuestionList = ({ quiz }) => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);

  const handleAddQuestion = () => {
    const newQuestion =    {
      answer_id: null,
      answers: [
        {
          id: null,
          is_true: false,
          text: "",
        },
      ],
      feedback_false: "",
      feedback_true: "",
      id: null,
      text: "",
    };
    const newQuestions = [...(newQuizzes.questions_answers || []), newQuestion];
   
    const lastQuiz = newQuizzes;
    const updatedQuizData = { ...lastQuiz, questions_answers: newQuestions };
    dispatch(updateQuizaddQuiz(updatedQuizData));
    // dispatch(updateQuiz({ }));
  };    
  console.log(quizzes);


  return (
    <div className="container mt-3 bg-light  ">
      <h3>Questions</h3>
      <button className="btn btn-primary mb-3" onClick={handleAddQuestion}>
        Add Question
      </button>
      <div className="row gap-2  ">
        {newQuizzes?.questions_answers?.map((question , index) => (
          <div key={question.id} className="col-5 border border-1  border-dark">
            <h3>{question.text}</h3>

            <QuestionForm quizId={quiz.id} question={question} questionIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
