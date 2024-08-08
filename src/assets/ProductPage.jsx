import { useState, useEffect } from 'react';

import CurrencyRateFetch       from "./components/currency/CurrencyRateFetch";
import Banner                  from './components/banner/Banner.jsx';
import ListItem                from './components/listSection/List.jsx';
import SelectBox               from './components/selectBox/SelectBox.jsx';
import FeatureBox              from './components/featureBox/FeatureBox.jsx';
import Accordion               from './components/accordion/Accordion.jsx';

export default function ProductPage({ SiteData }) {
    const [PageData, setBanner] = useState([]);
    const [productData, setProductData] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        //set banner and feature data
        setBanner(SiteData.Pages.Products);
        //set Currencies data
        setCurrencies(SiteData.Currencies);
        //set product data
        setProductData(SiteData.Products);
    }, []);

    //fetch currencies on chnage
    const [currency, setCurrency] = useState(null);
    async function getCurrencyData(crTarget, crBase) {
        const apiData = {
            url: "https://api.freecurrencyapi.com/v1/latest",
            apiKey: "fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU",
            baseCurrency: crBase,
            TargetCurrency: crTarget,
        }
        await fetch(`${apiData.url}?apikey=${apiData.apiKey}&currencies=${apiData.TargetCurrency}& base_currency=${apiData.baseCurrency}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                // console.log(":", response);
                return response.json();
            })
            .then(function (setCr) {
                console.log(">>", setCr.data, Object.values(setCr.data)[0]);
               setCurrency(Object.values(setCr.data)[0]);
            })
            .catch((e) => {
                console.log("err:", e.message);
            });
    }
    const selectCurrency = (val) => {
        getCurrencyData(val.current, val.prev);
        console.log(">>", val, currency);
        return (val)
    }

    //fetch products on click
    // const SelectHandler = (e, m) => {
    //     console.log(e, m)
    // }

    ///sort date 
    const DataSortComponent = (data) => {
        // let sortedData;
        const sortedData = [...data].sort((a, b) => a.Release.localeCompare(b.Release));
        return sortedData;
    };

    return (
        <>
            <div className="select_currencies">
                {[...currencies] != undefined &&
                    <SelectBox
                        options={[...currencies]}
                        // onChange={value => props.input.onChange(value)}
                        // onBlur={() => props.input.onBlur(props.input.value)}
                        //onChange={selectCurrency}
                        defaultValue={[...currencies][0]}
                        OnChangeHandler={selectCurrency}
                    ></SelectBox>
                }
            </div>

            {PageData != undefined ?
                <Banner setting={{ title: PageData.Title, subtitle: PageData.SubText, image: PageData.Image, extraClass: PageData.Page }}></Banner> : null
            }

            <div className="section">
                {[...productData] != undefined &&
                    <ListItem
                        items={[...productData]}
                        // OnSelectHandler={SelectHandler}
                        selection={1}
                        // currencyTag={selectCurrency}
                        sliderSetting={{
                            className: "list_box",
                            spaceBetween: 20,
                            slidesPerView: 3,
                            loop: true,
                            freeMode: true,
                            grabCursor: true,
                            initialSlide: 0,
                            speed: 500,
                            // pagination: {
                            //   el: '.swiper-pagination',
                            // },
                            // navigation: true,
                            // Custom Navigation arrows
                            // navigation: {
                            //   nextEl: '.swiper-button-next',
                            //   prevEl: '.swiper-button-prev',
                            // },
                            // Custom scrollbar
                            scrollbar: {
                                el: '.swiper-scrollbar',
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 8
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 12
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                1366: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                }
                            },
                        }}
                        error={"Sorry, no data found"}
                    ></ListItem>
                }
            </div>

            <div className="section">
                <div className="container">
                    {PageData.FeatureSec1 != undefined &&
                        PageData.FeatureSec1.map((item, index) =>
                            <FeatureBox key={index} featureItems={item} settings={{ alignment: "center" }} ></FeatureBox>)
                    }
                    {PageData.FeatureSec2 != undefined &&
                        PageData.FeatureSec2.map((item, index) =>
                            <FeatureBox key={index} featureItems={item} settings={{ alignment: index % 2 ? "right" : "left" }} ></FeatureBox>)
                    }
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {PageData.FeatureSec3 != undefined &&
                        PageData.FeatureSec3.map((item, index) =>
                            <FeatureBox key={index} featureItems={item} settings={{ alignment: "center" }} ></FeatureBox>)
                    }
                    <div className="accordionSet">
                        <Accordion data={DataSortComponent(productData)}></Accordion>
                    </div>
                </div>
            </div>

            {/* <div className="section">
                <div className="container">
                    {productData != undefined &&
                        productData.map((item, index) =>
                            <TabBox key={index} featureItems={item}></TabBox>)
                    }
                </div>
            </div> */}
        </>
    )
}