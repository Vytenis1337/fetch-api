import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ReactSwitch from 'react-switch';

export const Theme = () => {
  const { toggleTheme, dark } = useContext(ThemeContext);
  return (
    <div
      className={
        dark
          ? 'w-full h-full bg-black text-white flex flex-col justify-center items-center p-5'
          : 'w-full h-full bg-gradient-to-b from-green-300 to-green-200 text-black flex flex-col justify-center items-center p-5'
      }
    >
      <label className='text-lg p-1'>
        {' '}
        {dark ? 'Dark Theme' : 'Light Theme'}
      </label>
      <ReactSwitch
        onChange={toggleTheme}
        checked={dark}
        offHandleColor={'#000'}
        offColor={'#b6c0b3'}
        borderRadius={20}
      />
      <h1 className='text-center py-2 md:py-4 lg:py-8'>Fetcher-API</h1>
      <p className='text-left lg:mx-96 text-xl'>
        This Fetcher contains variuos API calls which were made with few
        different fetching options. Technologies used for this project: React
        Fetch, Axios and useSWR hook.
        <br /> There is also a mysterious switch to change Light/Dark Theme...
        Lets find and try it!
      </p>
    </div>
  );
};
