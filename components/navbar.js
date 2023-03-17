import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className="navbar-navbar">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div className="navbar-branding">
            <Link href="/">
              <a className="navbar-link">
                <img
                  alt={props.Logo_alt}
                  src={props.Logo_src}
                  className="navbar-logo slide-in-bck-center"
                />
              </a>
            </Link>
          </div>
          <div className="navbar-items">
            <div className="navbar-links">
              <span className="nav-link">{props.text}</span>
              <span className="nav-link">{props.text1}</span>
              <span className="nav-link">{props.text2}</span>
              <span className="nav-link">{props.text3}</span>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <div className="navbar-code-embed">
              <DangerousHTML
                html={`<button class="hamburger hamburger--arrow-r" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>

<script>
  var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }
</script>`}
              ></DangerousHTML>
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav"
            >
              <div className="navbar-top">
                <div className="navbar-branding1">
                  <img
                    alt={props.Logo_alt1}
                    src={props.Logo_src1}
                    className="navbar-logo1"
                  />
                </div>
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-container">
                <div className="navbar-container1">
                  <div className="navbar-items1">
                    <div className="navbar-links1">
                      <span className="nav-link">{props.text34}</span>
                      <span className="nav-link">{props.text35}</span>
                      <span className="nav-link">{props.text36}</span>
                      <span className="nav-link">{props.text37}</span>
                    </div>
                    <div className="navbar-container2">
                      <button className="navbar-button start-button button">
                        <span className="navbar-text08">{props.text38}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="navbar-container3">
                  <button className="navbar-button01 start-button button">
                    <span className="navbar-text09">{props.text4}</span>
                  </button>
                  <button className="navbar-button02 start-button button">
                    <span className="navbar-text10">{props.text5}</span>
                  </button>
                  <button className="navbar-button03 start-button button">
                    <span className="navbar-text11">{props.text6}</span>
                  </button>
                  <button className="navbar-button04 start-button button">
                    <span className="navbar-text12">{props.text7}</span>
                  </button>
                  <button className="navbar-button05 start-button button">
                    <span className="navbar-text13">{props.text8}</span>
                  </button>
                </div>
                <div className="navbar-container4">
                  <button className="navbar-button06 start-button button">
                    <span className="navbar-text14">{props.text9}</span>
                  </button>
                  <button className="navbar-button07 start-button button">
                    <span className="navbar-text15">{props.text10}</span>
                  </button>
                  <button className="navbar-button08 start-button button">
                    <span className="navbar-text16">{props.text11}</span>
                  </button>
                  <button className="navbar-button09 start-button button">
                    <span className="navbar-text17">{props.text12}</span>
                  </button>
                  <button className="navbar-button10 start-button button">
                    <span className="navbar-text18">{props.text13}</span>
                  </button>
                </div>
                <div className="navbar-container5">
                  <button className="navbar-button11 start-button button">
                    <span className="navbar-text19">{props.text14}</span>
                  </button>
                  <button className="navbar-button12 start-button button">
                    <span className="navbar-text20">{props.text15}</span>
                  </button>
                  <button className="navbar-button13 start-button button">
                    <span className="navbar-text21">{props.text16}</span>
                  </button>
                  <button className="navbar-button14 start-button button">
                    <span className="navbar-text22">{props.text17}</span>
                  </button>
                  <button className="navbar-button15 start-button button">
                    <span className="navbar-text23">{props.text18}</span>
                  </button>
                </div>
                <div className="navbar-container6">
                  <button className="navbar-button16 start-button button">
                    <span className="navbar-text24">{props.text19}</span>
                  </button>
                  <button className="navbar-button17 start-button button">
                    <span className="navbar-text25">{props.text20}</span>
                  </button>
                  <button className="navbar-button18 start-button button">
                    <span className="navbar-text26">{props.text21}</span>
                  </button>
                  <button className="navbar-button19 start-button button">
                    <span className="navbar-text27">{props.text22}</span>
                  </button>
                  <button className="navbar-button20 start-button button">
                    <span className="navbar-text28">{props.text23}</span>
                  </button>
                </div>
                <div className="navbar-container7">
                  <button className="navbar-button21 start-button button">
                    <span className="navbar-text29">{props.text24}</span>
                  </button>
                  <button className="navbar-button22 start-button button">
                    <span className="navbar-text30">{props.text25}</span>
                  </button>
                  <button className="navbar-button23 start-button button">
                    <span className="navbar-text31">{props.text26}</span>
                  </button>
                  <button className="navbar-button24 start-button button">
                    <span className="navbar-text32">{props.text27}</span>
                  </button>
                  <button className="navbar-button25 start-button button">
                    <span className="navbar-text33">{props.text28}</span>
                  </button>
                </div>
                <div className="navbar-container8">
                  <button className="navbar-button26 start-button button">
                    <span className="navbar-text34">{props.text29}</span>
                  </button>
                  <button className="navbar-button27 start-button button">
                    <span className="navbar-text35">{props.text30}</span>
                  </button>
                  <button className="navbar-button28 start-button button">
                    <span className="navbar-text36">{props.text31}</span>
                  </button>
                  <button className="navbar-button29 start-button button">
                    <span className="navbar-text37">{props.text32}</span>
                  </button>
                  <button className="navbar-button30 start-button button">
                    <span className="navbar-text38">{props.text33}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-branding {
            gap: var(--dl-space-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-logo {
            width: 100%;
            height: 90px;
            object-fit: contain;
            text-decoration: none;
          }
          .navbar-logo:hover {
            transform: rotate(360deg);
          }
          .navbar-items {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-branding1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-logo1 {
            width: 100%;
            height: 80px;
            object-fit: contain;
          }
          .navbar-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon {
            fill: var(--dl-color-gray-white);
            width: 50px;
            height: 50px;
          }
          .navbar-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-container1 {
            width: 211px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-items1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-threeunits);
            width: 130px;
            height: 247px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .navbar-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-button {
            background-color: var(--dl-color-gray-500);
          }
          .navbar-text08 {
            color: rgb(255, 255, 255);
          }
          .navbar-container3 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text09 {
            color: rgb(255, 255, 255);
          }
          .navbar-button02 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text10 {
            color: rgb(255, 255, 255);
          }
          .navbar-button03 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text11 {
            color: rgb(255, 255, 255);
          }
          .navbar-button04 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text12 {
            color: rgb(255, 255, 255);
          }
          .navbar-button05 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text13 {
            color: rgb(255, 255, 255);
          }
          .navbar-container4 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text14 {
            color: rgb(255, 255, 255);
          }
          .navbar-button07 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text15 {
            color: rgb(255, 255, 255);
          }
          .navbar-button08 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text16 {
            color: rgb(255, 255, 255);
          }
          .navbar-button09 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text17 {
            color: rgb(255, 255, 255);
          }
          .navbar-button10 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text18 {
            color: rgb(255, 255, 255);
          }
          .navbar-container5 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text19 {
            color: rgb(255, 255, 255);
          }
          .navbar-button12 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text20 {
            color: rgb(255, 255, 255);
          }
          .navbar-button13 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text21 {
            color: rgb(255, 255, 255);
          }
          .navbar-button14 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text22 {
            color: rgb(255, 255, 255);
          }
          .navbar-button15 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text23 {
            color: rgb(255, 255, 255);
          }
          .navbar-container6 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text24 {
            color: rgb(255, 255, 255);
          }
          .navbar-button17 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text25 {
            color: rgb(255, 255, 255);
          }
          .navbar-button18 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text26 {
            color: rgb(255, 255, 255);
          }
          .navbar-button19 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text27 {
            color: rgb(255, 255, 255);
          }
          .navbar-button20 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text28 {
            color: rgb(255, 255, 255);
          }
          .navbar-container7 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text29 {
            color: rgb(255, 255, 255);
          }
          .navbar-button22 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text30 {
            color: rgb(255, 255, 255);
          }
          .navbar-button23 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text31 {
            color: rgb(255, 255, 255);
          }
          .navbar-button24 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text32 {
            color: rgb(255, 255, 255);
          }
          .navbar-button25 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text33 {
            color: rgb(255, 255, 255);
          }
          .navbar-container8 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .navbar-button26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text34 {
            color: rgb(255, 255, 255);
          }
          .navbar-button27 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .navbar-text35 {
            color: rgb(255, 255, 255);
          }
          .navbar-button28 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .navbar-text36 {
            color: rgb(255, 255, 255);
          }
          .navbar-button29 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .navbar-text37 {
            color: rgb(255, 255, 255);
          }
          .navbar-button30 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .navbar-text38 {
            color: rgb(255, 255, 255);
          }
          @media (max-width: 1600px) {
            .navbar-logo1 {
              width: 100%;
              height: 80px;
            }
            .navbar-container1 {
              width: 136px;
            }
          }
          @media (max-width: 1200px) {
            .navbar-logo1 {
              width: 100%;
              height: 80px;
            }
            .navbar-container1 {
              width: 162px;
              height: 433px;
            }
          }
          @media (max-width: 991px) {
            .navbar-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
            }
            .navbar-container1 {
              width: 144px;
            }
            .navbar-button {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text08 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button01 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text09 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button02 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text10 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button03 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text11 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button04 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text12 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button05 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text13 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button06 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text14 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button07 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text15 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button08 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text16 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button09 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text17 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button10 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text18 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button11 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text19 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button12 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text20 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button13 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text21 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button14 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text22 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button15 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text23 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button16 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text24 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button17 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text25 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button18 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text26 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button19 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text27 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button20 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text28 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button21 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text29 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button22 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text30 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button23 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text31 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button24 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text32 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button25 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text33 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button26 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text34 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button27 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text35 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button28 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text36 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button29 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text37 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-button30 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .navbar-text38 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-logo {
              width: 290px;
              height: 99px;
            }
            .navbar-items {
              display: none;
            }
            .navbar-container {
              width: 664px;
            }
            .navbar-container1 {
              width: 152px;
            }
            .navbar-items1 {
              width: 137px;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
            }
            .navbar-logo {
              width: 225px;
              height: 84px;
            }
            .navbar-burger-menu {
              width: 70px;
              height: 54px;
            }
            .navbar-code-embed {
              width: 100%;
              height: 100%;
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
            .navbar-top {
              padding-top: var(--dl-space-space-unit);
            }
            .navbar-logo1 {
              width: 220px;
              height: 56px;
            }
            .navbar-menu-close {
              width: 84px;
              height: 69px;
            }
            .navbar-icon {
              width: 50px;
              height: 50px;
              display: none;
              margin-right: 20px;
              margin-bottom: 10px;
            }
            .navbar-container {
              width: 100%;
            }
            .navbar-container1 {
              width: 169px;
              height: 376px;
            }
            .navbar-items1 {
              width: 169px;
              height: 367px;
            }
            .navbar-links1 {
              height: 230px;
            }
            .navbar-container2 {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .navbar-button {
              width: 100%;
            }
            .navbar-container3 {
              width: 50%;
              height: 375px;
              padding: var(--dl-space-space-halfunit);
            }
            .navbar-button01 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button02 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button03 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button04 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button05 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-container4 {
              width: 50%;
              height: 375px;
              padding: var(--dl-space-space-halfunit);
            }
            .navbar-button06 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button07 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button08 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button09 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button10 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-container5 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .navbar-button11 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button12 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button13 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button14 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button15 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-container6 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .navbar-button16 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button17 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button18 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button19 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button20 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-container7 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .navbar-button21 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button22 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button23 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button24 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button25 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-container8 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .navbar-button26 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button27 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button28 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button29 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-button30 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text1: 'Services',
  text30: '#TAG',
  text14: '#TAG',
  text31: '#TAG',
  text29: '#TAG',
  text34: 'Work',
  text27: '#TAG',
  text: 'Work',
  text5: '#TAG',
  Logo_src: '/playground_assets/logo_carasso_en_white_rgb1-1300w.png',
  text11: '#TAG',
  text25: '#TAG',
  text4: '#TAG',
  text20: '#TAG',
  text23: '#TAG',
  text6: '#TAG',
  text37: 'Contact',
  text15: '#TAG',
  text19: '#TAG',
  text7: '#TAG',
  text3: 'Contact',
  Logo_alt: 'image',
  text17: '#TAG',
  Logo_alt1: 'image',
  text16: '#TAG',
  text24: '#TAG',
  text36: 'About',
  text21: '#TAG',
  text2: 'About',
  text13: '#TAG',
  text26: '#TAG',
  text8: '#TAG',
  text28: '#TAG',
  text32: '#TAG',
  text10: '#TAG',
  text38: '#TAG',
  Logo_src1: '/playground_assets/logo_carasso_en_white_rgb1-1300w.png',
  text9: '#TAG',
  text33: '#TAG',
  text18: '#TAG',
  text35: 'Services',
  text12: '#TAG',
  text22: '#TAG',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  text30: PropTypes.string,
  text14: PropTypes.string,
  text31: PropTypes.string,
  text29: PropTypes.string,
  text34: PropTypes.string,
  text27: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  Logo_src: PropTypes.string,
  text11: PropTypes.string,
  text25: PropTypes.string,
  text4: PropTypes.string,
  text20: PropTypes.string,
  text23: PropTypes.string,
  text6: PropTypes.string,
  text37: PropTypes.string,
  text15: PropTypes.string,
  text19: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
  Logo_alt: PropTypes.string,
  text17: PropTypes.string,
  Logo_alt1: PropTypes.string,
  text16: PropTypes.string,
  text24: PropTypes.string,
  text36: PropTypes.string,
  text21: PropTypes.string,
  text2: PropTypes.string,
  text13: PropTypes.string,
  text26: PropTypes.string,
  text8: PropTypes.string,
  text28: PropTypes.string,
  text32: PropTypes.string,
  text10: PropTypes.string,
  text38: PropTypes.string,
  Logo_src1: PropTypes.string,
  text9: PropTypes.string,
  text33: PropTypes.string,
  text18: PropTypes.string,
  text35: PropTypes.string,
  text12: PropTypes.string,
  text22: PropTypes.string,
}

export default Navbar
