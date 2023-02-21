import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import ComponentslinkLink from '../components/link'
import Work from '../components/work'
import Service from '../components/service'
import Author from '../components/author'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Item from '../components/item'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dcd0be68-3e83-4828-a30b-d33f2efcc2b6/1f3b6e54-56eb-45aa-8478-823865629cac?org_if_sml=1"
          />
        </Head>
        <div className="home-navbar">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding">
              <Link href="/">
                <a className="home-link">
                  <img
                    alt="image"
                    src="/playground_assets/logo_carasso_en_white_rgb1-1300w.png"
                    className="home-logo slide-in-bck-center"
                  />
                </a>
              </Link>
            </div>
            <div className="home-items">
              <div className="home-links">
                <span className="nav-link">Work</span>
                <span className="nav-link">Services</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Contact</span>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-code-embed">
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
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-top">
                  <div className="home-branding1">
                    <img
                      alt="image"
                      src="/playground_assets/logo_carasso_en_white_rgb1-1300w.png"
                      className="home-logo1"
                    />
                  </div>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-container01">
                  <div className="home-container02">
                    <div className="home-items1">
                      <div className="home-links1">
                        <span className="nav-link">Work</span>
                        <span className="nav-link">Services</span>
                        <span className="nav-link">About</span>
                        <span className="nav-link">Contact</span>
                      </div>
                      <div className="home-container03">
                        <button className="home-button start-button button">
                          <span className="home-text08">#TAG</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="home-container04">
                    <button className="home-button01 start-button button">
                      <span className="home-text09">#TAG</span>
                    </button>
                    <button className="home-button02 start-button button">
                      <span className="home-text10">#TAG</span>
                    </button>
                    <button className="home-button03 start-button button">
                      <span className="home-text11">#TAG</span>
                    </button>
                    <button className="home-button04 start-button button">
                      <span className="home-text12">#TAG</span>
                    </button>
                    <button className="home-button05 start-button button">
                      <span className="home-text13">#TAG</span>
                    </button>
                  </div>
                  <div className="home-container05">
                    <button className="home-button06 start-button button">
                      <span className="home-text14">#TAG</span>
                    </button>
                    <button className="home-button07 start-button button">
                      <span className="home-text15">#TAG</span>
                    </button>
                    <button className="home-button08 start-button button">
                      <span className="home-text16">#TAG</span>
                    </button>
                    <button className="home-button09 start-button button">
                      <span className="home-text17">#TAG</span>
                    </button>
                    <button className="home-button10 start-button button">
                      <span className="home-text18">#TAG</span>
                    </button>
                  </div>
                  <div className="home-container06">
                    <button className="home-button11 start-button button">
                      <span className="home-text19">#TAG</span>
                    </button>
                    <button className="home-button12 start-button button">
                      <span className="home-text20">#TAG</span>
                    </button>
                    <button className="home-button13 start-button button">
                      <span className="home-text21">#TAG</span>
                    </button>
                    <button className="home-button14 start-button button">
                      <span className="home-text22">#TAG</span>
                    </button>
                    <button className="home-button15 start-button button">
                      <span className="home-text23">#TAG</span>
                    </button>
                  </div>
                  <div className="home-container07">
                    <button className="home-button16 start-button button">
                      <span className="home-text24">#TAG</span>
                    </button>
                    <button className="home-button17 start-button button">
                      <span className="home-text25">#TAG</span>
                    </button>
                    <button className="home-button18 start-button button">
                      <span className="home-text26">#TAG</span>
                    </button>
                    <button className="home-button19 start-button button">
                      <span className="home-text27">#TAG</span>
                    </button>
                    <button className="home-button20 start-button button">
                      <span className="home-text28">#TAG</span>
                    </button>
                  </div>
                  <div className="home-container08">
                    <button className="home-button21 start-button button">
                      <span className="home-text29">#TAG</span>
                    </button>
                    <button className="home-button22 start-button button">
                      <span className="home-text30">#TAG</span>
                    </button>
                    <button className="home-button23 start-button button">
                      <span className="home-text31">#TAG</span>
                    </button>
                    <button className="home-button24 start-button button">
                      <span className="home-text32">#TAG</span>
                    </button>
                    <button className="home-button25 start-button button">
                      <span className="home-text33">#TAG</span>
                    </button>
                  </div>
                  <div className="home-container09">
                    <button className="home-button26 start-button button">
                      <span className="home-text34">#TAG</span>
                    </button>
                    <button className="home-button27 start-button button">
                      <span className="home-text35">#TAG</span>
                    </button>
                    <button className="home-button28 start-button button">
                      <span className="home-text36">#TAG</span>
                    </button>
                    <button className="home-button29 start-button button">
                      <span className="home-text37">#TAG</span>
                    </button>
                    <button className="home-button30 start-button button">
                      <span className="home-text38">#TAG</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <header className="home-hero">
          <div className="home-header">
            <h1 className="home-title">Design the change you wanna see</h1>
            <p className="home-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod consectetur tempor incididunt.
            </p>
          </div>
        </header>
        <div className="home-video">
          <video
            src="https://en.carasso-nadlan.co.il/wp-content/uploads/2022/08/carasso-mobile.mp4"
            loop
            muted
            poster="/playground_assets/video-preview-1500w.png"
            preload="auto"
            autoPlay
            playsInline
            className="home-video1"
          ></video>
        </div>
        <div className="home-description1 slide-in-bck-center">
          <div className="home-content">
            <div className="home-text39">
              <p className="home-paragraph">
                <span>Carasso Real Estate</span>
                <br></br>
                <span>
                  Carasso Real Estate, a division of the Carasso Group, is
                  renowned for its dealings in all primary realms of Israeli
                  real estate: residential, commercial, office buildings, and
                  hi-tech facilities. The company’s unwavering dedication to
                  dependability and integrity pervades all activities and
                  relationships with clients, business partners, and suppliers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="home-paragraph1">
                This mandate, combined with the company’s financial solidity,
                grants Carasso Real Estate’s clients and partners the security
                for rewarding, productive business dealings.
              </p>
            </div>
            <button className="start-button button home-button31">
              <span className="home-text43">Start a project</span>
            </button>
          </div>
        </div>
        <div className="home-featured">
          <div className="home-header1">
            <h2 className="heading">Featured Work</h2>
            <div className="home-link1">
              <ComponentslinkLink
                Caption="100+ Projects"
                rootClassName="link-root-class-name"
              ></ComponentslinkLink>
            </div>
          </div>
          <div className="home-list">
            <Work></Work>
            <Work
              Image="/playground_assets/work%20%232-1500w.png"
              Title="ZENG"
            ></Work>
            <Work
              Image="/playground_assets/work%20%233-1500w.png"
              Title="YORGU"
            ></Work>
          </div>
        </div>
        <div className="home-client">
          <p className="home-text44">
            Become a client aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat.
          </p>
          <button className="start-button button home-button32">
            <span className="home-text45">Start a project</span>
          </button>
        </div>
        <div className="home-services">
          <div className="home-header2">
            <h2 className="heading">SERVICES</h2>
          </div>
          <div className="home-grid">
            <Service rootClassName="service-root-class-name"></Service>
            <Service
              Title="Strategy"
              rootClassName="service-root-class-name1"
            ></Service>
            <Service
              Title="Marketing"
              rootClassName="service-root-class-name5"
            ></Service>
            <Service
              Title="Copywriting"
              rootClassName="service-root-class-name2"
            ></Service>
            <Service
              Title="UI / UX"
              rootClassName="service-root-class-name3"
            ></Service>
            <Service
              Title="Web Development"
              rootClassName="service-root-class-name4"
            ></Service>
          </div>
        </div>
        <div className="home-about">
          <div className="home-header3">
            <h2 className="home-company">AGNCY</h2>
            <span className="home-description2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </span>
            <Author></Author>
          </div>
          <div className="home-statistics">
            <button className="start-button button home-button33">
              <span className="home-text46">Join our team</span>
            </button>
            <div className="home-statistic-list">
              <Statistic rootClassName="statistic-root-class-name3"></Statistic>
              <Statistic
                Value="60"
                Caption="Awards"
                rootClassName="statistic-root-class-name"
              ></Statistic>
              <Statistic
                Value="15K"
                Caption="Monthly Visits"
                rootClassName="statistic-root-class-name4"
              ></Statistic>
              <Statistic
                Value="70+"
                Caption="People on board"
                rootClassName="statistic-root-class-name1"
              ></Statistic>
              <Statistic
                Value="300+"
                Caption="Finished projects"
                rootClassName="statistic-root-class-name5"
              ></Statistic>
              <Statistic
                Value="1M"
                Caption="Active Users"
                rootClassName="statistic-root-class-name2"
              ></Statistic>
            </div>
          </div>
          <div className="home-clients">
            <div className="home-header4">
              <h2 className="home-title3 heading">Our Clients</h2>
            </div>
            <div className="home-grid1">
              <div className="home-column">
                <Client
                  Avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@zeng"
                  rootClassName="client-root-class-name"
                ></Client>
                <Client
                  Quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                  Author="Coco White"
                  Avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@white_co"
                  rootClassName="client-root-class-name1"
                ></Client>
              </div>
              <div className="home-column1">
                <Client
                  Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  Author="Jennifer Marle"
                  Avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@motech"
                ></Client>
                <Client
                  Quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  Author="Maria Martinez"
                  Avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  Mention="@yorgu.official"
                ></Client>
              </div>
            </div>
          </div>
          <div className="home-client-list">
            <div className="home-header5">
              <h2 className="home-title4 heading">Client list</h2>
            </div>
            <div className="home-row">
              <span className="home-text47">2022</span>
              <div className="home-list1">
                <Item></Item>
                <Item
                  Tags="Webdevelopment / Marketing"
                  Title="Aliquaduis"
                ></Item>
                <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
                <Item Tags="UI / UX" Title="Commodo"></Item>
                <Item Tags="Webdevelopment" Title="Veniam"></Item>
                <Item Tags="Webdevelopment / Marketing" Title="Fugiat"></Item>
              </div>
            </div>
            <div className="home-row1">
              <span className="home-text48">2021</span>
              <div className="home-list2">
                <Item></Item>
                <Item
                  Tags="Webdevelopment / Marketing"
                  Title="Aliquaduis"
                ></Item>
                <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-information">
            <div className="home-details">
              <div className="home-header6">
                <div className="home-branding2">
                  <img
                    alt="image"
                    src="/playground_assets/logo.svg"
                    className="home-logo2"
                  />
                  <span className="home-company1">AGNCY</span>
                </div>
                <div className="home-location">
                  <span className="home-caption">Office</span>
                  <span className="home-value">
                    132, My Street, Bigtown BG23 4YZUnited States
                  </span>
                </div>
              </div>
              <div className="home-location1">
                <span className="home-caption1">Let&apos;s talk</span>
                <span className="home-value1">sayhello@agncy.address</span>
              </div>
              <button className="home-button34 start-button button">
                <span className="home-text49">Start a project</span>
              </button>
            </div>
            <div className="home-links2">
              <span className="social">Instagram</span>
              <span className="social">Linkedin</span>
              <span className="social">Twitter</span>
              <span className="social">Dribbble</span>
              <span className="social">Behance</span>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/footer-1400w.png"
            className="home-image"
          />
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            width: 100%;
            height: 90px;
            object-fit: contain;
            text-decoration: none;
          }
          .home-logo:hover {
            transform: rotate(360deg);
          }
          .home-items {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo1 {
            width: 100%;
            height: 80px;
            object-fit: contain;
          }
          .home-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            fill: var(--dl-color-gray-white);
            width: 50px;
            height: 50px;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container02 {
            width: 211px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-items1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links1 {
            gap: var(--dl-space-space-threeunits);
            width: 130px;
            height: 247px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-button {
            background-color: var(--dl-color-gray-500);
          }
          .home-text08 {
            color: rgb(255, 255, 255);
          }
          .home-container04 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            color: rgb(255, 255, 255);
          }
          .home-button02 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
          }
          .home-button03 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text11 {
            color: rgb(255, 255, 255);
          }
          .home-button04 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
          }
          .home-button05 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text13 {
            color: rgb(255, 255, 255);
          }
          .home-container05 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            color: rgb(255, 255, 255);
          }
          .home-button07 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
          }
          .home-button08 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text16 {
            color: rgb(255, 255, 255);
          }
          .home-button09 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
          }
          .home-button10 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
          }
          .home-container06 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text19 {
            color: rgb(255, 255, 255);
          }
          .home-button12 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text20 {
            color: rgb(255, 255, 255);
          }
          .home-button13 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text21 {
            color: rgb(255, 255, 255);
          }
          .home-button14 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text22 {
            color: rgb(255, 255, 255);
          }
          .home-button15 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
          }
          .home-container07 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: rgb(255, 255, 255);
          }
          .home-button17 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text25 {
            color: rgb(255, 255, 255);
          }
          .home-button18 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text26 {
            color: rgb(255, 255, 255);
          }
          .home-button19 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
          }
          .home-button20 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text28 {
            color: rgb(255, 255, 255);
          }
          .home-container08 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: rgb(255, 255, 255);
          }
          .home-button22 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
          }
          .home-button23 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text31 {
            color: rgb(255, 255, 255);
          }
          .home-button24 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text32 {
            color: rgb(255, 255, 255);
          }
          .home-button25 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text33 {
            color: rgb(255, 255, 255);
          }
          .home-container09 {
            width: 151px;
            height: 431px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text34 {
            color: rgb(255, 255, 255);
          }
          .home-button27 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #552352;
          }
          .home-text35 {
            color: rgb(255, 255, 255);
          }
          .home-button28 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #232755;
          }
          .home-text36 {
            color: rgb(255, 255, 255);
          }
          .home-button29 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #555223;
          }
          .home-text37 {
            color: rgb(255, 255, 255);
          }
          .home-button30 {
            margin-bottom: var(--dl-space-space-unit);
            background-color: #235255;
          }
          .home-text38 {
            color: rgb(255, 255, 255);
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: #151515;
          }
          .home-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-title {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 128px;
            max-width: 895px;
            font-weight: normal;
            line-height: 115px;
            text-transform: uppercase;
          }
          .home-description {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-video {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video1 {
            flex: 1;
            width: 100%;
          }
          .home-description1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-end;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            border-top-width: 1px;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text39 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            font-size: 32px;
            line-height: 48px;
          }
          .home-paragraph1 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-text43 {
            color: #ffffff;
          }
          .home-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-link1 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-client {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-text44 {
            font-size: 32px;
            max-width: 900px;
            line-height: 48px;
          }
          .home-text45 {
            color: #ffffff;
          }
          .home-services {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-grid {
            flex: 1;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: auto auto auto;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #151515;
          }
          .home-header3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-company {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }
          .home-description2 {
            color: #ffffff;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 200px;
            justify-content: space-between;
          }
          .home-text46 {
            color: rgb(255, 255, 255);
          }
          .home-statistic-list {
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto;
          }
          .home-clients {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title3 {
            color: rgb(255, 255, 255);
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-column {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-column1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-client-list {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title4 {
            color: rgb(255, 255, 255);
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text47 {
            color: #999999;
            font-size: 24px;
            line-height: 36px;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text48 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-footer {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 60px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-details {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo2 {
            width: 50px;
            filter: brightness(0) saturate(100%) invert(27%) sepia(9%)
              saturate(2615%) hue-rotate(90deg) brightness(92%) contrast(87%);
            height: 50px;
            object-fit: cover;
          }
          .home-company1 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .home-location {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption {
            color: #151515;
            font-size: 24px;
            line-height: 36px;
          }
          .home-value {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-location1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-value1 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-button34 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-text49 {
            color: rgb(255, 255, 255);
          }
          .home-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image {
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .home-logo1 {
              width: 100%;
              height: 80px;
            }
            .home-container02 {
              width: 136px;
            }
          }
          @media (max-width: 1200px) {
            .home-logo1 {
              width: 100%;
              height: 80px;
            }
            .home-container02 {
              width: 162px;
              height: 433px;
            }
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
            }
            .home-container02 {
              width: 144px;
            }
            .home-button {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text08 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button01 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text09 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button02 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text10 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button03 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text11 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button04 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text12 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button05 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text13 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button06 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text14 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button07 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text15 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button08 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text16 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button09 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text17 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button10 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text18 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button11 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text19 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button12 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text20 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button13 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text21 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button14 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text22 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button15 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text23 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button16 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text24 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button17 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text25 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button18 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text26 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button19 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text27 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button20 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text28 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button21 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text29 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button22 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text30 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button23 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text31 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button24 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text32 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button25 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text33 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button26 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text34 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button27 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text35 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button28 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text36 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button29 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text37 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button30 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text38 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .home-title {
              font-size: 40px;
              line-height: 36px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description1 {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text39 {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 18px;
              line-height: 27px;
            }
            .home-paragraph1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button31 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text43 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-link1 {
              display: none;
            }
            .home-client {
              padding-top: var(--dl-space-space-threeunits);
              border-color: transparent;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text44 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button32 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text45 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-services {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-top-width: 1px;
            }
            .home-grid {
              display: flex;
              grid-gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header3 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-company {
              font-size: 30px;
              line-height: 27px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-statistics {
              gap: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-button33 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text46 {
              font-style: normal;
              font-weight: 500;
            }
            .home-statistic-list {
              width: 100%;
              grid-gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-clients {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-header4 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-grid1 {
              grid-gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-client-list {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header5 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row {
              flex-direction: column;
            }
            .home-text47 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list1 {
              width: 100%;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-text48 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list2 {
              width: 100%;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-information {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .home-details {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-logo2 {
              width: 25px;
              height: 25px;
            }
            .home-company1 {
              font-size: 15px;
              line-height: 18px;
            }
            .home-caption {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button34 {
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text49 {
              font-style: normal;
              font-weight: 500;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image {
              flex: 0 0 auto;
              width: 100%;
              height: 320px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-logo {
              width: 290px;
              height: 99px;
            }
            .home-items {
              display: none;
            }
            .home-container01 {
              width: 664px;
            }
            .home-container02 {
              width: 152px;
            }
            .home-items1 {
              width: 137px;
            }
            .home-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
            }
            .home-logo {
              width: 225px;
              height: 84px;
            }
            .home-burger-menu {
              width: 70px;
              height: 54px;
            }
            .home-code-embed {
              width: 100%;
              height: 100%;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-top {
              padding-top: var(--dl-space-space-unit);
            }
            .home-logo1 {
              width: 220px;
              height: 56px;
            }
            .home-menu-close {
              width: 84px;
              height: 69px;
            }
            .home-icon {
              width: 50px;
              height: 50px;
              display: none;
              margin-right: 20px;
              margin-bottom: 10px;
            }
            .home-container01 {
              width: 100%;
            }
            .home-container02 {
              width: 169px;
              height: 376px;
            }
            .home-items1 {
              width: 169px;
              height: 367px;
            }
            .home-links1 {
              height: 230px;
            }
            .home-container03 {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-button {
              width: 100%;
            }
            .home-container04 {
              width: 50%;
              height: 375px;
              padding: var(--dl-space-space-halfunit);
            }
            .home-button01 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button02 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button03 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button04 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button05 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container05 {
              width: 50%;
              height: 375px;
              padding: var(--dl-space-space-halfunit);
            }
            .home-button06 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button07 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button08 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button09 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button10 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container06 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .home-button11 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button12 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button13 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button14 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button15 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container07 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .home-button16 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button17 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button18 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button19 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button20 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container08 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .home-button21 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button22 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button23 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button24 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button25 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container09 {
              width: 50%;
              height: 375px;
              display: none;
              padding: var(--dl-space-space-unit);
            }
            .home-button26 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button27 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button28 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button29 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-button30 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-paragraph {
              line-height: 27px;
            }
            .home-paragraph1 {
              line-height: 27px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
