import React from 'react';

import NavBar from './components/navbar';

import Home from './pages/Home';

const App = () => {

  return (
    <div>
      <NavBar />
      <div className="container z-depth-3">
        <Home />
      </div>
    </div>
  )
};

export default App;