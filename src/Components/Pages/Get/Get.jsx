import "./Get.scss"
import gitlab from "../../Image/gitlab_icon.png"
import github from "../../Image/github_icon.png"
import bitbuket from "../../Image/bitbuket.png"

import typeScript from "../../Image/typeScript.png"
import python from "../../Image/python.png"
import go from "../../Image/go.png"
import rust from "../../Image/rust.png"
import java from "../../Image/java.png"
import svelte from "../../Image/svelte.png"

function Connect() {
    return (
        <>
            <section className="get">
                <div className="container">
                    <h5 className="get__title">Get started now</h5>

                    <div className="get__list">
                        <div className="get__item1">
                            <h5 className="item1__title">Connect Git repository</h5>
                            <p className="item1__text">
                                Select a Git provider to start with an existing project from any Git context.
                            </p>

                            <button className="item1__btn1"><img src={gitlab} alt="Icon" /> Continue with GitLab </button>
                            <button className="item1__btn2"><img src={github} alt="Icon" /> Continue with GitHub </button>
                            <button className="item1__btn3"><img src={bitbuket} alt="Icon" />  Continue with Bitbucket </button>

                            <p className="item1__p">
                                Or prefix any GitLab, GitHub or Bitbucket URL with
                            </p>

                            <button className="item1__button">gitpod.io/#</button>
                        </div>

                        <div className="get__item1">
                            <h5 className="item1__title">Launch an example workspace</h5>
                            <p className="item1__text">
                                Dive into one of our example workspaces
                            </p>

                            <div className="item2__box boxer2 ">
                                <img src={typeScript} alt="ICon" className="item2__img" />
                                <p className="item2__p">Node or TypeScript</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br /> 

                            
                            <div className="item2__box ">
                                <img src={python} alt="ICon" className="item2__img" />
                                <p className="item2__p">Python</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br />

                            
                            <div className="item2__box ">
                                <img src={go} alt="ICon" className="item2__img" />
                                <p className="item2__p">Go</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br />

                            
                            <div className="item2__box ">
                                <img src={rust} alt="ICon" className="item2__img" />
                                <p className="item2__p">Rust</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br />

                            
                            <div className="item2__box ">
                                <img src={java} alt="ICon" className="item2__img" />
                                <p className="item2__p">Java</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br />

                            
                            <div className="item2__box ">
                                <img src={svelte} alt="ICon" className="item2__img" />
                                <p className="item2__p">Svelte</p>
                                <button className="item2__btn">Launch workspace</button>
                            </div> <br />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Connect; 