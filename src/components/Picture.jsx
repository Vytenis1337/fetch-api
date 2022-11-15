import React from 'react';
import useSWR, { mutate } from 'swr';

import { useContext } from 'react';
import { ThemeContext } from '../App';

export const Picture = () => {
  const { dark } = useContext(ThemeContext);
  const fetcher = (...args) => fetch(...args).then((resp) => resp.json());
  const { data, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    fetcher
  );
  const handleChange = () => {
    mutate('https://dog.ceo/api/breeds/image/random');
  };

  if (error) {
    return <h1> There was an error!</h1>;
  }

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-purple-900 to-purple-700 text-white  pt-20 flex flex-col items-center justify-center'
          : 'w-full text-center h-full bg-gradient-to-b from-orange-200 to-blue-200 text-black  pt-20 flex flex-col items-center justify-center'
      }
    >
      <h2 className='py-5 underline'>Dogs</h2>
      <img className='w-96 h-96' src={data?.message} alt='dog' />
      <button
        onClick={handleChange}
        className={
          dark
            ? 'border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105 hover:bg-black hover:text-white'
            : 'border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3  hover:scale-105 hover:bg-white hover:text-black'
        }
      >
        What could it be
      </button>
    </div>
  );
};
