import "./assets/css/List.css";
import { useState } from 'react'
import SlickSlider  from "react-slick";
import moment       from "moment";
import Modal        from "./Modal";
import Currency     from "./Currency";
function List({ items, error, OnSelectHandler, selection, currencyTag, sliderSetting }) {
    const [selectedIndex, setIndex] = useState();
    const [isOpen, setIsOpen] = useState([]);
    const nowData = moment().format('yyyy');

    return <>
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
        <SlickSlider className="list_box" {...sliderSetting}>
            {
                items.map((item, index) => (
                    <div key={index}
                        className={selectedIndex === index || (selectedIndex === undefined && index === selection) ? "list-item active" : "list-item"}
                        onClick={() => {
                            OnSelectHandler(item, index);
                            setIndex(index);
                        }}>
                        <div className="inner_item">
                            <img src={`${item.Image ? item.Image : 'placeholder.png'}`} alt={item.Name} />
                            <h3 className="item_title">{item.Name} {item.releaseYear ? <span className="year">- {item.releaseYear}</span> : null}</h3>
                            {/* <div className="price"><Currency {...{ 'price': item.Price, 'baseCurrency': item.Currency, 'convertedCurrency': currencyTag }}></Currency></div> */}
                            {item.Description ? <div className="item_desc"><p>{item.Description}</p></div> : null}
                            {item.Author ? <div className="item_auth"><p>{item.Author}</p></div> : null}
                            {item.Trailer ? <a href={item.Trailer} target="_blank" className="btn_trailer" rel="noopener noreferrer">Watch Trailer</a> : null}
                            <div className="btn_wrap">
                                {item.Sale && moment(nowData).diff(moment(String(item.releaseYear)), 'years') > 15 ?
                                    (<button data-href={item.Video} className="btn btn_action" onClick={() => setIsOpen(true)}>Free to watch</button>
                                    )
                                    : (<div className="btn_wrap_buy">
                                        <a href="#" className="btn btn_action">Buy</a>
                                        <a href="#" className="btn btn_action">Rent</a>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </SlickSlider>
        {/* {isOpen && <Modal setIsOpen={setIsOpen} Title="Watch Video" modalData="modal data" refModal="product_modal"></Modal>} */}
        {isOpen && <Modal setIsOpen={setIsOpen} modalState={isOpen?"open":"close"}></Modal>}
    </>;
}
export default List;