const Index = () => ( <div/> );

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
