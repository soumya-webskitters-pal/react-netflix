import React, { useState } from 'react';
function selectModule({ options, OnSelectCurrenciesHandler, selection }) {
    if (options[selection] != undefined) {
        return (
            <>
                <div className="select_currencies">
                    <select defaultValue={options[selection] != undefined ? options[selection].value : null} onChange={e => {
                        OnSelectCurrenciesHandler(options[selection].value, e.target.value);
                    }}>
                        {options.map((o, i) => (
                            <option key={o.value + i} value={o.value} >{o.label}</option>
                        ))}
                    </select>
                </div>
            </>
        );
    }
}
export default selectModule;

// let aa = $(".intke_stp_box"); 
// if (aa.length) {
//     function wd(i) { return (100 / (aa.length)) * i };
//     aa.each(function (i) {
//         let _this = $(this);
//         let wdthEl = $(".progress");

//         wdthEl.attr("style", `--width:${wd(i + 1)}%`);
//         _this.find(".sbmt_bttn").on("click", function () {
//             wdthEl.attr("style", `--width:${wd(i + 1)}%`);
//         });
//         _this.find(".back_bttn").on("click", function () {
//             wdthEl.attr("style", `--width:${wd(i - 1)}%`);
//         });
//     })
// }
 