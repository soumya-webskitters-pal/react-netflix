import React, { useState }     from 'react';
import Modal                   from "../modals/Modal";
// import Currency from "./Currency";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation }          from 'swiper/modules';
import 'swiper/css/navigation';
import moment                  from "moment";
import "../listSection/List.css";

export default function List({ items, OnSelectHandler, selection, currencyTag, sliderSetting, error }) {
    const [selectedIndex, setIndex] = useState();
    const [activeModal, setActiveModal] = useState({ isVisible: false, index: -1 });
    const nowData = moment().format('yyyy');
    const freeAfter = 15;

    const closeModal = () => {
        setActiveModal({ isVisible: false, index: -1 });
    };

    const handleClick = (index) => {
        setActiveModal({ isVisible: true, index });
    };

    return (
        <>
            {items.length === 0 && <p>{error}</p>}
            <Swiper
                className="list_box" {...sliderSetting}
                navigation={true}
                modules={[Navigation]}
            // onSlideChange={(e) => console.log(e)}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}
                        className={selectedIndex === index || (selectedIndex === undefined && index === selection) ? "list-item active" : "list-item"}
                        onClick={() => {
                            // OnSelectHandler(item, index);
                            setIndex(index);
                        }}>
                        <div className="inner_item" key={item.Name + index}>
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

                            {item.Trailer && (
                                <span className="btn_trailer" onClick={() => handleClick(index)}>
                                    Watch Trailer
                                </span>
                            )}
                            {activeModal.index === index && activeModal.isVisible && (
                                <Modal
                                    Title={item.Name}
                                    close={closeModal}
                                    settings={{ darkMode: true, modalClass: "trailer_modal" }}
                                >
                                    <div className="video_box">
                                        <video poster={item.Image} autoPlay playsInline controls>
                                            <source src={item.Video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="desc">
                                        <p>{item.Description}</p>
                                    </div>
                                </Modal>
                            )}
                            <div className="btn_wrap">
                                {item.Sale && moment(nowData).diff(moment(item.Release), 'years') > freeAfter ? (
                                    <>
                                        <button className="btn btn_action" onClick={() => handleClick(index)}>
                                            Free to watch
                                        </button>
                                        {activeModal.index === index && activeModal.isVisible && (
                                            <Modal
                                                Title={`${item.Name} - ${item.Release.split('-')[0]}`}
                                                close={closeModal}
                                                settings={{ modalClass: "product_modal" }}
                                            >
                                                <div className="video_box">
                                                    <video poster={item.Image} controls>
                                                        <source src={item.Video} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            </Modal>
                                        )}
                                    </>
                                ) : (
                                    <div className="btn_wrap_buy">
                                        <a href="#" className="btn btn_action">Buy</a>
                                        <a href="#" className="btn btn_action">Rent</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
