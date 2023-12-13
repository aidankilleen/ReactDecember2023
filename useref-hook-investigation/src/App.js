import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [name, setName] = useState("Aidan");

  const countryRef = useRef();

  const onSubmit = (evt) => {

    evt.preventDefault();
    console.log(name);
    console.log(countryRef.current.value);
  }

  return (
    <div>
      <h1>useRef Hook Investigation</h1>

      <button onClick={() => { 
        
          countryRef.current.focus();
        }
      }>Focus on Country</button>

      <form onSubmit={ onSubmit }>

        <input name="name" type="text" value={ name } onChange={evt => setName(evt.target.value)}/><br/>

        <input ref={ countryRef }/><br/>


        <input type="submit" value="submit"/>
      </form>

      <hr/>
      { name }
    </div>
  );
}

export default App;
