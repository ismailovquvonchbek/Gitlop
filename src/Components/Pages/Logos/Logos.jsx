import "./Logos.scss";
import gitlab from "../../Image/gitLab.png"
import freeCode from "../../Image/freeCode.png"
import dwave from "../../Image/dwave.png"
import google from "../../Image/google.png"
import amazon from "../../Image/amazon.png"
import facebook from "../../Image/facebook.png"
import uber from "../../Image/uber.png"
import openai from "../../Image/openai.png"
import intel from "../../Image/intel.png"
import theia from "../../Image/thei.png"
import code from "../../Image/code_instut.png"
import greek from "../../Image/greek.png"

function Logos() {
    return (
        <>
            <section className="logos"/* data-aos="fade-left"*/>
                <div className="container">

                    <div className="logo__info">
                        <img className="logo__images" src={gitlab} alt="Icon" />
                        <img className="logo__images" src={freeCode} alt="Icon" />
                        <img className="logo__images" src={dwave} alt="Icon" />
                        <img className="logo__images" src={google} alt="Icon" />
                        <img className="logo__images" src={amazon} alt="Icon" />
                        <img className="logo__images" src={facebook} alt="Icon" />
                        <img className="logo__images" src={uber} alt="Icon" />
                        <img className="logo__images" src={openai} alt="Icon" />
                        <img className="logo__images" src={intel} alt="Icon" />
                        <img className="logo__images" src={theia} alt="Icon" />
                        <img className="logo__images" src={code} alt="Icon" />
                        <img className="logo__images" src={greek} alt="Icon" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Logos;