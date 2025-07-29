import React, { useState, useEffect } from 'react';
import MoviesApi from './componant/MoviesApi';
import Loader from './componant/Loader';
import './App.css';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOutLoader(true); // start fade out
    }, 1500);

    const hideLoaderTimer = setTimeout(() => {
      setShowLoader(false); // remove loader from DOM
    }, 1800); // match the duration of the fade-out CSS animation

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className={`loader-wrapper ${fadeOutLoader ? 'fade-out' : ''}`}>
          <Loader />
        </div>
      )}

      {!showLoader && (
        <div className="fade-in">
          <MoviesApi />
        </div>
      )}
    </>
  );
};

export default App;
