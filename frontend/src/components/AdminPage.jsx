import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizListCard from './QuizListCard';

function AdminPage() {
  const [quizList, setQuizList] = useState([]);
  const [noQuizzes, setNoQuizzes] = useState(false);

  // When page refreshes get all quizzes
  useEffect(() => {
    const listOfQuizzes = [];
    const token = localStorage.getItem('token');
    // eslint-disable-next-line
    console.log(' my token:: ', token);
    const result = axios({
      method: 'get',
      url: 'http://127.0.0.1:5005/admin/quiz',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.data.quizzes.length === 0) {
        setNoQuizzes(!false);
      } else {
        setNoQuizzes(false);
        const { quizzes } = response.data;
        // eslint-disable-next-line
        console.log(quizzes);
        for (let i = 0; i < response.data.quizzes.length; i += 1) {
          listOfQuizzes[i] = response.data.quizzes[i];
        }
        setQuizList(listOfQuizzes);
      }
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
    // eslint-disable-next-line
    console.log(result);
  }, []);

  return (
    <>
      <h3>Welcome to the Dashboard.</h3>
      {noQuizzes ? (
        <>
          <h3>Welcome to the Dashboard.</h3>
          <h3>Create your own quiz</h3>
        </>
      ) : (
        null
      )}
      {quizList.map((quiz) => (
        <QuizListCard
          quiz={quiz}
        />
      ))}
    </>
  );
}

export default AdminPage;
