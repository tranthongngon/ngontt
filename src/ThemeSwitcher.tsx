import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme ,toggleTheme } = useTheme();

  return (
    <button className={`btn-switcher ${theme}`} onClick={toggleTheme}>
      <span className='btn-switcher--dot'></span>
    </button>
  );
};

export default ThemeSwitcher;
