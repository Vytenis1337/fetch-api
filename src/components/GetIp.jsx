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
  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-gray-800 to-purple-700 text-white  pt-20'
          : 'w-full text-center h-full bg-white text-black  pt-20'
      }
    >
      <h1 className='mb-10'>Whats My IP</h1>
      {showIp && <div className='text-lg'>{data}</div>}
      <button onClick={handleChange} className='text-lg mb-5'>
        Show my IP
      </button>
    </div>
  );
};
