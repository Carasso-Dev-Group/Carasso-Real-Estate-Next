import React from 'react'
import Head from 'next/head'

import GetStarted from '../components/get-started'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Page - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dcd0be68-3e83-4828-a30b-d33f2efcc2b6/1f3b6e54-56eb-45aa-8478-823865629cac?org_if_sml=1"
          />
        </Head>
        <div className="page-main">
          <GetStarted
            link_button="/"
            link_button1="/"
            link_Top_Link="/"
            rootClassName="get-started-root-class-name2"
          ></GetStarted>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-main {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 479px) {
            .page-main {
              height: 100vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
