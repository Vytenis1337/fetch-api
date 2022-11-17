import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

export const Quate = () => {
  const { dark } = useContext(ThemeContext);
  const [quates, setQuates] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  function loadQuate() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then((response) => response.json())
      .then((data) => {
        setQuates([data]);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    loadQuate();
  }, []);

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white  pt-20'
          : 'w-full text-center h-full bg-gradient-to-b from-green-100 to-blue-100 text-black  pt-20'
      }
    >
      <h2 className='underline'>Random Quates...</h2>
      {error && <p className='mt-5 md:mt-10 text-2xl'>There was an error!</p>}
      {loading && <p className='mt-5 md:mt-10 text-2xl'>Loading...</p>}
      {quates && !error && (
        <ul className='mt-5 md:mt-10'>
          {quates.map((quate) => {
            return (
              <li className='text-lg text-center lg:mx-60' key={quate.id}>
                {quate?.content}
              </li>
            );
          })}
        </ul>
      )}
      <button
        onClick={loadQuate}
        className={
          dark
            ? 'rounded-l border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105  hover:bg-black hover:text-white'
            : 'rounded-xl border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3 hover:scale-105 hover:bg-white hover:text-black'
        }
      >
        Next One
      </button>
    </div>
  );
};
