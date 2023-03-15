import './App.css';
import './MyButton';
import MyButton from './MyButton';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <MyButton />
      </header>
    </div>
  );
}

export default App;
