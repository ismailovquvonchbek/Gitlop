import "./Hero.scss"
import HeroBig from "../../Image/hero__img.png"
import React from "react"
// import Aos from "aos"
import "aos/dist/aos.css"
import GitLab from "../../Image/gitlab.svg"
import GitHub from "../../Image/github.svg"
import Code from "../../Image/code.svg"

function Hero() {
    // React.useEffect(() => {
    //     Aos.init()
    // }, [])

    return (
        <>

            <section className="hero"/* data-aos="fade-right"*/>
                <div className="container">
                    <div className="hero__list">
                        <h1 className="hero__heading">Always <br /> Ready to Code.</h1>
                        <p className="hero__text">
                            Spin up fresh, automated dev environments
                            for each task, in the cloud, in seconds.
                        </p>

                        <div className="hero__item">
                            <div className="hero__info">
                                <button className="hero__button">Try Now</button>

                                <div className="hero__shares">

                                    <img className="hero__icon" src={GitLab} alt="Icon" />
                                    <img className="hero__icon" src={GitHub} alt="Icon" />
                                    <img className="hero__icon" src={Code} alt="Icon" />

                                </div>
                            </div>

                            <p className="hero__p">
                                Open a workspace. <br />
                                Start from any Git context.
                            </p>
                        </div>

                    </div>

                    <img className="hero__img" src={HeroBig} alt="Room img" width={700} height={672} />

                </div>
            </section>

        </>
    )

}

export default Hero