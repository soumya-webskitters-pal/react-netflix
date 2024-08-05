import { useState, useRef }    from 'react'

import Modal                   from "../modals/Modal";
// import Currency from "./Currency";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation }          from 'swiper/modules';
import 'swiper/css/navigation';

import moment                  from "moment";

//import list module css
import "../listSection/List.css";


export default function List({ items, OnSelectHandler, selection, currencyTag, sliderSetting, error }) {
    const [selectedIndex, setIndex] = useState();
    const nowData = moment().format('yyyy'), freeAfer = 15;

    //modal
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleItem = (item = null) => {
        setData(item);
        setIsOpen(item !== null);
        const html = document.querySelector('html');
        isOpen ? html.classList.remove("overflow_hidden") : html.classList.add("overflow_hidden");
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

                            <h3 className="item_title">{item.Name} {item.Release ?
                                <span className="year">- {item.Release.split('-')[0]}</span>
                                : null}</h3>

                            {item.Author ? <div className="item_auth"><p>- By {item.Author}</p></div> : null}

                            {/* <div className="price"><Currency {...{ 'price': item.Price, 'baseCurrency': item.Currency, 'convertedCurrency': currencyTag }}></Currency></div> */}

                            {item.Description ?
                                <div className="item_desc">
                                    <p>{
                                        item.Description
                                    }</p>
                                </div>
                                : null}

                            {item.Trailer && <span className="btn_trailer" onClick={() => {
                                toggleItem({
                                    Content:
                                        `<video poster=${item.Image} controls>
                                                        <source src=${item.Video} type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video>`,
                                    Class: "trailer_modal center",
                                })
                            }}>Watch Trailer</span>}

                            <div className="btn_wrap">
                                {item.Sale && moment(nowData).diff(moment(item.Release), 'years') > freeAfer ? (
                                    < button className="btn btn_action" onClick={() => {
                                        toggleItem({
                                            Title: `${item.Name} <span className="year">- ${item.Release.split('-')[0]}</span>`,
                                            Content:
                                                `<video poster=${item.Image} controls>
                                                        <source src=${item.Video} type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video>`,
                                            Class: "product_modal center",
                                        })
                                    }
                                    }
                                    >Free to watch</button>
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

        {/* <Modal modalData={data} closeModal={() => toggleItem()} /> */}
        {isOpen && data !== null && < Modal modalData={data} closeModal={() => toggleItem()} />}
    </>;
}