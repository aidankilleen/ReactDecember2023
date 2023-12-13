import { useState } from "react";
import AccordionPanel from "./AccordionPanel";

const Accordion = ({ items:itemsProp }) => {

    const [items, setItems] = useState(itemsProp);

    const onExpanded = (item) => {
        
        console.log("onExpanded() called");
        // loop through the items 
        // set expanded = false for all except 
        // the item that was passed.
        items.forEach(it => {
            if (it.id != item.id) {
                it.expanded = false;
            } else {
                it.expanded = !it.expanded;
            }
        })
        setItems([...items]);
    }

    return (
        <>
        <div>
            { items.map(item => 
                <AccordionPanel 
                    key={ item.id } 
                    item={ item }
                    onExpanded={ onExpanded }
                />) 
            }
        </div>
        <hr/>
        <pre>{JSON.stringify(items, null, 4)}</pre>
        </>
    )
}

export default Accordion;
