import { useState, useEffect } from 'react';

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
    const selectCurrency = (x) => {
        console.log(">>", x)
        return (x)
    }

    //fetch products on click
    const SelectHandler = (e, m) => {
        console.log(e, m)
    }

    ///sort date 
    const DataSortComponent = (data) => {
        const sortedData = [...data].sort((a, b) => a.Release.localeCompare(b.Release));
        const rearrangedData = Object.fromEntries(
            sortedData.map((item, i) => [
                i, {
                    Id: item.Id,
                    Title: item.Release.split('-')[0],
                    Name: item.Name,
                    Content: item.Description,
                    Image: item.Image
                }
            ])
        );
        return rearrangedData;
    };

    return (
        <>
            <div className="select_currencies">
                {[...currencies] != undefined &&
                    <SelectBox
                        options={[...currencies]}
                        // onChange={value => props.input.onChange(value)}
                        // onBlur={() => props.input.onBlur(props.input.value)}
                        defaultValue={[...currencies][1]}
                        OnChangeHandler={selectCurrency}
                    ></SelectBox>
                }
            </div>

            {PageData != undefined ?
                <Banner data={{ title: PageData.Title, subtitle: PageData.SubText, image: PageData.Image, page: PageData.Page, alignment: "center", error: " Sorry, no data found" }}></Banner> : null
            }

            <div className="section">
                {[...productData] != undefined &&
                    <ListItem
                        items={[...productData]}
                        OnSelectHandler={SelectHandler}
                        selection={1}
                        currencyTag={selectCurrency}
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
                            <FeatureBox key={index} featureItems={item} alignment="center" error={"Sorry, no data found"}></FeatureBox>)
                    }
                    {PageData.FeatureSec2 != undefined &&
                        PageData.FeatureSec2.map((item, index) =>
                            <FeatureBox key={index} featureItems={item} alignment={index % 2 ? "right" : "left"} error={"Sorry, no data found"}></FeatureBox>)
                    }
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {PageData.FeatureSec3 != undefined &&
                        PageData.FeatureSec3.map((item, index) =>
                            <FeatureBox key={index} featureItems={item} alignment="center" error={"Sorry, no data found"}></FeatureBox>)
                    }
                    <Accordion acrItems={(DataSortComponent(productData))} error={"Sorry, no data found"}></Accordion>
                </div>
            </div>
        </>
    )
}