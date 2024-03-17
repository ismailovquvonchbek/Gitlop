import "./Think.scss";
import Image from "../../Image/think__img.png"

function Think() {
    return (
        <>
            <section className="think"/* data-aos="fade-right"*/>
                <div className="container">
                    <div className="think__info">
                        <h3 className="think__heading">Think CI/CD for dev environments</h3>
                        <p className="think__text">
                            We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.
                        </p>

                        <div className="think__buttonGroup">
                            <button className="think__btn">More on prebuilds</button>
                            <button className="think__btn">Documentation</button>
                        </div>
                    </div>

                    <img className="think__img" src={Image} alt="Image" />
                </div>
            </section>
        </>
    )
}

export default Think