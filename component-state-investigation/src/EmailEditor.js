const EmailEditor = ({ email, onChange }) => {

    return (
        <div className="editor">
            <h3>Edit your Email</h3>

            <input 
                value={email}
                onChange={(evt) => {
                    onChange(evt.target.value);
                }}/>
        </div>
    )
}

export default EmailEditor;