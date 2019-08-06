import React from 'react'
import HeaderStyle from './Styles/HeaderStyle';
import Link from 'next/link';
import { FaHome, FaProjectDiagram, FaUserSecret } from 'react-icons/fa';
import './Styles/tailwind.css';

const HeaderButton = (props) => {
  const buttonCN = 
    "font-bold py-2 px-4 mx-20 rounded inline-flex \
     items-center text-gray-100 hover:text-green-400"
  const iconCN = "text-2xl mr-4";
  const textCN = "headerText text-2xl"

  return (
    <Link href={"/" + props.page}>
      <button className={buttonCN}>
        <FaHome className={iconCN}/>
        <p className={textCN}>{props.name}</p>
      </button>
    </Link>
  )
}

const Header = () => {


  return (
    <div className="headerContainer flex justify-center h-20">
      <HeaderButton page="home" name="Home"/>
      <HeaderButton page="projects_works" name="Projects/Works"/>
      <HeaderButton page="secret" name="Secret"/>

      <HeaderStyle/>
    </div>
  )
}

export default Header
