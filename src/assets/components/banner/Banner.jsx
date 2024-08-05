//import banner module css
import "../banner/Banner.css";

export default function Banner({ data }) {
    return <>
        {<div className={data.alignment ? `banner ${String(data.alignment).toLowerCase()} ${String(data.page).toLowerCase()}` : `banner ${String(data.page).toLowerCase()}`}>
            {data.image ?
                <div className="banner_bgImg">
                    <img src={data.image} alt="banner Image" />
                </div>
                : null
            }
            {data.title || data.subtitle || data.cta ?
                <div className="banner_headline">
                    <div className="container">
                        <h1>{data.title}</h1>
                        <p>{data.subtitle}</p>
                        {data.cta ? <a href={data.ctaUrl}>{data.cta}</a> : null}
                    </div>
                </div>
                : null}
        </div>}
    </>
}