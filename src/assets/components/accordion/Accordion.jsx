//import Feature module css
import "../accordion/Accordion.css";

import { useState, useEffect } from 'react'

// export default function Accordion({ Title, children }) {
//     // console.log(children);
//     const accordionRefs = useRef([]);
//     const [isActive, setIsActive] = useState(null);
//     const accrAction = (index) => {

//         console.log(index, accordionRefs[isActive]);

//         if (index === isActive) {
//             setIsActive(null);
//         } else {
//             setIsActive(index);
//         }
//     };
//     return <>
//         <div className="accordion_item">
//             <div className={`accordion_item_title ${isActive ? "open" : "collapsed"}`} onClick={accrAction} >
//                 <h3>{Title}</h3>
//             </div>
//             <div className={`accordion_item_content ${isActive ? "open" : "collapsed"}`}>
//                 {children}
//             </div>
//         </div>
//     </>
// }


export default function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        // setActiveIndex(index === activeIndex ? null : index); //you can fold all items
        setActiveIndex(index);     //allways open one item
    };

    return <>
        {data.map((item, index) => (
            <div className="accordion_item" key={item.Name + index}>
                <div className={`accordion_item_titlex ${activeIndex ?"collapsed":"open"}`} onClick={() => handleClick(index)}>
                    <h3>{item.Release.split('-')[0]}</h3>
                </div>
                {
                    index === activeIndex &&
                    <div className={`accordion_item_content ${activeIndex ? "collapsed" : "open"}`}>
                        <h3>{item.Name}</h3>
                        <p>{item.Description}</p>
                    </div>
                }

            </div>
        ))}
        {/* <div className="accordion_item">
            <div className={`accordion_item_title ${isActive ? "open" : "collapsed"}`} onClick={accrAction} >
                <h3>{Title}</h3>
            </div>
            <div className={`accordion_item_content ${isActive ? "open" : "collapsed"}`}>
                {children}
            </div>
        </div> */}
    </>
}