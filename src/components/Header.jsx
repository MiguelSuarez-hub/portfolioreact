import React from 'react';

import '../css/header.css';

function Header({theme, setTheme}) {
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark?'light':'dark');
  };

  return (
    <header className={theme}>
      <section className="selectorContainer">
        <button className='selectorContainerSwitchTheme' onClick={handleThemeChange}>
          <i className='bx bx-sun bx-sm'></i><i className='bx bx-moon bx-sm'></i>
        </button>
      </section>
    </header>
  );
}

export default Header