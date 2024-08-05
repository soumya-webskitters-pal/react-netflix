//import Feature module css
import "../accordion/Accordion.css";

export default function Accordion({ acrItems, error }) {
  
    return <>
        {console.log(acrItems) }
        {acrItems.length === 0 && <p>{error}</p>}
        {/* <div className="accordionSet">
            {
                Object.fromEntries(
                    acrItems.map(item => {
                        console.log(item);
                        <div key={item.Id} className="accordion_item">
                            <div className="accordion_item_title" onClick={() => { console.log(e.target) }}><h3>{item.Title}</h3></div>
                            <div className="accordion_item_content">
                                <h4>{item.Name}</h4>
                                <p>{item.Content}</p>
                            </div>
                        </div>
                    })
                )
            }
        </div> */}

    </>
}