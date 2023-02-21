import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

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
          <div>
            <DangerousHTML
              html={`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
 
  <div class="content-container"></div>
 
  <script type="text/template" data-storyblok-template="page">
    <div class="container mt-5">
      {{#each body}}
        {{component this}}
      {{/each}}
    </div>
  </script>
 
  <script type="text/template" data-storyblok-template="teaser">
    <div class="jumbotron">
      <h1>{{ headline }}</h1>
    </div>
  </script>
 
  <script type="text/template" data-storyblok-template="grid">
    <div>
      <div class="row">
        {{#each columns}}
          {{component this}}
        {{/each}}
      </div>
    </div>
  </script>
 
  <script type="text/template" data-storyblok-template="feature">
    <div class="col-md-4">
      <h2>{{name}}</h2>
    </div>
  </script>  
 
  <apex:remoteObjects jsNamespace="StoryBlok">
    <apex:remoteObjectModel name="Storyblok__Content__c" fields="Id,Storyblok__body__c,Storyblok__slug__c"/>
  </apex:remoteObjects>
 
  <script type="text/javascript" src="//app.storyblok.com/f/storyblok-latest.js"></script>
  <script type="text/javascript" src="{!\$Resource.Storyblok__StoryblokRenderer}"></script>
 
  <script type="text/javascript">
    StoryblokRenderer.init({
      accessToken: 'cPrXvXqSgXVIVHU51jQrIQtt',
      customParent: 'https://storyblok.eu9.visual.force.com'
    });
 
    var StoryblokPage = StoryblokRenderer.bridge.getParam('page') || 'home';
    StoryblokRenderer.render('.content-container', StoryblokPage, function() {
      // Callback after rendered
    });
  </script>`}
            ></DangerousHTML>
          </div>
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
            height: 100px;
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
