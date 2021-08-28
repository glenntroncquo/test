import React from 'react';

import { MobileNavigation } from './components/MobileNavigation';
import { Navigation } from './components/Navigation';

import './styles/screen.scss';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <Navigation />
        <MobileNavigation />
      </header>

      <div className='body'>
        <section className='intro'>
          <div className='intro-info'>
            <h2>Hi, I'm Glenn Troncquo</h2>
            <p>
              A passionate full stack developer student based in Belgium,
              East-Flanders 😀
            </p>

            <button>Click Me</button>
          </div>

          <div className='intro-illustrations'>
            {/* <img src='glenn.svg' alt='Kiwi standing on oval' /> */}
          </div>
        </section>

        {/* <section className='banner'></section> */}
      </div>
    </div>
  );
}

export default App;
