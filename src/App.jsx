import { useState, useEffect } from 'react'
import './App.css'

import { PageData }            from './assets/data'
import Banner                  from './Banner.jsx';
import ListItem                from './List.jsx';
import SelectBox               from './SelectBox.jsx';
import FeatureBox              from './FeatureBox.jsx';
import Accordion               from './Accordion.jsx';

/**
 * Renders a list of items with a heading and error message.
 * @return {JSX.Element} The rendered list of items.
 */
function App() {
  if (PageData != undefined && PageData.length != 0) {
    const [BannerData, setBanner] = useState([]);
    const [productData, setProductData] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    // const [FeatureData, setFeatureData] = useState([]);

    useEffect(() => {
      setBanner(PageData.Pages.Products);
      setCurrencies(PageData.Currencies);
      setProductData(PageData.Products);
      // setFeatureData(PageData.Pages.Products.FeatureSec);
    }, []);

    const selectCurrency = (x) => {
      console.log(">>", x)
      return (x)
    }
    const SelectHandler = (e, m) => {
      console.log(e, m)
    }


    return (
      <>
        <SelectBox
          options={[...currencies]}
          // onChange={value => props.input.onChange(value)}
          // onBlur={() => props.input.onBlur(props.input.value)}
          defaultValue={[...currencies][1]}
          OnChangeHandler={selectCurrency}
        ></SelectBox>

        <Banner
          title={BannerData.Title}
          subtitle={BannerData.SubText}
          image={BannerData.Image}
          alignment="center"
          page={BannerData.Page}
          error={"Sorry, no data found"}
        ></Banner>

        <div className="section">
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
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <FeatureBox items={[...productData]} error={"Sorry, no data found"}></FeatureBox>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>list of Movie by year</h2>
          {/* <Accordion items={[...productData]} error={"Sorry, no data found"}></Accordion> */}
        </div >
      </>
    )
  }
}
export default App
