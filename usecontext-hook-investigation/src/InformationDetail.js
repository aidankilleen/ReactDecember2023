const InformationDetail = ({ darkMode }) => {

    return (
        <div className={ darkMode ? "info-dark" :"info" }>

            <h2>Some Details</h2>

            <p>This is some extra information</p>
        </div>
    )
}

export default InformationDetail;