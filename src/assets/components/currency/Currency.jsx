import React, { useEffect, useState } from 'react';

const Currency = (getCurrencyData, setPrice, setCurrency) => {
    console.log(getCurrencyData);

    function toFixedTrunc(x, n) {
        const v = (typeof x === 'string' ? x : x.toString()).split('.');
        if (n <= 0) return v[0];
        let f = v[1] || '';
        if (f.length > n) return `${v[0]}.${f.substr(0, n)}`;
        while (f.length < n) f += '0';
        return `${v[0]}.${f}`
    }

    const [currencyValue, getCurrencyValue] = useState(getCurrencyData);
    useEffect(() => {
        getCurrencyValue(getCurrencyData);
    }, [getCurrencyData]);

    console.log(currencyValue);

    return (
        <>
            {
                currencyValue != null ?
                    <span className="offer-price">
                        <span className="converted-price">
                            {
                                toFixedTrunc(Number(setPrice) *
                                    Number(currencyValue), 2)
                            }
                        </span>
                        <span className="converted-currency">{setCurrency}</span>
                    </span> : <span className="price-loading">Please Wait...</span>
            }
        </>
    );
};

export default Currency;