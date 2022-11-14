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
          ? 'w-full text-center h-full bg-gradient-to-b from-purple-700 to-black text-white  pt-20 flex flex-col items-center justify-center'
          : 'w-full text-center h-full bg-white text-black  pt-20 flex flex-col items-center justify-center'
      }
    >
      <h1 className='py-5'>Dogs</h1>
      <img className='w-1/5 ' src={data.message} alt='dog' />
      <button onClick={handleChange} className='text-lg my-5'>
        What could it be
      </button>
    </div>
  );
};
