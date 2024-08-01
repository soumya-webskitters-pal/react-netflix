function FeatureBox({ featureItems }) {
    console.log(featureItems);
    return <>
        {featureItems && featureItems.map((item, index) => {
            {
                item.Title ? (
                    <div className="header"><h2>{item.Title}</h2></div>
                ) : null
            }
            {
                <div className={item.Content || item.Cta && item.Image ? `left_col col-md-6` : `left_col col-12`}>
                    {
                        (
                            item.Content ? (
                                <p>{item.Content}</p>
                            ) : null
                        )
                            (item.Cta ? (
                                <a href={item.CtaURL} className="btn cta">{item.Cta}</a>
                            ) : null)
                    }
                </div>
            }
            {
                <div className={item.Content || item.Cta && item.Image ? `right_col col-md-6` : `left_col col-12`}>
                    {
                        (
                            item.Image ? (
                                <figure><img src={item.Image} alt={item.Title ? item.Title : `feature image ${index}`} /></figure>
                            ) : null
                        )
                    }
                </div>
            }
        })}
    </>
}
export default FeatureBox