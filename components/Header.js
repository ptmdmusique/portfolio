import React from 'react'
import Link from 'next/link';
import MediaQuery from 'react-responsive';
//import '../tailwind.css';

const fontSize = "text-2xl"
const buttonCN =
  "font-bold py-2 px-4 mx-20 rounded inline-flex justify-center\
   items-center text-gray-100 hover:text-green-400 "
const iconCN = "text-2xl mr-6 text-center ";
const textCN = " text-center align-middle " + fontSize;

const HeaderButton = (props) => {
  return (
    <Link href={"/" + props.page}>
      <button className={buttonCN}>
        <i className={iconCN + props.iconName}></i>
        <p className={textCN}>{props.name}</p>
      </button>
    </Link>
  )
}

const Header = () => {
  return (
    <div className="headerContainer flex justify-center h-20 w-full fixed">
      <MediaQuery query="(min-device-width: 1224px)">
        <HeaderButton page="home" name="Home" iconName="fas fa-home" />
        <HeaderButton page="projects_works" name="Projects/Works" iconName="fas fa-project-diagram" />
        <HeaderButton page="secret" name="Secret" iconName="fas fa-user-secret" />
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        {/* <HeaderButton page="projects_works" name="Projects/Works" /> */}
        <i className="fas fa-bars"></i>
      </MediaQuery>

      <style jsx>{`
        .headerContainer {
          background-color: rgba(0,0,0,0.6);
  
          -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
          -moz-box-sizing: border-box;    /* Firefox, other Gecko */
          box-sizing: border-box;         /* Opera/IE 8+ */
        }
      `}</style>
    </div>
  )
}

export default Header
