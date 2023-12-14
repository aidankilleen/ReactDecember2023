import { createContext, useState } from 'react';
import './App.css';
import Information from './Information';
import Documentation from './Documentation';

export const DarkModeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const styles = {
    color: darkMode ? "white" : "black", 
    backgroundColor: darkMode ? "black" : "white",
    height: "100vh"
  };

  return (
    <DarkModeContext.Provider
      value = {{
        value: darkMode, 
        setDarkMode: setDarkMode
      }}
    >
      <div style={ styles }>

        <input 
          type="checkbox"
          checked={ darkMode }
          onChange={() => setDarkMode(current => !current) }
          />{ darkMode ? "Dark" : "Light" }
        <h1>useContext Investigation</h1>

        <Information 
          darkMode={darkMode}/>

        <Documentation/>

      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
