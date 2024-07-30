import React, { useEffect, useState } from 'react';

// const currency2 = { data: { "INR": 84.4589412 } };
// console.log(Number(Object.values(currency2.data)[0]).toFixed(2));

const Currency = (getCurrencyData) => {
    console.log(getCurrencyData);
    const [currency, setCurrency] = useState({ data: [] });
    function toFixedTrunc(x, n) {
        const v = (typeof x === 'string' ? x : x.toString()).split('.');
        if (n <= 0) return v[0];
        let f = v[1] || '';
        if (f.length > n) return `${v[0]}.${f.substr(0, n)}`;
        while (f.length < n) f += '0';
        return `${v[0]}.${f}`
    }
    const apiAsset = {
        url: "https://api.freecurrencyapi.com/v1/latest",
        apiKey: "fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU",
        baseCurrency: String(getCurrencyData.baseCurrency),
        currencies: String(getCurrencyData.convertedCurrency),
    };
    const responseURL = `${apiAsset.url}?apikey=${apiAsset.apiKey}&currencies=${apiAsset.currencies}&base_currency=${apiAsset.baseCurrency}`;
    useEffect(() => {
        fetch(responseURL)
            .then(response => response.json())
            .then(json => setCurrency(JSON.stringify(json.data)))
            .catch(error => console.error(error));
    }, []);
    return (
        <>
            {
                currency != undefined && currency != null ?
                    <span className='offer-price'>
                        <span className='converted-price'>
                            {
                                <span className='converted-price'>
                                    {
                                        toFixedTrunc((Number(getCurrencyData.price) *
                                            Number(Object.values(currency.data)[0])), 2)
                                    }
                                </span>
                            }
                        </span>
                        <span className='converted-currency'>{apiAsset.currencies}</span>
                    </span> : <span className="price-loading">converting price...</span>
            }
        </>
    );
};

export default Currency;