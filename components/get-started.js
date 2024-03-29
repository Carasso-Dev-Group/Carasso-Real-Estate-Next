import React from 'react'

import PropTypes from 'prop-types'

const GetStarted = (props) => {
  return (
    <>
      <div className={`get-started-main ${props.rootClassName} `}>
        <div className="get-started-colmun-1">
          <div className="get-started-div">
            <div className="get-started-border">
              <span className="get-started-top-text">{props.Top_Text}</span>
              <a href={props.link_Top_Link} className="get-started-top-link">
                {props.Top_Link}
              </a>
            </div>
            <span className="get-started-title">{props.Title}</span>
            <div className="get-started-content">
              <span className="get-started-content-text">
                {props.Content_Text}
              </span>
            </div>
            <div className="get-started-buttons">
              <a href={props.link_button1} className="get-started-link button">
                {props.button}
              </a>
              <a href={props.link_button} className="get-started-link1 button">
                {props.button1}
              </a>
            </div>
          </div>
        </div>
        <div className="get-started-colmun-2">
          <img
            alt={props.Image_Banner_alt}
            src={props.Image_Banner_src}
            className="get-started-image-banner"
          />
        </div>
      </div>
      <style jsx>
        {`
          .get-started-main {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: 20px;
          }
          .get-started-colmun-1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .get-started-div {
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
          .get-started-border {
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
          .get-started-top-text {
            color: var(--dl-color-gray-500);
            font-size: 0.9rem;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
          }
          .get-started-top-link {
            color: rgb(84, 73, 225);
            height: auto;
            font-size: 0.9rem;
            font-style: normal;
            font-weight: 700;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .get-started-title {
            font-size: 4rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 1;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .get-started-content {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .get-started-content-text {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .get-started-buttons {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .get-started-link {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            padding-top: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: rgb(84, 73, 225);
          }
          .get-started-link1 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .get-started-colmun-2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-round);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-round);
          }
          .get-started-image-banner {
            width: 100%;
            display: block;
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            -webkit-clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
            border-top-left-radius: 0;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 10px;
          }
          .get-started-root-class-name {
            max-width: var(--dl-size-size-maxwidth);
          }

          @media (max-width: 1600px) {
            .get-started-title {
              font-size: 3.4rem;
            }
            .get-started-content-text {
              font-size: 32px;
            }
            .get-started-link {
              font-size: 28px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .get-started-link1 {
              font-size: 28px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 1200px) {
            .get-started-top-text {
              font-size: 18px;
            }
            .get-started-top-link {
              font-size: 18px;
            }
            .get-started-title {
              font-size: 2.5rem;
            }
            .get-started-content-text {
              font-size: 30px;
            }
            .get-started-link {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .get-started-link1 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 991px) {
            .get-started-top-text {
              font-size: 16px;
            }
            .get-started-top-link {
              font-size: 16px;
            }
            .get-started-title {
              font-size: 2rem;
              font-family: Noto Sans;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .get-started-content-text {
              font-size: 24px;
            }
            .get-started-link {
              font-size: 25px;
            }
            .get-started-link1 {
              font-size: 25px;
            }
          }
          @media (max-width: 767px) {
            .get-started-main {
              flex-direction: column;
            }
            .get-started-colmun-1 {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .get-started-colmun-2 {
              width: 100%;
            }
            .get-started-image-banner {
              height: 300px;
              clip-path: none;
              -webkit-clip-path: none;
            }
          }
          @media (max-width: 479px) {
            .get-started-colmun-1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .get-started-top-text {
              font-size: 14px;
            }
            .get-started-title {
              width: auto;
            }
            .get-started-content-text {
              font-size: 22px;
            }
            .get-started-link {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .get-started-link1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

GetStarted.defaultProps = {
  link_button1: '',
  Content_Text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales mollis nunc, nec interdum odio rutrum non.',
  Top_Text: 'This is a top text with link above the  title link. ',
  Top_Link: 'Read More ',
  Image_Banner_src:
    'https://images.unsplash.com/photo-1528469138590-fa12d3193392?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHxidWlsZGluZ3xlbnwwfHx8fDE2Nzg5NjYwMDU&ixlib=rb-4.0.3&w=1500',
  link_Top_Link: 'https://example.com',
  button: 'Get Started',
  Title: 'Data to enrich your online business',
  rootClassName: '',
  Image_Banner_alt: 'image',
  button1: 'Learn More',
  link_button: '',
}

GetStarted.propTypes = {
  link_button1: PropTypes.string,
  Content_Text: PropTypes.string,
  Top_Text: PropTypes.string,
  Top_Link: PropTypes.string,
  Image_Banner_src: PropTypes.string,
  link_Top_Link: PropTypes.string,
  button: PropTypes.string,
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Image_Banner_alt: PropTypes.string,
  button1: PropTypes.string,
  link_button: PropTypes.string,
}

export default GetStarted
