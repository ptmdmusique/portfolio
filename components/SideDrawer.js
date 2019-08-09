import Link from 'next/link';
import React from 'react'
import 'assets/styles/tailwind.css';
import RouteList from 'components/RouteList';
import MediaQuery from 'react-responsive';

const SideDrawer = () => {
    const fontSize = "md:text-3xl text-xl "
    const buttonCN =
      "w-full items-center justify-center flex px-4 text-yellow-100 py-1 rounded \
        md:justify-start h-24 hover:bg-green-300 hover:text-green-600 "
    const buttonSpacing = "py-2 px-4 mx-20 "
    const iconCN = "mr-16 text-center w-4 " + fontSize;
    const textCN = "text-center " + fontSize;

    const RenderListItem = (data) => {
        return (
            <li>
                <Link href={"/" + data.page}>
                    <button className={buttonCN}>
                        <i className={iconCN + data.iconName}></i>
                        <MediaQuery query="(min-device-width: 730px)">
                          <p className={textCN}>{data.name}</p>
                        </MediaQuery>
                    </button>
                </Link>
            </li>
        )
    }

    const commonContainerCN = "bg-black shadow float absolute h-full top-0 left-0 px-4 z-50";

    return (
      <div className="">
        <MediaQuery query="(min-device-width: 730px)">
          <div className={commonContainerCN + " w-1/4 justify-start "}>
            <div className="mb-2 justify-between border-b-2 flex px-4 items-center mt-4 ">
              <p className="text-white font-bold text-4xl ">Menu</p>
              <button className="hover:text-green-300 text-white align-middle">
                <i className="fas fa-times text-4xl "/>
              </button>
            </div>

            <ul>
                {RouteList.map(data => RenderListItem(data))}
            </ul>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 730px)">
          <div className={commonContainerCN + " w-1/4 justify-center "}>
            <div className="mb-2 justify-center border-b-2 flex px-4 py-4 items-center mt-4 ">
                <button className="hover:text-green-300 text-white align-middle">
                <i className="fas fa-times text-2xl "/>
                </button>
            </div>    

            <ul>
                {RouteList.map(data => RenderListItem(data))}
            </ul>
          </div>
        </MediaQuery>

      </div> 
    )
}

export default SideDrawer
