import Aos from "aos";
import "./Text.scss"
import React from "react";
import "aos/dist/aos.css"

function Text() {
    React.useEffect(() => {
        Aos.init()
    },[])

    return (
        <>

            <section className="text" /* data-aos="fade-left"*/>
                <div className="container">
                    <h2 className="text__heading">Select project,</h2>
                    <p className="text__p">
                        check dependencies, checkout branch, view <br />
                        readme.txt, install tools, run build, run test,
                    </p>
                    <h3 className="text__heading">start coding.</h3>
                </div>
            </section>

        </>
    )
}

export default Text;