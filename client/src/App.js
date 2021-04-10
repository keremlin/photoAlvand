import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './font.css'

import Header from './header/header'

function App() {
  return (
    <div className="App">
       <Header></Header>
      <section>
        <span>section 1</span>
      </section>
      <section>
        <span>section 2</span>
      </section>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
}

export default App;
