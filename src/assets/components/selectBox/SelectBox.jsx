import React, { useEffect, useState } from 'react';

export default function selectBox({ options, defaultValue, OnChangeHandler }) {
    if (options != undefined && options.length > 0) {
        // console.log(Object.values(options));

        return (
            <>
                <div className="select_currencies">
                    <select
                        defaultValue={defaultValue.value} placeholder={defaultValue.label}
                        onChange={e => {
                            e.target.options[e.target.selectedIndex] != e.target.value
                                ?
                                (
                                    // console.log(defaultValue.value,e.target.options[e.target.selectedIndex]),
                                    OnChangeHandler({
                                        prev: defaultValue.value,
                                        current: e.target.value
                                    })
                                )
                                : null;
                        }}>
                        {options.map((o) => (
                            <option key={o.value} value={o.value}>{o.label} {`- ${o.symbol}`}</option>
                        ))}
                    </select>
                </div>
            </>
        )
    }


    // const [sitecurrency, setSiteCurrency] = useState(null);
    // const apiData = {
    //     // EUR%2CUSD%2CCAD%2CINR
    //     url: "https://api.freecurrencyapi.com/v1/currencies",
    //     apiKey: "fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU",
    // };
    // //https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_iTu53TOf94Z7oLeP1vqdTPOrtTvq1a8qlqqDqRGU&currencies=EUR%2CUSD%2CCAD%2CINR

    // useEffect(() => () => {
    //     fetch(`${apiData.url}?apikey=${apiData.apiKey}&currencies=${Object.values(options).join("%2C")}`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             // console.log(":", response);
    //             return response.json();
    //         })
    //         .then(function (setCr) {
    //             // console.log(">>", setCr);
    //             setSiteCurrency(setCr.data)
    //         })
    //         .catch((e) => {
    //             console.log("err:", e.message);
    //         });
    // }, []);
    // if (sitecurrency != null) {
    //     console.log(sitecurrency);

    //     return null;
    //     (
    //         <>
    //             <div className="select_currencies">
    //                 <select
    //                     defaultValue={defaultValue.value} placeholder={defaultValue.label}
    //                     onChange={e => {
    //                         e.target.options[e.target.selectedIndex] != e.target.value
    //                             ?
    //                             (
    //                                 // console.log(defaultValue.value,e.target.options[e.target.selectedIndex]),
    //                                 OnChangeHandler({
    //                                     prev: defaultValue.value,
    //                                     current: e.target.value
    //                                 })
    //                             )
    //                             : null;
    //                     }}>
    //                     {options.map((o) => (
    //                         <option key={o.value} value={o.value}>{o.label}</option>
    //                     ))}
    //                 </select>
    //             </div>
    //         </>
    //     )
    // }
    // return null;
}