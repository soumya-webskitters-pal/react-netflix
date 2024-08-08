//import banner module css
import "../banner/Banner.css";

export default function Banner({ setting: {
    title = '',
    subtitle = '',
    image = '',
    cta = '',
    ctaUrl = '#',
    extraClass = '',
    alignment = "center",
    error = "Sorry, no data found"
} }) {
    return <>
        {<div className={`banner banner_${extraClass.toLowerCase()} ${alignment.toLowerCase()}`}>
            {image ?
                <div className="banner_bgImg">
                    <img src={image} alt="banner Image" />
                </div>
                : null
            }
            {title.length || subtitle.length || cta.length ?
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