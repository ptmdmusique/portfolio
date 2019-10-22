import Link from 'next/link';
import React from 'react'
import 'assets/styles/tailwind.css';
import RouteList from 'components/RouteList';

const SideDrawer = (props) => {
  const fontSize = "sm:text-3xl text-2xl xl:text-4xl "
  const buttonCN =
    "w-full items-center justify-center flex px-4 text-white py-1 rounded \
        md:justify-start h-24 relative "
  const activeButton = "text-green-300 ";
  const inactiveButton = "hover:bg-green-300 hover:text-green-600 ";
  const iconCN = "self-center " + fontSize;
  const textCN = "pl-4 hidden md:block " + fontSize;
  const commonContainerCN = "bg-black shadow float fixed h-full top-0 left-0 px-4 z-50 ";

  const RenderListItem = (data) => {
    const isActive = props.activeRoute === data.page;
    return (
      <li key={data.page}>
        <a
          className={buttonCN + (isActive ? activeButton : inactiveButton)}
          disabled={isActive}
          href={"/" + data.page}>
          <div className="w-16 h-16 flex justify-center content-center ">
            <i className={iconCN + data.iconName}></i>
          </div>
          <p className={textCN}>{data.name}</p>
        </a>
      </li>
    )
  }

  const toogleDrawer = () => {
    const wrapper = document.getElementById('drawer');
    wrapper.classList.toggle('visibleDrawer');
  }

  return (
    <div id="drawer" className={commonContainerCN + " w-1/4 md:w-3/5 justify-start "}>
      <div className="mb-2 justify-center md:justify-between border-b-2 flex px-4 py-4 md:py-2 items-center mt-4 ">
        <p className="text-white font-bold text-4xl hidden md:block ">Menu</p>
        <button
          onClick={() => toogleDrawer()}
          className="hover:text-green-300 text-white align-middle">
          <i className="fas fa-times sm:text-3xl text-2xl xl:text-4xl  " />
        </button>
      </div>

      <ul>
        {RouteList.map(data => RenderListItem(data))}
      </ul>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />

      <style jsx>{`
        #drawer {
          margin-left: -75%;
          transition: margin 0.25s;
        }
        #drawer.visibleDrawer {
          margin-left: 0;
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
    </div>
  )
}

export default SideDrawer
