//import Feature module css
import "../accordion/Accordion.css";

export default function Accordion({ acrItems, error }) {

    return <>
        {/* {console.log(acrItems, Object.entries(acrItems)) } */}
        {acrItems.length === 0 && <p>{error}</p>}
        <div className="accordionSet">
            {
                Object.keys(
                    acrItems.map(item => {
                        console.log(item[1][0]);
                        <div key={item[1][0].Id} className="accordion_item">
                            <div className="accordion_item_title" onClick={() => { console.log(e.target) }}>
                                <h3>{item[1][0].Title}</h3>
                            </div>
                            <div className="accordion_item_content">
                                <h4>{item[1][0].Name}</h4>
                                <p>{item[1][0].Content}</p>
                            </div>
                        </div>
                    })
                )
            }
        </div>

    </>
}