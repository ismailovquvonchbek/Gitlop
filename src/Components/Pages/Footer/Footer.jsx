import { NavLink } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../Image/footer__logo.svg"
import twitter from "../../Image/twitter.png"
import github from "../../Image/github-yellow.png"
import message from "../../Image/message.png"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <h6 className="footer__heading">Gitpod</h6>
                            <NavLink to="#" className="footer__link">Home</NavLink>
                            <NavLink to="#" className="footer__link">Features</NavLink>
                            <NavLink to="#" className="footer__link">Changelog</NavLink>
                            <NavLink to="#" className="footer__link">Self-Hosted</NavLink>
                            <NavLink to="#" className="footer__link">Gitpod vs GitHub Codespaces</NavLink>
                            <NavLink to="#" className="footer__link">Status</NavLink>
                        </li>

                        <li className="footer__item">
                            <h6 className="footer__heading">Developer</h6>
                            <NavLink to="#" className="footer__link">Getting started</NavLink>
                            <NavLink to="#" className="footer__link">Screencasts</NavLink>
                            <NavLink to="#" className="footer__link">Blog</NavLink>
                            <NavLink to="#" className="footer__link">Documentation</NavLink>
                            <NavLink to="#" className="footer__link">Report a bug</NavLink>
                            <NavLink to="#" className="footer__link">Community</NavLink>
                        </li>


                        <li className="footer__item">
                            <h6 className="footer__heading">Company</h6>
                            <NavLink to="#" className="footer__link">About</NavLink>
                            <NavLink to="#" className="footer__link">Careers</NavLink>
                            <NavLink to="#" className="footer__link">Contact</NavLink>
                            <NavLink to="#" className="footer__link">Media Kit</NavLink>
                        </li>

                        <li className="footer__item">
                            <h6 className="footer__heading">Legal</h6>
                            <NavLink to="#" className="footer__link">Imprint</NavLink>
                            <NavLink to="#" className="footer__link">Terms of Service</NavLink>
                            <NavLink to="#" className="footer__link">Privacy Policy</NavLink>
                        </li>
                    </ul>

                    <span className="footer__span"></span>

                    <div className="footer__info">
                        <div className="footer__box">
                            <img src={Logo} alt="Icon" width={24} height={24} />

                            <p className="footer__p">Copyright ©  2021  Gitpod</p>
                        </div>

                        <div className="footer__logos">
                            <img src={twitter} alt="icon" width={24} height={24} />
                            <img src={github} alt="icon" width={24} height={24} />
                            <img src={message} alt="icon" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </footer>

            <div className="noContainer__info">
                <p className="noText">
                    This website uses cookies to enhance the user experience. Read our
                    <span className="noSpan">privacy policy</span> for more info.
                </p>

                <button className="noButton">Accept Cookies</button>
            </div>
        </>
    )
}

export default Footer