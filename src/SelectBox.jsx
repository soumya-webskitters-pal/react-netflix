function selectModule({ options, defaultValue, OnChangeHandler }) {
    if (options != undefined && options.length != 0) {
        console.log(defaultValue);
        return (
            <>
                <div className="select_currencies">
                    <select
                        defaultValue={defaultValue.value} placeholder={defaultValue.label}
                        onChange={e => {
                            e.target.options[e.target.selectedIndex] != e.target.value ?
                                OnChangeHandler(e.target.value, e.target.options[e.target.selectedIndex].index) : null;
                        }}>
                        {options.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                </div>

                {/* <div className="select_currencies">
                    <select defaultValue={options[selection] != undefined ? options[selection].value : null} onChange={e => {
                        OnSelectCurrenciesHandler(options[selection].value, e.target.value, e.target.options[e.target.selectedIndex].index);
                    }}>
                        {options.map((o, i) => (
                            <option key={o.value} value={o.value} >{o.label}</option>
                        ))}
                    </select>
                </div> */}
            </>
        );
    }
}
export default selectModule;