import { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [darkMode, setDarkMode] = useState(false);
  const [dimensions, setDimensions] = useState([50, 150]);
  const [area, setArea] = useState(0);

  // store the result of the calcArea function
  // only rerun the calculation if the dimensions change!
  // used to improve performance.
  useEffect(()=>{

    setArea(calcArea(dimensions[0], dimensions[1]));
  }, [dimensions]);

  const styles = {
    color: darkMode ? 'white' : 'black', 
    backgroundColor: darkMode ? 'black' : 'white',
    height: "100vh"
  };

  const calcArea = (width, height) => {

    console.log("recalculating area...");
    // artificially slow down this function
    const n = [...Array(10000000).keys()].reduce((p, c)=>p+c);
    return width * height;
  }

  return (
    <div style={styles}>
      <input 
        type="checkbox" 
        checked={darkMode} 
        onChange={()=>{ setDarkMode(prev=>!prev) }}
      /> 
      { darkMode ? "Dark" : "Light" }
      <h1>Use Effect Hook</h1>
      <input 
        type="range" 
        min="10" 
        max="300"
        value={ dimensions[0]}  
        onChange={(evt) => {
          setDimensions([evt.target.value, dimensions[1]]);
        }}
        
      />{ dimensions[0] }
      <input 
        type="range" 
        min="10" 
        max="300"
        value={ dimensions[1]}  
        onChange={(evt) => {
          setDimensions([dimensions[0], evt.target.value]);
        }}
        
      />{ dimensions[1] }

        <div>
          { area }
        </div>

      <div className="box" style={{ 
        width: `${dimensions[0]}px`, 
        height: `${dimensions[1]}px`
      }}>
        box
      </div>





    </div>
  );
}

export default App;
