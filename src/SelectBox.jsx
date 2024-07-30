import React, { useState } from 'react';
function selectModule({ options, OnSelectCurrenciesHandler, selection }) {
    if (options[selection] != undefined) {
        return (
            <>
                <div className="select_currencies">
                    <select defaultValue={options[selection] != undefined ? options[selection].value : null} onChange={e => {
                        OnSelectCurrenciesHandler(options[selection].value, e.target.value, e.target.options[e.target.selectedIndex].index);
                    }}>
                        {options.map((o, i) => (
                            <option key={o.value} value={o.value} >{o.label}</option>
                        ))}
                    </select>
                </div>
            </>
        );
    }
}
export default selectModule;