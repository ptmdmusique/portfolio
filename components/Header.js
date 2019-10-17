import React from 'react'
import Link from 'next/link';
import RouteList from 'components/RouteList';
import SideDrawer from 'components/SideDrawer';
import HoverAnimation from 'assets/animations/HoverAnimation';

import "assets/styles/HeaderStyle.sass"

const fontSize = "sm:text-2xl text-xl lg:text-2xl md:text-2xl xl:text-2xl 2k:text-4xl "
const buttonCN =
  "font-medium rounded inline-flex justify-center\
   items-center text-gray-100 relative focus:outline-none "
const iconCN = "mr-6 text-center " + fontSize;
const textCN = "text-center align-middle " + fontSize;
const headerCN = "header-container h-20 md:h-32 2k:h-48 w-full fixed "

const activeCN = "text-green-300 active-button ";
const inactiveCN = "hover:text-green-300 scale ";

const Header = (props) => {
  const HeaderButton = (props) => {
    const isActive = props.activeRoute === props.page;
    return (
      <Link 
        href={"/" + props.page}>
        <a
          className={buttonCN + (isActive ? activeCN : inactiveCN)}
          disabled={isActive}
          onClick={() => console.log("---Routing event: Going to " + props.name)}>
          <i className={iconCN + props.iconName}></i>
          <p className={textCN}>{props.name}</p>
        </a>
      </Link>
    )
  }

  return (
    <div className="header-container ">
      <div className={"hidden lg:flex justify-around px-2 xl:px-16 " + headerCN}>
        {RouteList.map(data =>
          <HeaderButton
            key={data.page}
            page={data.page}
            name={data.name}
            iconName={data.iconName}
            activeRoute={props.activeRoute}
          />)}
          {/* {renderNavItems()} */}
      </div>

      <div className={"justify-start lg:hidden flex " + headerCN}>
        <button
          onClick={() => {
          const wrapper = document.getElementById('drawer');
            wrapper.classList.toggle('visibleDrawer');
          }}
          className={buttonCN + " py-2 px-4 mx-4 "}>
          <i className={"fas fa-bars text-2xl text-white "}></i>
          <p className="text-2xl ml-4 text-white ">Menu</p>
        </button>
      </div>

      <SideDrawer activeRoute={props.activeRoute} />

      <HoverAnimation
        borderInOutWidth={1}
        scaleFrom={1}
        scaleTo={1.2}
      />
    </div>
  )
}

export default Header
