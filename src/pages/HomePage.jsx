import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { updateQuiz } from "../redux/actions/quizActions";
import QuizForm from "../components/QuizForm";
import { addQuiz, deleteQuiz, updateQuiz } from "../redux/reducers/quizReducer";

const HomePage = () => {
  const initialQuiz = {
    created: "2020-09-09 09:26:39",
    description: "Quiz 1",
    id: 29,
    modified: "2020-09-09 09:26:39",
    questions_answers: [
      {
        answer_id: null,
        answers: [
          {
            id: 122,
            is_true: false,
            text: "question 1 answer 1 false",
          },
          {
            id: 123,
            is_true: false,
            text: "question 1 answer 2 false",
          },
          {
            id: 124,
            is_true: true,
            text: "question 1 answer 3 true",
          },
          {
            id: 125,
            is_true: false,
            text: "question 1 answer 4 false",
          },
        ],
        feedback_false: "question 1 false feedback",
        feedback_true: "question 1 true feedback",
        id: 53,
        text: "question 1 text",
      },
      {
        answer_id: null,
        answers: [
          {
            id: 126,
            is_true: true,
            text: "question 2 answer 1 true",
          },
          {
            id: 127,
            is_true: false,
            text: "question 2 answer 2 false",
          },
        ],
        feedback_false: "question 2 false feedback",
        feedback_true: "question 2 true feedback",
        id: 54,
        text: "question 2 text",
      },
      {
        answer_id: null,
        answers: [
          {
            id: 128,
            is_true: false,
            text: "question 3 answer 1 false",
          },
          {
            id: 129,
            is_true: true,
            text: "question 3 answer 2 true",
          },
          {
            id: 130,
            is_true: false,
            text: "question 3 answer 3 false",
          },
        ],
        feedback_false: "question 3 false feedback",
        feedback_true: "question 3 true feedback",
        id: 55,
        text: "question 3 text",
      },
    ],
    score: null,
    title: "quiz title",
    url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
  };
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const newQuizzes = useSelector((state) => state.quizReducer.newQuizzes);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleAddQuiz = (quiz, index) => {
    console.log(quiz + " " + index);
    dispatch(updateQuiz({ index: index, updatedQuiz: newQuizzes }));
  };
  console.log(newQuizzes);
  return (
    <>
      {quizzes?.map((quiz, indexxx) => (
        <div
          key={quiz.id}
          className=" container col-12 border  p-2 shadow shadow-sm"
        >
          <h3 className="text-center">{quiz.title}</h3>
          <Container>
            <div className="text-center lead">{quiz.description}</div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Image</th>
                  <th>Answers</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {quiz.questions_answers.map((question, index) => (
                  <tr key={index}>
                    <td>{question.text}</td>
                    <td>
                      <img
                        src={question.image}
                        alt={question.text}
                        style={{ maxWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <ul>
                        {question.answers.map((answer, index) => (
                          <li key={index}>{answer.text}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          dispatch(addQuiz(quiz));
                          setShowModal(true);
                        }}
                        variant="primary"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {showModal && (
              <div
                className="modal"
                tabIndex="-1"
                role="dialog"
                style={{ display: "block" }}
              >
                <div className="modal-dialog modal-lg" role="document">
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
                        <div key={quiz.id} className="col-12">
                          <h3>{quiz.title}</h3>
                          <QuizForm quiz={newQuizzes} />
                        </div>
                        {/* ))} */}
                      </div>{" "}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                         { dispatch(
                            deleteQuiz(indexxx)
                          )
                          setShowModal(false)}
                        }
                      >
                        delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        onClick={() => handleAddQuiz(quiz, indexxx)}
                        className="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      ))}
    </>
  );
};

export default HomePage;
