import { useState, useEffect } from 'react'
import './App.css'

import { PageData }            from './assets/data'
import ListItem                from './List.jsx';
import SelectBox               from './SelectBox.jsx';

/**
 * Renders a list of items with a heading and error message.
 * @return {JSX.Element} The rendered list of items.
 */
function App() {
  const [product_data, setProductData] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    setProductData(PageData.Products);
    setCurrencies(PageData.Currencies);
  }, []);
  const selectCurrency = (m, n) => {
    console.log(">>",m, n)
    return (m !== n ? m : m)
  }
  const SelectHandler = (e, m) => {
    console.log(e, m)
  }
  return (
    <>
      <SelectBox
        options={(
          currencies.map((item) => {
            return item
          })
        )}
        OnSelectCurrenciesHandler={selectCurrency}
        selection={1}
      ></SelectBox>
      < ListItem
        items={(product_data.map((item) => {
          return item
        }
        ))}
        heading="List type"
        error={"Sorry, no data found"}
        OnSelectHandler={SelectHandler}
        selection={1}
        currencyTag={selectCurrency()}
        sliderSetting={{
          arrows: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }}></ListItem>
    </>
  )
}
export default App
