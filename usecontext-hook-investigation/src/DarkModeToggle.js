import { useContext } from "react";
import { DarkModeContext } from "./App";

const DarkModeToggle = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <>
            <input 
                type="checkbox"
                checked={ darkMode.value }
                onChange={ 
                    (evt) => darkMode.setDarkMode(evt.target.checked)
                }    
            />
            { JSON.stringify(darkMode) }        
        </>
    )
}

export default DarkModeToggle;