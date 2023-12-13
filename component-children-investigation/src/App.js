import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Accordion from './Accordion';
import AccordionPanel from './AccordionPanel';

function App() {

  let styles = {
    border: "5px solid black"
  }
  return (
    <div>
      <h1>Component Children Investigation</h1>


      <Accordion>
        <AccordionPanel 
          title="Panel 1">
          <p>lorem</p>
        </AccordionPanel>
        <AccordionPanel title="Panel 2" >
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </AccordionPanel>
        <AccordionPanel title="Panel 3">
          <img style={{ border: "5px solid red"}} src="https://picsum.photos/id/1/300/300" width="200" height="200"/>
        </AccordionPanel>
        <AccordionPanel title="Panel 4">
          <div>
            some other content
          </div>
        </AccordionPanel>
        <AccordionPanel title="Panel 5">
          <div>
            <h2>Other Content</h2>
            <p>more content</p>
            <p>more content</p>
            <p>more content</p>
            <p>more content</p>
          </div>
        </AccordionPanel>
      </Accordion>

      <hr/>
      <Accordion>
        <AccordionPanel title="News 1">
          <h3>News Item 1</h3>
          <p>some news item</p>
        </AccordionPanel>
        <AccordionPanel title="News 2">
          <h3>News Item 2</h3>
          <p>some other news item</p>
        </AccordionPanel>
        <AccordionPanel title="News 3">
          <h3>News Item 3</h3>
          <p>yet another news item</p>
        </AccordionPanel>
      </Accordion>


{/*
      <Wrapper>
        <h1>Content in the wrapper??</h1>
        <p>How does this work?</p>
      </Wrapper>

      <Wrapper>
        <img style={{ border: "5px solid red"}} src="https://picsum.photos/id/1/300/300" width="200" height="200"/>
      </Wrapper>

      <Wrapper>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </Wrapper>
  */}

    </div>
  );
}

export default App;
