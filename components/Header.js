import React from 'react'
import Link from 'next/link';
import RouteList from 'components/RouteList';
import SideDrawer from 'components/SideDrawer';

const fontSize = "sm:text-2xl text-xl lg:text-3xl md:text-2xl xl:text-4xl "
const buttonCN =
  "font-bold rounded inline-flex justify-center\
   items-center text-gray-100 hover:text-yellow-300 "
const buttonSpacing = "py-2 px-2 lg:px-8 mx-8 "
const iconCN = "mr-6 text-center " + fontSize;
const textCN = "text-center align-middle " + fontSize;

const Header = () => {
  const headerCN = "headerContainer h-20 md:h-32 w-full fixed border-b-2 "

  const HeaderButton = (props) => {
    return (
      <Link href={"/" + props.page}>
        <button className={buttonCN + buttonSpacing + "buttonContainer topBottomBordersOut "}>
          <i className={iconCN + props.iconName}></i>
          <p className={textCN}>{props.name}</p>
        </button>
      </Link>
    )
  }

  return (
    <div className="headerContainer ">
      <div className={"md:justify-center justify-start hidden lg:flex " + headerCN}>
        {RouteList.map(data =>
          <HeaderButton
            key={data.page}
            page={data.page}
            name={data.name}
            iconName={data.iconName}
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

      <SideDrawer />

      <style jsx global>{`
        .headerContainer {
          background-color: rgba(0,0,0,0.6);
  
          -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
          -moz-box-sizing: border-box;    /* Firefox, other Gecko */
          box-sizing: border-box;         /* Opera/IE 8+ */

          z-index: 40; 
        }

        .buttonContainer {
          position: relative;
        }
        
        .topBottomBordersOut::before, .topBottomBordersOut::after {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: #FFF;
          content: "";
          
          opacity: 0;
          transition: all 0.3s;        
        }

        .topBottomBordersOut::before {
          top: 10px;   
          transform: translateY(10px);
        }

        .topBottomBordersOut::after {
          bottom: 0px;   
          transform: translateY(-10px);
        }

        
        .topBottomBordersOut:hover:after, .topBottomBordersOut:hover:before {
          background: #cc0000;
          opacity: 1;
        }

        .topBottomBordersOut:hover:after {
          transform: translateY(-20px);
        }

        .topBottomBordersOut:hover:before {
          transform: translateY(20px);
        }
      `}</style>
    </div>
  )
}

export default Header
