import React from 'react'
import Head from 'next/head'

const Tail1 = (props) => {
  return (
    <>
      <div className="tail1-container">
        <Head>
          <title>Tail1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tail1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dcd0be68-3e83-4828-a30b-d33f2efcc2b6/1f3b6e54-56eb-45aa-8478-823865629cac?org_if_sml=1"
          />
        </Head>
        <div className="tail1-inner-content">
          <div className="tail1-main">
            <div className="tail1-colmun-1">
              <div className="tail1-div">
                <div className="tail1-border">
                  <span className="tail1-top-text">
                    This is a top text with link above the title link. 
                  </span>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="tail1-top-link"
                  >
                    Read More 
                  </a>
                </div>
                <span className="tail1-title">
                  Data to enrich your online business
                </span>
                <div className="tail1-content">
                  <span className="tail1-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sodales mollis nunc, nec interdum odio rutrum non.
                  </span>
                </div>
                <div className="tail1-buttons">
                  <button className="tail1-button button">Get Started</button>
                  <button className="tail1-button1 button">Learn More</button>
                </div>
              </div>
            </div>
            <div className="tail1-colmun-2">
              <img
                src="https://images.unsplash.com/photo-1528469138590-fa12d3193392?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHxidWlsZGluZ3xlbnwwfHx8fDE2Nzg5NjYwMDU&amp;ixlib=rb-4.0.3&amp;w=1500"
                alt="image"
                className="tail1-image-banner"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tail1-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tail1-inner-content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
          }
          .tail1-main {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .tail1-colmun-1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tail1-div {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .tail1-border {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 50px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .tail1-top-text {
            color: var(--dl-color-gray-500);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
          }
          .tail1-top-link {
            color: rgb(84, 73, 225);
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .tail1-title {
            font-size: 4rem;
            margin-top: var(--dl-space-space-twounits);
            font-family: Noto Sans;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .tail1-content {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tail1-content-text {
            font-size: 36px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .tail1-buttons {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .tail1-button {
            color: var(--dl-color-gray-white);
            font-size: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: rgb(84, 73, 225);
          }
          .tail1-button1 {
            color: var(--dl-color-gray-black);
            font-size: 30px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-gray-white);
          }
          .tail1-colmun-2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .tail1-image-banner {
            width: 100%;
            display: block;
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
            object-fit: cover;
            -webkit-clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          @media (max-width: 1600px) {
            .tail1-title {
              font-size: 3.4rem;
            }
            .tail1-content-text {
              font-size: 32px;
            }
            .tail1-button {
              font-size: 28px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .tail1-button1 {
              font-size: 28px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 1200px) {
            .tail1-top-text {
              font-size: 18px;
            }
            .tail1-top-link {
              font-size: 18px;
            }
            .tail1-title {
              font-size: 2.5rem;
            }
            .tail1-content-text {
              font-size: 30px;
            }
            .tail1-button {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .tail1-button1 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 991px) {
            .tail1-top-text {
              font-size: 16px;
            }
            .tail1-top-link {
              font-size: 16px;
            }
            .tail1-title {
              font-size: 2rem;
              font-family: Noto Sans;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .tail1-content-text {
              font-size: 24px;
            }
            .tail1-button {
              font-size: 25px;
            }
            .tail1-button1 {
              font-size: 25px;
            }
          }
          @media (max-width: 767px) {
            .tail1-inner-content {
              flex-direction: column;
            }
            .tail1-colmun-1 {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .tail1-colmun-2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .tail1-colmun-1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .tail1-title {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Tail1
