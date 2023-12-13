
function Box({ properties }) {

    let styles = {
        width: `${ properties.width }px`, 
        height: `${ properties.height }px`, 
        border: `1px solid black`, 
        backgroundColor: properties.colour
    }

    return (
        <div style={ styles }>
        { properties.title }
        </div>
    )
}

export default Box;

