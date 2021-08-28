import React from 'react';
import { useState } from 'react';

import { HamburgerSpring } from 'react-animated-burgers';

export const MobileNavigation: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='navbar-mobile'>
      <div className='hamburger'>
        <HamburgerSpring
          isActive={isActive}
          toggleButton={toggleButton}
          barColor={'#202836'}
          buttonWidth={24}
        />
      </div>
      <ul className={isActive ? 'navbar-mobile-links open' : 'navbar-mobile-links'}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Skills</a>
        </li>

        <li>
          <a href='#'>Projects</a>
        </li>

        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
