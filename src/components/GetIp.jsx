import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

export const GetIp = () => {
  const { dark } = useContext(ThemeContext);
  const [showIp, setShowIp] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.ipify.org?format=json')
      .then((resp) => {
        setData(resp.data.ip);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const handleChange = () => {
    setShowIp(!showIp);
  };

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-gray-800 to-gray-700 text-white  pt-20'
          : 'w-full text-center h-full bg-gradient-to-b from-blue-100 to-blue-200 text-black  pt-20'
      }
    >
      <h2 className='mb-10 underline'>Show My IP</h2>

      {error && <p className='mt-5 md:mt-10 text-2xl'>There was an error!</p>}
      {loading && <p className={'text-2xl mt-5 md:mt-10'}>Loading...</p>}
      {showIp && <div className='text-xl'>{data}</div>}
      {data && !error && (
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
      )}
    </div>
  );
};
