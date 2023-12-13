import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  console.log("App() called ");
  let [count, setCount] = useState(0);
  let [darkMode, setDarkMode] = useState(true);
  let [name, setName] = useState("");

  let [member, setMember] = useState({
    id: 1, 
    name: "Alice", 
    email: "alice@gmail.com", 
    active: true
  });

  const onClick = () => {
    console.log(`Count: ${ count }`);
    setCount(count + 1);
  }
  let styles = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "black" : "white",
    height: "100vh"
  }
  return (
    <div style={ styles }>
      <input 
        type="checkbox" 
        checked={ darkMode }
        onChange={() => setDarkMode(!darkMode)}
      />
      
      { darkMode ? "dark mode" : "light mode" }

      <h1>State Investigation</h1>

      { JSON.stringify(member) }<br/>


      <input type="checkbox" checked={ member.active } onChange={(evt) => {

        // member.active = !member.active
        // setMember(member)  this doesn't work

        //let updatedMember = { ...member }; // copies the object
        //updatedMember.active = !updatedMember.active;
        //setMember(updatedMember); // this does work

        // preferred option:

        setMember((prev) => {
          console.log(prev);
          return {
            ...prev, 
            active: !prev.active
          }
        });
      }}/>


      <hr/>




      <input value={ name } onChange = {evt => setName(evt.target.value) }/>

      <button onClick = {() => { setName("") }}>Clear</button><br/>

      { name }

      <br/>




      { count }
      <button onClick={ onClick }>+</button>

      <button onClick={ () => setCount(count -1) }>-</button>

      {/* <button onClick={ setCount(count+1) }>+</button> */}

    </div>
  );
}

export default App;
