import { Accordion } from "react-bootstrap";

const ContactPage = () => {

    return (
        <div>
            <h1>Contact Page</h1>

            


      <button className="btn btn-primary">
        Press Me
      </button>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Item 1</Accordion.Header>
          <Accordion.Body>This is item 1</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Item 2</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Item 3</Accordion.Header>
          <Accordion.Body>
            <img src="https://picsum.photos/400/300" width="300" height="400"/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    )
}

export default ContactPage;
