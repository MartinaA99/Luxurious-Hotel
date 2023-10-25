import React from 'react';
import '../assets/styles/sass/index.scss';
import {Route,Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';
import ErrorPage from '../pages/ErrorPage';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route
            path="/rooms/:slug"
            element={
              <SingleRoom 
                match={undefined}
                getRoom={function (slug: string) {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </>
  );
}

export default App;
