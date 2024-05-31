import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import {
  comaddQuiz,
  updateQuiz,
  updateQuizaddQuiz,
} from "../redux/reducers/quizReducer";

const QuizForm = ({ quiz }) => {
  const [title2, setTitle] = useState(quiz.title);
  const [description2, setDescription] = useState(quiz.description);
  const [url2, setUrl] = useState(quiz.url);
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);

  const handleChange = ({ title, description, url }) => {

    const lastQuiz = newQuizzes;
    const updatedQuizData = {
      ...lastQuiz,
      title: title2,
      description: description2,
      url: url2,
    };
    dispatch(updateQuizaddQuiz(updatedQuizData));
  };
  return (
    <div className="container mt-3 bg-light">
      {/* <h2>Edit Quiz</h2> */}
      <div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title2}
            onChange={(e) => {
              setTitle(e.target.value);
              handleChange({ title: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description2}
            onChange={(e) => {
              setDescription(e.target.value);
              handleChange({ description: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            // value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              handleChange({ url: e.target.value });
            }}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Save
        </button> */}
      </div>
      <QuestionList quiz={quiz} />
    </div>
  );
};

export default QuizForm;
