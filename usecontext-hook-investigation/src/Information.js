import InformationDetail from "./InformationDetail";

const Information = ({ darkMode }) => {

    return (

        <div className={darkMode ? "info-dark" : "info"}>

            <h1>Information</h1>

            <p>This is some information</p>

            <InformationDetail darkMode={ darkMode }/>
        </div>
    )
}

export default Information;