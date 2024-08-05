//import Feature module css
import "../featureBox/Feature.css";

export default function FeatureBox({ featureItems, alignment, error }) {
    // console.log(featureItems);
    return <>
        {
            featureItems.Caption ? (
                <div className={alignment ? (
                    alignment === "center" ? "header center" : (
                        alignment === "left" ? "header right" : "header left"
                    )
                ) : "header"}>
                    <h2>{featureItems.Caption}</h2>
                    {featureItems.SubText ? <p>{featureItems.SubText}</p> : null}
                </div>
            ) : (
                <div className={alignment ? (`row featureRow ${String(alignment).toLowerCase()}`) : "row featureRow"}>
                    {featureItems.Title || featureItems.Content || featureItems.Cta ? (
                        <div className={featureItems.Title || featureItems.Content || featureItems.Cta && featureItems.Image ? "left_col col-md-6" : "content_col col-12"}>
                            {
                                featureItems.Title ? (
                                    <h3>{featureItems.Title}</h3>
                                ) : null
                            }
                            {
                                featureItems.Content ? (
                                    <p>{featureItems.Content}</p>
                                ) : null
                            }
                            {
                                featureItems.Cta ? (
                                    <a href={featureItems.CtaURL} className="btn cta">{featureItems.Cta}</a>
                                ) : null
                            }
                        </div>
                    ) : null}
                    {
                        featureItems.Image ? (
                            <div className={featureItems.Content || featureItems.Cta && featureItems.Image ? "right_col col-md-6" : "img_col col-12"}>
                                <figure><img src={featureItems.Image} alt={featureItems.Title ? featureItems.Title : `feature image ${index}`} /></figure>
                            </div>
                        ) : null
                    }
                </div>
            )}
    </>
} 