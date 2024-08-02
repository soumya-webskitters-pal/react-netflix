export default function Accordion({ items, error }) {
    console.log(items);
    return <>
        {items.length === 0 && <p>{error}</p>}
        <div className="accordionSet">
            {/* {
               items.map(item => {
                    console.log(item);
                    <div key={item.Id} className="accordion_item">
                        <div className="accordion_item_title" onClick={() => { console.log(e.target) }}><h3>{item.Title}</h3></div>
                        <div className="accordion_item_content">
                            <h4>{item.Name}</h4>
                            <p>{item.Content}</p>
                        </div>
                    </div>
                })
            } */}
        </div>

    </>
}