import React from 'react'
import Link from 'next/link';
import RouteList from 'components/RouteList';
import SideDrawer from 'components/SideDrawer';
import HoverAnimation from 'assets/animations/HoverAnimation';

const fontSize = "sm:text-2xl text-xl lg:text-2xl md:text-2xl xl:text-4xl "
const buttonCN =
  "font-medium rounded inline-flex justify-center\
   items-center text-gray-100 relative "
const buttonSpacing = "py-2 px-2 lg:px-4 mx-8 xl:px-8 xl:mx-16"
const iconCN = "mr-6 text-center " + fontSize;
const textCN = "text-center align-middle " + fontSize;
const headerCN = "header-container h-20 md:h-32 w-full fixed "

const activeCN = "text-green-300 active-button ";
const inactiveCN = "hover:text-green-300 scale ";

const Header = (props) => {
  const HeaderButton = (props) => {
    const isActive = props.activeRoute === props.page;
    return (
      <Link href={"/" + props.page}>
        <button
          className={buttonCN + buttonSpacing + (isActive ? activeCN : inactiveCN)}
          disabled={isActive}>
          <i className={iconCN + props.iconName}></i>
          <p className={textCN}>{props.name}</p>
        </button>
      </Link>
    )
  }

  return (
    <div className="header-container ">
      <div className={"md:justify-center justify-start hidden lg:flex " + headerCN}>
        {RouteList.map(data =>
          <HeaderButton
            key={data.page}
            page={data.page}
            name={data.name}
            iconName={data.iconName}
            activeRoute={props.activeRoute}
          />)}
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

      <style jsx global>{`
        .header-container {
          background-color: rgba(0,0,0,0.3);
  
          -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
          -moz-box-sizing: border-box;    /* Firefox, other Gecko */
          box-sizing: border-box;         /* Opera/IE 8+ */

          z-index: 40; 
        }     
        
        .active-button::before {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: #42f59e;
          content: "";

          bottom: 20px;   

          animation: 0.25s linear 0s 1 scale-button-before
        }

        @keyframes scale-button-before {
          0% {
            transform: scale(0);            
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <HoverAnimation
        borderInOutWidth={1}
        scaleFrom={1}
        scaleTo={1.2}
      />
    </div>
  )
}

export default Header
