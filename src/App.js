import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Scrip from './components/Scrip';

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>

      <div className='mx-28'>
        <Scrip />
        <Table />      
      </div>
        
    </div>
  );
}

export default App;
