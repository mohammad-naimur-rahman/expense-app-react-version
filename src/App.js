import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputFeilds from './components/InputFeilds';
import ShowBalance from './components/ShowBalance';
import Tables from './components/Tables';

export const AppContext = createContext();

function App() {
  const [inputs, setinputs] = useState([]);

  return (
    <div className='container-fluid'>
      <AppContext.Provider value={[inputs, setinputs]}>
        <Header />
        <ShowBalance />
        <InputFeilds />
        <Tables />
      </AppContext.Provider>
    </div>
  );
}

export default App;
