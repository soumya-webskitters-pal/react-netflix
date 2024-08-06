import { useState }            from 'react'

import Modal                   from "../modals/Modal2";
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
    // const modalRef = useRef([null]);
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleItem = (event) => {
    //     console.log(modalRef.current, event.currentTarget);

    //      if (modalRef.current && !modalRef.current.contains(event.currentTarget)) {
    //     setIsOpen(!isOpen);
    //     console.log("call");

    //     const html = document.querySelector('html');
    //     isOpen ? html.classList.remove("overflow_hidden") : html.classList.add("overflow_hidden");
    //      }
    // };

    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);

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

                            {item.Trailer && <span className="btn_trailer" onClick={Toggle} >Watch Trailer</span>}
                            <Modal show={modal} title="My Modal" close={Toggle}>
                                <video poster={item.Image} autoPlay playesinline="true" controls>
                                    <source src={item.Video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Modal>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper >
    </>;
}