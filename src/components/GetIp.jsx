import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const GetIp = () => {
  const [showIp, setShowIp] = useState(false);
  const [data, setData] = useState('');
  const { dark } = useContext(ThemeContext);
  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((resp) => {
      setData(resp.data.ip);
    });
  }, []);
  const handleChange = () => {
    setShowIp(!showIp);
  };

  if (data.length === 0) {
    return (
      <p
        className={
          dark
            ? 'w-full text-center h-full bg-gradient-to-b from-gray-800 to-gray-700 text-white  pt-20 text-2xl'
            : 'w-full text-center h-full bg-gradient-to-b from-blue-100 to-blue-200 text-black  pt-20 text-2xl'
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
          ? 'w-full text-center h-full bg-gradient-to-b from-gray-800 to-gray-700 text-white  pt-20'
          : 'w-full text-center h-full bg-gradient-to-b from-blue-100 to-blue-200 text-black  pt-20'
      }
    >
      <h2 className='mb-10 underline'>Show My IP</h2>
      {showIp && <div className='text-xl'>{data}</div>}
      <button
        onClick={handleChange}
        className={
          dark
            ? 'rounded-l border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105 hover:bg-black hover:text-white'
            : 'rounded-xl border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3 hover:scale-105 hover:bg-white hover:text-black'
        }
      >
        Show my IP
      </button>
    </div>
  );
};
