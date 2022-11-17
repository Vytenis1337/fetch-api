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

  return (
    <div
      className={
        dark
          ? 'w-full text-center h-full bg-gradient-to-b from-gray-700 to-gray-600 text-white  pt-20 flex flex-col items-center justify-center'
          : 'w-full text-center h-full bg-gradient-to-b from-blue-200 to-blue-300 text-black  pt-20 flex flex-col items-center justify-center'
      }
    >
      <h2 className='py-5 underline'>Dog Pictures</h2>

      {error && <p className='mt-5 md:mt-10 text-2xl'>There was an error!</p>}
      <img className='w-96 h-96' src={data?.message} alt='dog' />
      <button
        onClick={handleChange}
        className={
          dark
            ? 'rounded-l border-white bg-gradient-to-r from-purple-800 to-blue-700 text-lg text-white my-2 p-2 lg:p-3 hover:scale-105 hover:bg-black hover:text-white'
            : 'rounded-xl border-black bg-gradient-to-r from-red-400 to-yellow-400 text-lg text-black my-2 p-2 lg:p-3  hover:scale-105 hover:bg-white hover:text-black'
        }
      >
        Show Another Dog
      </button>
    </div>
  );
};
