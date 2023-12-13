import { cloneElement, useState } from "react";

const Accordion = ({ children }) => {

    let initialState = Array(children.length).fill(false);
    initialState[0] = true; // open the first panel

    const [expanded, setExpanded] = useState(initialState);

    return (
        <>
        <div>
            { 
                children.map((child, index) => {
                    let clone = cloneElement(child, {
                        expanded: expanded[index], 

                        onExpanded: () => {
                            for (let i=0; i<expanded.length; i++) {
                                if (i == index) {
                                    // toggle clicked panel
                                    expanded[i] = !expanded[i];
                                } else {
                                    // close other panels
                                    expanded[i] = false;
                                }
                            }

                            setExpanded([...expanded]);
                        }
                    });
                    return clone
                }) 
            }
        </div>
        </>
    )
}

export default Accordion;