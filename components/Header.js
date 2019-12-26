import React from 'react'
import RouteList from 'components/RouteList';
import SideDrawer from 'components/SideDrawer';
import HoverAnimation from 'assets/animations/HoverAnimation';

import "assets/styles/HeaderStyle.sass"

const Header = (props) => {
  const HeaderButton = (props) => {
    const isActive = props.activeRoute === props.page;
    return (
      <a
        href={"/" + props.page}
        className={isActive ? "header-button-active" : "header-button-inactive scale "}
        disabled={isActive}
        onClick={() => console.log("---Routing event: Going to " + props.name)}>
        <i className={`header-icon + ${props.iconName}`}></i>
        <p className="header-text">{props.name}</p>
      </a>
    )
  }

  return (
    <div className="header-container ">
      <div className="header-button-list-container">
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

      <div className="justify-start lg:hidden flex header-container">
        <button
          onClick={() => {
          const wrapper = document.getElementById('drawer');
            wrapper.classList.toggle('visibleDrawer');
          }}
          className="header-hamburger-button">
          <i className="fas fa-bars text-2xl text-white "></i>
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
