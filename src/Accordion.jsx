export default function Accordion({ items, error }) {
    console.log(items);

    return <>
        {items.length === 0 && <p>{error}</p>}
        <div className="accordionSet">
            {
                items.map((item, index) => {
                    <div key={item.id} item={item} className="accordion_item">
                        <div className="accordion_item_title" onClick={() => { console.log(item) }}><h3>{item.releaseYear}</h3></div>
                        <div className="accordion_item_content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                })
            }
        </div>

    </>
}