import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizForm from "./QuizForm";
import { addQuiz, comaddQuiz } from "../redux/reducers/quizReducer";

const QuizList = () => {
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const initialQuiz = {
    created: "",
    description: "",
    id: null,
    modified: "",
    questions_answers: [
      {
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
      },
    ],
    score: null,
    title: "",
    url: "",
  };

  const handleAddQuiz = () => {
    dispatch(addQuiz(initialQuiz));
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h1>Quiz List</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddQuiz}>
        Add Quiz
      </button>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-lg " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-light">
                <div className="row gap-4">
                  {/* {quizzes.map((quiz) => ( */}
                  <div className="col-12">
                    {/* <h3>{quiz.title}</h3> */}
                    <QuizForm quiz={initialQuiz} />
                  </div>
                  {/* ))} */}
                </div>{" "}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <div
                  onClick={() => dispatch(comaddQuiz())}
                  className="btn btn-primary"
                >
                  Save changes
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizList;
