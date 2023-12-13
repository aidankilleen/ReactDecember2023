import { useState } from "react";

const AccordionPanel = ({ item, onExpanded }) => {


    //const [item, setItem] = useState(itemProp);

    const onClick = () => {
        /*setItem(current => {
            return {
                ...current, 
                expanded: !item.expanded
            }
        });
        */
        onExpanded(item);
    }

    return (
        <div onClick={ onClick }>
            <h2>{ item.title }</h2>
            { item.expanded && <p>{ item.text }</p> }
        </div>
    )
}

export default AccordionPanel;