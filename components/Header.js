import React from 'react'
import Link from 'next/link';
import MediaQuery from 'react-responsive';
import RouteList from 'components/RouteList';
import SideDrawer from 'components/SideDrawer';

const fontSize = "text-2xl"
const buttonCN =
  "font-bold rounded inline-flex justify-center\
   items-center text-gray-100 hover:text-green-400 "
const buttonSpacing = "py-2 px-4 mx-20 "
const iconCN = "text-2xl mr-6 text-center ";
const textCN = "text-center align-middle " + fontSize;

const HeaderButton = (props) => {
  return (
    <Link href={"/" + props.page}>
      <button className={buttonCN + buttonSpacing}>
        <i className={iconCN + props.iconName}></i>
        <p className={textCN}>{props.name}</p>
      </button>
    </Link>
  )
}

const Header = () => {
  const headerCN = "headerContainer flex h-20 w-full fixed border-b-2 "
  return (
    <div >
      <MediaQuery query="(min-device-width: 1390px)">
        <div className={"md:justify-center justify-start " + headerCN}>
          {RouteList.map(data => <HeaderButton page={data.page} name={data.name} iconName={data.iconName}/>)}
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1390px)">
        <div className={"justify-start " + headerCN}>
          <button className={buttonCN + " py-2 px-4 mx-4 "}>
            <i className={"fas fa-bars text-white text-2xl "}></i>
            <p className="text-2xl ml-4">Menu</p>
          </button>
        </div>
      </MediaQuery>

      <SideDrawer/>
      
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
