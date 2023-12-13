import { useState } from "react";

const Member = ({ member, onSave }) => {

    const [memberToEdit, setMemberToEdit] = useState(member);

    return (
        <>
            <div className="editor">
                <h3>Edit Member</h3>

                <input value={ memberToEdit.id } readOnly/><br/>
                <input 
                    value={ memberToEdit.name }
                    onChange={evt => 
                        setMemberToEdit(prev => {
                            return {
                                ...prev, 
                                name: evt.target.value
                            }
                        })
                    }    
                /><br/>
                <input 
                    value={ memberToEdit.email }
                    onChange={evt => 
                        setMemberToEdit(prev => {
                            return {
                                ...prev, 
                                email: evt.target.value
                            }
                        })
                    }    
                /><br/>
                <input 
                    type="checkbox"
                    checked={ memberToEdit.active }
                    onChange={ evt => 
                        setMemberToEdit(prev => ({
                                ...prev, 
                                active: evt.target.checked
                            })
                        )
                    }    
                /><br/>
                <button 
                    onClick={ () => onSave(memberToEdit) }>
                        Save
                </button>

                <button onClick={() => {
                    setMemberToEdit(member);
                }}>Cancel</button>

                


            </div>


            { JSON.stringify(memberToEdit) }
            { JSON.stringify(member) }
        </>
    )
}

export default Member;