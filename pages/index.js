import React from 'react'
import Head from 'next/head'

import GetStarted from '../components/get-started'

const Tail1 = (props) => {
  return (
    <>
      <div className="tail1-container">
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
        <div className="tail1-inner-content">
          <div className="tail1-container1">
            <GetStarted
              link_button="/page"
              link_button1="/page"
              link_Top_Link="/page"
              rootClassName="get-started-root-class-name"
            ></GetStarted>
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
          .tail1-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          @media (max-width: 767px) {
            .tail1-inner-content {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Tail1
