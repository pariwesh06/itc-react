import logo from './logo.svg';
import './App.css';
import Textfield from './components/Textfield';
import MyButton from './components/mybutton/mybutton';

function App() {  //Component
  return (   //JSX expression
    <div className="App">
      <header className="App-header">
        <Textfield bgColor='red' initialText='Pariwesh'></Textfield>
        <Textfield bgColor='yellow'></Textfield>
        <MyButton text='Save'>  </MyButton>
        <MyButton text='Cancel'>  </MyButton>

      </header>
    </div>
  );
}

export default App;
