import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const Activity = () => {
  const { dark } = useContext(ThemeContext);
  const [activities, setActivities] = useState([]);

  function loadActivity() {
    fetch('https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then((data) => {
        setActivities([data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    loadActivity();
  }, []);

  if (activities.length === 0) {
    return (
      <p
        className={
          dark
            ? 'w-full text-center h-full bg-gradient-to-b from-black to-gray-900 text-white  pt-20 text-2xl'
            : 'w-full text-center h-full bg-gradient-to-b from-green-200 to-green-100 text-black  pt-20 text-2xl'
        }
      >
        Loading...
      </p>
    );
  }

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-black to-gray-900 text-white  pt-20'
          : 'w-full text-center h-full bg-gradient-to-b from-green-200 to-green-100 text-black  pt-20'
      }
    >
      <h2 className='underline'>What Activity Should I try</h2>
      <ul className='mt-5 md:mt-10'>
        {activities.map((activity) => {
          return (
            <li key={activity.key} className='text-xl'>
              {activity.activity}
            </li>
          );
        })}
      </ul>
      <button
        onClick={loadActivity}
        className={
          dark
            ? 'rounded-l border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105 hover:bg-black hover:text-white'
            : 'rounded-xl border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3 hover:scale-105 hover:border-black  '
        }
      >
        Give another
      </button>
    </div>
  );
};
