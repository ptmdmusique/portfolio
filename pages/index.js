import '../components/Styles/tailwind.css'
const Index = () => ( <div className="p-4 bg-purple-300">Something</div> );

// Index.getInitialProps = async ({ res }) => {
//   if (res){
//     res.writeHead(302, {
//       Location: '/home'
//     })
//     res.end();
//   } else {
//     Route.push('/home')
//   }
// }

export default Index;
