export default function Accordion({ items, error }) {
    console.log(items);
    return <>
        {items.length === 0 && <p>{error}</p>}
        <div className="accordionSet">
            {
                ...[items].map((item, index) => {
                    console.log(item);
                    <div key={item.Id} item={item} className="accordion_item">
                        <div className="accordion_item_title" onClick={() => { console.log(item) }}><h3>{item.Title}</h3></div>
                        <div className="accordion_item_content">
                            <p>{item.Content}</p>
                        </div>
                    </div>
                })
            }
        </div>

    </>
}