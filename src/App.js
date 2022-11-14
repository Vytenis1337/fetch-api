import { Bored } from './components/Bored';
import { GetIp } from './components/GetIp';
import { Quate } from './components/Quate';
import { Picture } from './components/Picture';
import { createContext } from 'react';
import { useState } from 'react';
import { Theme } from './components/Theme';

export const ThemeContext = createContext(null);

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <Theme />
      <Bored />
      <Quate />
      <GetIp />
      <Picture />
    </ThemeContext.Provider>
  );
}

export default App;
