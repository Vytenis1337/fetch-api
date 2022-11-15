import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const Bored = () => {
  const { dark } = useContext(ThemeContext);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function loadActivity() {
    setIsLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then((data) => {
        setActivities([data]);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadActivity();
  }, []);

  if (activities.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-black to-gray-700 text-white  pt-20'
          : 'w-full text-center h-full bg-gradient-to-b from-green-300 to-yellow-300 text-black  pt-20'
      }
    >
      <h2 className='underline'>What Should I do</h2>
      <ul className='mt-5 md:mt-10'>
        {activities.map((activity) => {
          return (
            <li key={activity.key} className='text-lg'>
              {activity.activity}
            </li>
          );
        })}
      </ul>
      <button
        disabled={isLoading}
        onClick={loadActivity}
        className={
          dark
            ? 'border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105 hover:bg-black hover:text-white'
            : 'border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3 hover:scale-105 hover:border-black  '
        }
      >
        Give another one
      </button>
    </div>
  );
};
