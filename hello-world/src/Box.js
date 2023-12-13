function Box(props) {

    //let title = "The Box";

    let styles = {
        backgroundColor: props.colour ? props.colour : 'lightcoral',
        border: `${props.border ? props.border : 1}px solid black`
    };

    return (
        <div className="box" style={ styles }>
            { props.title }
        </div>
    )
}

export default Box;  