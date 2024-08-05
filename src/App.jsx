import { useState, useEffect } from 'react';

import Loader                  from './assets/components/loader/Loader';

import ProductPage             from './assets/ProductPage';

//import app css
import './App.css';


export default function App() {
  const [pageData, setData] = useState(null);
  useEffect(() => () => {
    fetch('src/assets/data.json'
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
      .then(function (siteData) {
        console.log(">>", siteData);
        setData(siteData)
      })
      .catch((e) => {
        console.log("err:",e.message);
      });
  }, [])

  return pageData !== null ? (
    <ProductPage SiteData={pageData} />
  ) : <Loader/>
}