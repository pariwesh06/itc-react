import { Counter } from './components/counter/counter';
import { Userform } from './components/userform/userform';

function App() {  //Container Component
  console.log(this);
  return (   //JSX expression
    <div>
      <Userform></Userform>
      <Counter count='10'></Counter>
    </div>
  );
}

export default App;
