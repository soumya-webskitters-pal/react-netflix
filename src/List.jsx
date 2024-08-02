import { useState }            from 'react'

import Modal                   from "./Modal";
// import Currency from "./Currency";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation }          from 'swiper/modules';
import 'swiper/css/navigation';

// import TruncateMarkup from 'react-truncate-markup';

import moment                  from "moment";

//import list module css
import "./assets/css/List.css";


export default function List({ items, OnSelectHandler, selection, currencyTag, sliderSetting, error }) {
    const [selectedIndex, setIndex] = useState();
    const nowData = moment().format('yyyy'), freeAfer = 15;

    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleItem = (item = null) => {
        setData(item);
        setIsOpen(item !== null);
        const html = document.querySelector('html');
        isOpen ? html.style.overflow = 'auto' : html.style.overflow = 'hidden'
    };

    return <>
        {items.length === 0 && <p>{error}</p>}
        <Swiper
            className="list_box" {...sliderSetting}
            navigation={true}
            modules={[Navigation]}
        // onSlideChange={(e) => console.log(e)}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                items.map((item, index) => (
                    <SwiperSlide key={index}
                        className={selectedIndex === index || (selectedIndex === undefined && index === selection) ? "list-item active" : "list-item"}
                        onClick={() => {
                            OnSelectHandler(item, index);
                            setIndex(index);
                        }}>
                        <div className="inner_item">
                            {item.Image ?
                                <figure className="item_img"><img src={item.Image} alt={item.Name} /></figure>
                                :
                                <figure className="item_img"><img src='placeholder.png' alt={item.Name} /></figure>}

                            <h3 className="item_title">{item.Name} {item.release ?
                                <span className="year">- {String(item.release).split('-')[0]}</span>
                                : null}</h3>

                            {item.Author ? <div className="item_auth"><p>{item.Author}</p></div> : null}

                            {/* <div className="price"><Currency {...{ 'price': item.Price, 'baseCurrency': item.Currency, 'convertedCurrency': currencyTag }}></Currency></div> */}

                            {item.Description ?
                                <div className="item_desc">
                                    {/* <TruncateMarkup lines={4}> */}
                                    <p>{
                                        item.Description
                                    }</p>
                                    {/* </TruncateMarkup> */}
                                </div>
                                : null}

                            {item.Trailer ? <a href={item.Trailer} target="_blank" className="btn_trailer" rel="noopener noreferrer">Watch Trailer</a> : null}

                            <div className="btn_wrap">
                                {item.Sale && moment(nowData).diff(moment(String(item.release)), 'years') > freeAfer ?
                                    (<button data-href={item.Video} className="btn btn_action" onClick={() => {
                                        toggleItem({
                                            Title: `<h2>${item.Name} <span className="year">- ${String(item.release).split('-')[0]}</span></h2>`,
                                            Content:
                                                `<video poster=${item.Image} controls>
                                                    <source src=${item.Video} type="video/mp4">
                                                    Your browser does not support the video tag.
                                                </video>`,
                                            Class: "product_modal center",
                                        })
                                    }
                                    }>Free to watch</button>
                                    )
                                    : (<div className="btn_wrap_buy">
                                        <a href="#" className="btn btn_action">Buy</a>
                                        <a href="#" className="btn btn_action">Rent</a>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        {isOpen && data !== null && (
            <Modal modalData={data} closeModal={() => toggleItem()} />
        )}
    </>;
}