import Link from 'next/link';
import React from 'react'
import 'assets/styles/tailwind.css';
import RouteList from 'components/RouteList';

const SideDrawer = () => {
  const fontSize = "sm:text-3xl text-2xl xl:text-4xl "
  const buttonCN =
    "w-full items-center justify-center flex px-4 text-yellow-100 py-1 rounded \
        md:justify-start h-24 hover:bg-green-300 hover:text-green-600 "
  const iconCN = "self-center " + fontSize;
  const textCN = "pl-4 hidden md:block " + fontSize;

  const RenderListItem = (data) => {
    return (
      <li>
        <Link href={"/" + data.page}>
          <button className={buttonCN}>
            <div className="w-16 h-16 flex justify-center content-center ">
              <i className={iconCN + data.iconName}></i>
            </div>
            <p className={textCN}>{data.name}</p>
          </button>
        </Link>
      </li>
    )
  }

  const commonContainerCN = "bg-black shadow float absolute h-full top-0 left-0 px-4 z-50 ";

  return (
    <div className={commonContainerCN + " w-1/4 justify-start "}>
      <div className="mb-2 justify-center md:justify-between border-b-2 flex px-4 py-4 md:py-2 items-center mt-4 ">
        <p className="text-white font-bold text-4xl hidden md:block ">Menu</p>
        <button className="hover:text-green-300 text-white align-middle">
          <i className="fas fa-times sm:text-3xl text-2xl xl:text-4xl  " />
        </button>
      </div>

      <ul>
        {RouteList.map(data => RenderListItem(data))}
      </ul>

      <link rel="stylesheet" href="animate.min.css" />
    </div>
  )
}

export default SideDrawer
