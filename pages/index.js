import Router from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    Router.push('/home')
  }, [])

  return (
    <div style={{ background: 'black' }}>
      <Head>
        <title>Duc Duchy</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
      </Head>

      <p style={{ color: 'white' }}>{"You shouldn't be here :)"}</p>
      <i style={{ color: 'white', fontSize: 50 }} className="fas fa-home"></i>
    </div>
  )
};

Index.getInitialProps = async ({ res }) => {
  if (res && res.writeHead) {
    res.writeHead(302, {
      Location: '/home'
    })
    res.end();
  }

  return {};
}

export default Index;
