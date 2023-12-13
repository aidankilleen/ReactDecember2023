import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Message from './MessageV2';

function App() {

  let names = ["Alice", "Bob", "Carol", "Dan"];

  let alice = {
    id: 1, 
    name: "Alice", 
    email: "alice@gmail.com", 
    active: true
  };

  let people = [
    {id:1, name:"Alice", email: "alice@gmail.com", active: true }, 
    {id:2, name:"Bob", email: "bob@gmail.com", active: false }, 
    {id:3, name:"Carol", email: "carol@gmail.com", active: true }, 
    {id:4, name:"Dan", email: "dan@gmail.com", active: true }
  ];

  let messages = [
    { id: 1, title: "Message 1", text: "This is message 1", important: false }, 
    { id: 2, title: "Message 2", text: "This is message 2", important: true }, 
    { id: 3, title: "Message 3", text: "This is message 3", important: false }, 
    { id: 4, title: "Message 4", text: "This is message 4", important: true }, 
  ]

  return (  
    <div className="App">
      <h1>React Training</h1>

      { messages.map(
        message => <Message 
                      key = { message.id }
                      message = { message }/>)   
      }


      { JSON.stringify(messages) }


      <hr/>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          { people.map(person => {
            return (
              <tr key={ person.id }>
                <td>{ person.id } </td>
                <td>{ person.name } </td>
                <td>{ person.email } </td>
                <td>{ person.active } </td>
              </tr>
            )
          })}
        </tbody>
      </table>



      <hr/>
      { people.map(person => {
        return (
          <div key={ person.id }>
            <h2>{ person.name }</h2>
            <a href="">{ person.email }</a><br/>
            { person.active ? <h3>Active</h3> : <s>Inactive</s> }
          </div>
        )
      })}


      <hr/>

      { JSON.stringify(alice) }

      <hr/>
      { 
        names.map(name => {
          return (
            <div key={ name }>{ name }</div>
          )
        }) 
      }

      <ul>
        { 
          names.map(name => <li key={ name }>{ name }</li>)
        }
      </ul>

      <select>
        { names.map(name => <option key={ name }>{ name }</option>) }
      </select>





        <Message message={ messages[0] }/>
{
/*
      <Message 
        title="Message 1" 
        text="This is message 1"
        important={ true }/>
      <Message 
        title="Message 2" 
        text="This is message 2"
        important={ false }/>
      <Message 
        title="Message 3" 
        text="This is message 3"/>
*/
}
      <Box title="Box No 1" 
          colour="lightblue" 
          border="5"/>
      <Box title="Box No 2"/>
      <Box colour="lightgreen"/>

      <img src="https://picsum.photos/200/300"/>


    </div>
  
  );
}

export default App;
