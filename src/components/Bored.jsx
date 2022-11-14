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
          ? 'w-full text-center h-full bg-gradient-to-b from-purple-900 to-blue-700 text-white  pt-20'
          : 'w-full text-center h-full bg-white text-black  pt-20'
      }
    >
      <h1>What Should I do</h1>
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
        className='border-black text-lg my-2 '
      >
        Give another one
      </button>
    </div>
  );
};
