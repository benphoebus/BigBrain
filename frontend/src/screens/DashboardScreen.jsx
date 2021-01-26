import React from 'react';
import Navbar from '../components/Navbar';
import Admin from '../components/AdminPage';
import Footer from '../components/Footer';
// import CreateQuizButton from '../components/CreateQuizButton';

function DashboardScreen() {
  return (
    <>
      <Navbar />
      {/* <CreateQuizButton /> */}
      <Admin />
      <Footer />
    </>
  );
}

export default DashboardScreen;
