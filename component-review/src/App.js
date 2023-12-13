import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {

  let boxes = [
    { id:1, width: 100, height:50, colour:'lightgreen', title:'Box 1' }, 
    { id:2, width: 70, height:150, colour:'lightblue', title:'Box 2' }, 
    { id:3, width: 150, height:75, colour:'lightcoral', title:'Box 3' },
    { id:4, width: 50, height:175, colour:'yellow', title:'Box 4' } 
  ];

  const onClick = () => {

    alert("clicked");
  }

   return (
    <>
      {/*<button onclick="onClick()">Press me</button>*/}

      <button onClick={ onClick }>Press Me</button>

      <button onClick={ () => { alert ("Clicked") } }>Press Me</button>

      <button onClick={ onClick() } >This doesn't work</button>



      { boxes.map(box => 
          <Box 
            key = { box.id }
            properties = { box }
          />) }
    </>
  );
}

export default App;
