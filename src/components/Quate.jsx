import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const Quate = () => {
  const [quates, setQuates] = useState([]);

  const { dark } = useContext(ThemeContext);
  function loadQuate() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2de3ea0480mshb16fe76c7c5843cp16e8a1jsnb40fed717df3',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then((response) => response.json())
      .then((data) => {
        setQuates([data]);
      });
  }

  useEffect(() => {
    loadQuate();
  }, []);

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-blue-700 to-gray-800 text-white  pt-20'
          : 'w-full text-center h-full bg-white text-black  pt-20'
      }
    >
      <h1>Random Quates</h1>
      <ul className='mt-5 md:mt-10'>
        {quates.map((quate) => {
          return (
            <li className='text-lg' key={quate.id}>
              {quate.content}
            </li>
          );
        })}
      </ul>
      <button onClick={loadQuate} className='border-black text-lg my-2'>
        Give another one
      </button>
    </div>
  );
};
