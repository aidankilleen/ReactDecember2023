import { useContext } from "react";
import { DarkModeContext } from "./App";

const DocumentationDetail = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <div className={ darkMode.value ? "info-dark" : "info" }>
            <h2>Details</h2>

            <p>Some details</p>

            {JSON.stringify(darkMode)}
        </div>
    )
}

export default DocumentationDetail;