import { useContext } from "react";
import { DarkModeContext } from "./App";
import DocumentationDetail from "./DocumentationDetail";
import DarkModeToggle from "./DarkModeToggle";

const Documentation = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <div className={ darkMode.value ? "info-dark" : "info" }>
            <h1>Documentation</h1>

            { JSON.stringify(darkMode) }

            <DocumentationDetail/>


            <hr/>
            <DarkModeToggle/>
        </div>
    )
}

export default Documentation;