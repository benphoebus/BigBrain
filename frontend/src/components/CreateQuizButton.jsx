import React from 'react';
import axios from 'axios';

function CreateQuizButton() {
  const HandleClick = () => {
    const token = localStorage.getItem('token');
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5005/admin/quiz/new',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // eslint-disable-next-line
      console.log(response);
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
  };
  return (
    <>
      <button
        type="button"
        className="create-quiz-button"
        onClick={HandleClick()}
      >
        Create A New Quiz
      </button>
    </>
  );
}

export default CreateQuizButton;
