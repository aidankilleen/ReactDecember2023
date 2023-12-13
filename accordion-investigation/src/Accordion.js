const Accordion = ({ items }) => {

    return (
        <div>
        Accordion

        { items.map(item => {
            return (
                <div>
                    { item.title }
                </div>
            )
        })}


        {/* JSON.stringify(items) */}


        </div>
    )
}

export default Accordion;
