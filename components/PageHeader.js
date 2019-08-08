import Head from 'next/head';
import React from 'react';

const PageHeader = (props) => {
    return (
      <div>
        <Head>
          <title>{props.pageTitle}</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
          
          <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"></link>
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: "Arkhip" 
            src: url("assets/fonts/Arkhip.otf")
          }
          
          .font-Arkhip {
            font-family: "Arkhip"
          }

          @font-face {
            font-family: "Rubik";
            src: url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
          }

          .font-Rubik {
            font-family: "Rubik";
          }
        `}</style>
      </div>
    )
}

export default PageHeader
