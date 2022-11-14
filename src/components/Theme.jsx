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
          ? 'w-full h-full bg-black text-white flex justify-center items-center p-5'
          : 'w-full h-full bg-white text-black flex justify-center items-center p-5'
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
    </div>
  );
};
