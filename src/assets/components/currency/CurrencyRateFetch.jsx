import React, { useEffect, useState } from 'react';

const CurrencyRateFetch = (base, target) => {
    const [currency, setCurrency] = useState(null);
    const apiData = {
        url: "https://api.freecurrencyapi.com/v1/latest",
        apiKey: "fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU",
        // baseCurrency: "USD",
        // TargetCurrency: "INR",
    }
    useEffect(() => () => {
        fetch(`${apiData.url}?apikey=${apiData.apiKey}&currencies=${target}& base_currency=${base}`
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
                // console.log(">>", setCr);
                setCurrency(setCr)
            })
            .catch((e) => {
                console.log("err:", e.message);
            });
    }, []);
    return (currency !== null ? Number(Object.values(currency.data)[0]) : null);
};

export default CurrencyRateFetch;