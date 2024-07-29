import React, { useState, useEffect } from "react";
import SlickSlider                    from "react-slick";

function List({ items, heading, error, OnSelectHandler, selection, sliderSetting }) {
    const [selectedIndex, setIndex] = useState();
    return <>
        <h1 className="heading">{heading}</h1>
        {items.length === 0 && <p>{error}</p>}
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <SlickSlider className="list" {...sliderSetting}>
            {
                items.map((item, index) => (
                    <div key={index}
                        className={selectedIndex === index || (selectedIndex === undefined && index === selection) ? "list-item active" : "list-item"}
                        onClick={() => {
                            OnSelectHandler(item, index);
                            setIndex(index)
                        }}>
                        <img src={`../src/assets/images/${item.Image ? item.Image : 'placeholder.png'}`} alt={item.Name} />
                        <h3>{item.Name}</h3>
                        <div className="price">{item.Price}{item.PriceUnit}</div>
                        {item.Description ? <p>{item.Description}</p> : null}
                        <a href="#" className="btn btn_action">Rent NOW</a>
                        <a href="#" className="btn btn_action">Watch NOW</a>
                    </div>
                ))
            }
        </SlickSlider>
    </>;
}
export default List;