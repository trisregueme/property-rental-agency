import emptystar from "../../assets/emptystar.svg"
import fullstar from "../../assets/fullstar.svg"

function Rating( {rating} ) {
    const rate = Number(rating)
    const stars =[]
    {for(let i = 1; i < 6; i++) {
        if (i > rate) {
            stars.push(<img key={emptystar.toString() + (rate - [i])} src={emptystar} alt="empty star"></img>)
        } else {
            stars.push(<img key={fullstar.toString() + (rate - [i])} src={fullstar} alt="full star"></img>)
        }
    }}
    
    return (
        <div className="ratings">
            {stars}
        </div>
    )
}

export default Rating

/*
<svg className="empty-star" xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36" fill="none">
<path d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z" fill="#E3E3E3"/>
</svg>
<svg className="full-star" xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36" fill="none">
<path d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z" fill="#FF6060"/>
</svg>
*/