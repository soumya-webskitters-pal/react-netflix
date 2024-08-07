//import Feature module css
import "../accordion/Accordion.css";

import { useState } from 'react'

export default function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        // setActiveIndex(index === activeIndex ? null : index); //you can fold all items
        setActiveIndex(index); //allways open one item
    };

    return <>
        {data.map((item, index) => (
            <div className="accordion_item" key={item.Name + index}>
                <div className={`accordion_item_title ${activeIndex === index ? "open" : "collapsed"}`} onClick={() => handleClick(index)}>
                    <h3>{item.Release.split('-')[0]}</h3>
                </div>
                {
                    index === activeIndex &&
                    <div className={`accordion_item_content ${activeIndex === index ? "open" : "collapsed"}`}>
                        <h4>{item.Name}</h4>
                        <p>{item.Description}</p>
                    </div>
                }
            </div>
        ))}
    </>
}