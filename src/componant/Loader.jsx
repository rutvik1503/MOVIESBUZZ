import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const loadingText = "Movies Buzz";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < loadingText.length) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 100);

      return () => clearInterval(interval); // Clear on each update
    }
  }, [count]);

  return (
    <div className='loaderSection'>
      <p id='loaderText'>{loadingText.slice(0, count)}</p>
    </div>
  );
};

export default Loader;
