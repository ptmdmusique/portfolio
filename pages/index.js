import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// NOTE this example only shows how to use the solid free icons.
import {  faCheckSquare, faScrewdriver, faUser } from '@fortawesome/free-solid-svg-icons'

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
  library.add(faCheckSquare, faScrewdriver, faUser)
  
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
