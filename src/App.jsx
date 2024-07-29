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
  useEffect(() => {
    setProductData(PageData.Products);
  }, []);
  const SelectHandler = (e, m) => {
    console.log(e, m)
  }
  return (
    <>
      <SelectBox></SelectBox>
      < ListItem
        items={(product_data.map((item) => {
          return item
        }
        ))}
        heading="List type"
        error={"Sorry, no data found"}
        OnSelectHandler={SelectHandler}
        selection={1}
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
