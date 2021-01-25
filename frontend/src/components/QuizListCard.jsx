import React from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest craco+eslint or Next.js?
import { Card } from 'react-bootstrap';
// import PropTypes from 'prop-types';

function QuizListCard({ quiz }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={quiz.thumbnail} variant="top" />
      <Card.Body>
        <Card.Title as="div">
          <strong>{quiz.name}</strong>
        </Card.Title>
        <Card.Text as="span">
          {quiz.createdAt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default QuizListCard;
