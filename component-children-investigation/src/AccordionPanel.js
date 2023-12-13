const AccordionPanel = ({ title, expanded, onExpanded, children }) => {

    return (
        <div onClick={ () => onExpanded() } className="accordion-panel">
            <h1 style={{ backgroundColor: expanded ? 'lightblue' : 'lightgreen'}}>{ title }</h1>
            {expanded && <div>{ children }</div>}
        </div>
    )
}

export default AccordionPanel;
