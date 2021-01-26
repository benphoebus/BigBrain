import React from 'react';
import axios from 'axios';

function CreateQuiz() {
//   const [customMessage, setCustomMessage] = useState(false);
//   const [uploadConfirmed, setUploadConfirmed] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [uploadFail, setUploadFail] = useState(false);
  const GetQuizIDFromURL = () => {
    const url = [];
    const URLString = (window.location.pathname.split('/'));
    URLString.forEach((urlParams) => {
      url.push(urlParams);
    });
    const quizID = URLString[URLString.length - 1];
    return quizID;
  };

  const uploadThumbnail = (event) => {
    const quizID = GetQuizIDFromURL();
    const FR = new FileReader();
    FR.readAsDataURL(event);
    FR.onload = (e) => {
      const image = e.target.result;
      const token = localStorage.getItem('token');
      axios({
        method: 'put',
        url: `http://localhost:5005/admin/quiz/${quizID}`,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        data: { thumbnail: image },
      }).then(() => {
        // setCustomMessage('Successful - Thank you for uploading a cool thumbnail for this quiz');
        // setUploadConfirmed(!false);
      }).catch(() => {
        // setErrorMessage('There was an error uploading your thumbnail, please try again later');
        // setUploadFail(!false);
      });
    };
  };

  return (
    <>
      <div>
        Create Quiz Page
      </div>
      <input
        type="file"
        name="thumbnail"
        id="thumbnail"
        onChange={(event) => {
          uploadThumbnail(event.currentTarget.files[0]);
        }}
      />
    </>
  );
}

export default CreateQuiz;
