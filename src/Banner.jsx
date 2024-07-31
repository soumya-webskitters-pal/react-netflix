import './assets/css/Banner.css';
function Banner({ title, subtitle, image, cta, ctaUrl, alignment, page }) {
    return <>
        {<div className={alignment ? `banner ${String(alignment).toLowerCase()} ${String(page).toLowerCase()}` : `banner ${String(page).toLowerCase()}`}>
            {image ?
                <div className="banner_bgImg">
                    <img src={image} alt="banner Image" />
                </div>
                : null
            }
            {title || subtitle || cta ?
                <div className="banner_headline">
                    <div className="container">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        {cta ? <a href={ctaUrl}>{cta}</a> : null}
                    </div>
                </div>
                : null}
        </div>}
    </>
}
export default Banner