import Head from 'next/head'
const Index = () => ( 
  <div style={{background: 'black'}}>
    <Head>
        <title>Duc Duchy</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
    </Head>

    <p style={{color: 'white'}}>asdasd</p>
    <i style={{color: 'white', fontSize: 50}} className="fas fa-home"></i>
  </div>
);

Index.getInitialProps = async ({ res }) => { 
  if (res){
    res.writeHead(302, {
      Location: '/home'
    })
    res.end();
  } else {
    Route.push('/home')
  }
}

export default Index;
