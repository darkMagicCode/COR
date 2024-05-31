// quizReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [
    {
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
    },
  ],
  newQuizzes: {},
};

const quizReducer = createSlice({
  name: "quizReducer",
  initialState,
  reducers: {
    comaddQuiz: (state, action) => {
      state.quizzes.push(state.newQuizzes);
      console.log(state.quizzes);
    },
    addQuiz: (state, action) => {
      state.newQuizzes = action.payload;
    },
    updateQuizaddQuiz: (state, action) => {
      state.newQuizzes = action.payload;
    },
    updateQuiz: (state, action) => {
      const { index, updatedQuiz } = action.payload;
      if (state.quizzes[index]) {
        state.quizzes[index] = updatedQuiz;
      } else {
        console.error("Quiz not found");
      }
    },
    deleteQuiz: (state, action) => {
      const index = action.payload;
      if (state.quizzes[index]) {
        state.quizzes.splice(index, 1);
      } else {
        console.error("Quiz not found");
      }
    },
    deleteAllQuizzes: (state) => {
      state.quizzes = [];
    },
  },
});

export const {
  addQuiz,
  updateQuizaddQuiz,
  updateQuiz,
  deleteQuiz,
  deleteAllQuizzes,
  comaddQuiz,
} = quizReducer.actions;
export default quizReducer.reducer;
