import { useState } from "react";
import './UserDialog.css';
const UserDialog = ({ show, user, setUser, onSave, onCancel }) => {

    //const [user, setUser] = useState(userProp);
    return (
        <>
            { show && 
            <div className="dialog">
                <h2>User Dialog</h2>

                <input 
                    value={ user.name }
                    onChange={ evt => setUser(current => ({
                                ...current, 
                                name: evt.target.value
                            })
                        )
                    }
                /><br/>
                <input 
                    value={ user.email }
                    onChange={ evt => setUser(current => ({
                                ...current, 
                                email: evt.target.value
                            })
                        )
                    }
                /><br/>
                <input 
                    type="checkbox"
                    checked={ user.active }
                    onChange={ evt => setUser(current => ({
                                ...current, 
                                active: evt.target.checked
                            })
                        )
                    }
                /><br/>
                <button 
                    onClick={() => onSave(user)}>
                    Save
                </button>
                <button
                    onClick={() => onCancel()}>
                    Cancel
                </button>
                <hr/>
                { JSON.stringify(user) }
            </div> }
        </>
    )
}

export default UserDialog;
