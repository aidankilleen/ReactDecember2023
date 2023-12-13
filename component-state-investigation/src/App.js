import './App.css';
import { useState } from 'react';
import NameEditor from './NameEditor';
import EmailEditor from './EmailEditor';
import Member from './Member';

function App() {

  let [name, setName] = useState("Aidan");
  let [email, setEmail] = useState("aidan@gmail.com");

  let [member, setMember] = useState({
    id:1, 
    name: "Alice", 
    email: "alice@gmail.com", 
    active: true
  });


  const onSave = (updatedName) => {
    //alert(`saved:${ updatedName }`);
    setName(updatedName);
  }

  const onChange = (updatedEmail) => {
    //alert(`email change event:${ updatedEmail }`);
    setEmail(updatedEmail);
  }

  return (
    <div>
      <h1>Component State Investigation</h1>

      { JSON.stringify(member)}

      <Member 
        member={ member }
        onSave={ (updatedMember) => {
          setMember(updatedMember);
        } }/>

      <hr/>






      { name }
      <NameEditor 
        name={ name } 
        onSave={ onSave }/>

      {email }
      <EmailEditor 
        email={ email } 
        onChange={ onChange }/>

    </div>
  );
}

export default App;
