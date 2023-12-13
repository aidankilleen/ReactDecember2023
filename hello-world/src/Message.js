import './Message.css';

//function Message(props) {
function Message({ title, text, important }) {

    // destructuring
    // instead of this:
    //let title = props.title;
    //let text = props.text;

    //  we can do this:
    //let { title, text } = props;
    console.log(title);
    console.log(text);
    console.log(important);

    // we can do even better by destructuring in the paramers
    return (
        <div className="message">
            { important && <h1>IMPORTANT</h1> }
            <h2>{ title }</h2>
            <p>{ text }</p>

            { important ? <div>Important</div> : <div>Not Important</div> }
        </div>
    );
}

export default Message;