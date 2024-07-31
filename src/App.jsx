import { useState, useEffect } from 'react'
import './App.css'

import { PageData } from './assets/data'
import Banner from './Banner.jsx';
import ListItem from './List.jsx';
import SelectBox from './SelectBox.jsx';

/**
 * Renders a list of items with a heading and error message.
 * @return {JSX.Element} The rendered list of items.
 */
function App() {
  if (PageData != undefined && PageData.length != 0) {
    const [BannerData, setBanner] = useState([]);
    const [product_data, setProductData] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    // const [selectedItem, setSelectItem] = useState([]);
    useEffect(() => {
      setBanner(PageData.Pages.Products);
      setCurrencies(PageData.Currencies);
      setProductData(PageData.Products);
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
        >aa</Banner>

        <div className="section">
          <ListItem
            items={[...product_data]}
            error={"Sorry, no data found"}
            OnSelectHandler={SelectHandler}
            selection={1}
            currencyTag={selectCurrency}
            sliderSetting={{
              arrows: true,
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }}></ListItem>
        </div>
      </>
    )
  }
}
export default App
