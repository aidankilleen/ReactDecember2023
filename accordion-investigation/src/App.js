import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

function App() {

  const accordionItems = [
    {id:1, title:"Item 1", text:"Accordion Item 1", expanded:true },
    {id:2, title:"Item 2", text:"Accordion Item 2", expanded:false },
    {id:3, title:"Item 3", text:"Accordion Item 3", expanded:false },
    {id:4, title:"Item 4", text:"Accordion Item 4", expanded:false },
    {id:5, title:"Item 5", text:"Accordion Item 5", expanded:false }
  ];

  return (
    <div>
      <h1>Accordion Investigation</h1>

      <Accordion items={ accordionItems }/>

    </div>
  );
}

export default App;
