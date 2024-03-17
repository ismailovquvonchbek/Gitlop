import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../Image/GitPod.svg"
import React from "react";

export default function App() {

  const xRef = React.useRef()

  return (
    <header className="header" /* data-aos="fade-down"*/>
      <div className="container">


        <NavLink to="#">
          <img src={Logo} alt="Logo tip" />
        </NavLink>


        <ul className="nav__list" ref={xRef}>
          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">Home</NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">Pricing</NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">Blog</NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">Docs</NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">Changelog</NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/Coming" className="nav__link">We're hiring <span className="nav__span">*</span></NavLink>
          </li>
        </ul>


        <div className="header__buttons">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>


          <div className="menu__buttons" onClick={() => {
            xRef.current.classList.toggle("nav__menu")
          }}>
            <div className="hamburger">
              <input className="checkbox" type="checkbox" />
              <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                <path
                  className="lineTop line"
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="black"
                  d="M6 11L44 11"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="black"
                  d="M6 24H43"
                  className="lineMid line"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="black"
                  d="M6 37H43"
                  className="lineBottom line"
                ></path>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </header>
  )
}