import './Message.css';

//function Message(props) {
function Message({ message }) {

    // we can do even better by destructuring in the paramers
    return (
        <div className="message">
            { message.important && <h1>IMPORTANT</h1> }
            <h2>{ message.title }</h2>
            <p>{ message.text }</p>

            { message.important ? <div>Important</div> : <div>Not Important</div> }
        </div>
    );
}

export default Message;