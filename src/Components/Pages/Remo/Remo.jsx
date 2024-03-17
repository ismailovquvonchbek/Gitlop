import "./Remo.scss";
import Remo_Img from "../../Image/remo-img.png";
import Chrome from "../../Image/chrome.png"
import fire from "../../Image/fire-fox.png"

function Remo() {
    return (
        <>
            <section className="remo"/* data-aos="fade-left"*/>
                <div className="container">
                    <h3 className="remo__heading">Remote-first. Secure by design.</h3>
                    <img className="remo__image" src={Remo_Img} alt="Image Remo" width={1269} height={821} />
                    <p className="remo__text">
                        You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.
                    </p>

                    <div className="buttonGroup">
                        <button className="remo__btn">
                            <img src={Chrome} alt="Chrome" />
                        </button>

                        <button className="remo__btn">
                            <img src={fire} alt="fire" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Remo