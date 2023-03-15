import './App.css';
import './MyButton';
import MyButton from './MyButton';
import Greeting from './Greeting';
import Skills from './Skills';
import TotalClicks from './TotalClicks';
import { useState } from 'react';

function App() {
  const [totalCount, setTotalCount] = useState(0);

  function updateTotalCount() {
    setTotalCount(totalCount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <Skills />
        <TotalClicks totalCount={totalCount} />
        <MyButton updateTotalCount={updateTotalCount} />
        <MyButton updateTotalCount={updateTotalCount} />
      </header>
    </div>
  );
}

export default App;
