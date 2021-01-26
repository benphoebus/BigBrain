import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreateQuiz from '../components/CreateQuiz';

function CreateNewQuizScreen() {
  return (
    <>
      <Navbar />
      <CreateQuiz />
      <Footer />
    </>
  );
}

export default CreateNewQuizScreen;
