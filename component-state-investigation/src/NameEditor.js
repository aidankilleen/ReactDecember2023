
import { useState } from "react";
import "./NameEditor.css";

const NameEditor = ({ name, onSave }) => {

    const[nameToEdit, setNameToEdit] = useState(name);

    const onChange = (evt) => {
        console.log(evt.target.value);
        // name = evt.target.value;
        setNameToEdit(evt.target.value);
    }

    return (
        <div className="editor">
            <h3>Edit Your Name</h3>

            <input 
                value={ nameToEdit } 
                onChange={ onChange }/>

            <button 
                onClick={ () => onSave(nameToEdit) }>
                    Save
            </button>
            <hr/>
            { nameToEdit }<br/>
            { name }<br/>

        </div>
    )
}

export default NameEditor;


