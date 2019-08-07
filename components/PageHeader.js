import Head from 'next/head';
import React from 'react';

const PageHeader = (props) => {
    return (
      <div>
        <Head>
          <title>{props.pageTitle}</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: "Arkhip" 
            src: url("assets/fonts/Arkhip.otf")
          }
          
          .font-Arkhip {
            font-family: "Arkhip"
          }
        `}</style>
      </div>
    )
}

export default PageHeader
