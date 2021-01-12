import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
// import PropTypes from 'prop-types';

function QuizListCard() {
  const [data, setData] = useState({ quiz: [] });

  // When page refreshes get all quizzes
  useEffect(() => {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line
    console.log(token);
    const result = axios({
      method: 'get',
      url: 'http://127.0.0.1:5005/admin/quiz',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // eslint-disable-next-line
      console.log(response);
      const { quizzes } = response.data;
      // eslint-disable-next-line
      console.log(quizzes);
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
    setData(result.data);
  }, []);

  // eslint-disable-next-line
  console.log(data)

  return (
    <>
      {/* {data.quiz.forEach((quiz) => { */}
      <Card className="my-3 p-3 rounded">
        {/* <Card.Img src={quiz.thumbnail} variant="top" /> */}
        <Card.Body>
          <Card.Title as="div">
            {/* <strong>{quiz.name}</strong> */}
          </Card.Title>
          <Card.Text as="span">
            {/* {quiz.createdAt} */}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* })} */}
    </>
  );
}

export default QuizListCard;
