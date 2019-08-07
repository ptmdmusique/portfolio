import Head from 'next/head'
import React from 'react'
import HeaderStyle from './Styles/HeaderStyle';
import Link from 'next/link';
import MediaQuery from 'react-responsive';
import '../tailwind.css';

const HeaderButton = (props) => {
  const fontSize = "text-2xl"
  const buttonCN = 
    "font-bold py-2 px-4 mx-20 rounded inline-flex \
     items-center text-gray-100 hover:text-green-400 "
  const iconCN = "text-2xl mr-6 ";
  const textCN = "headerText text-center " + fontSize;

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
      <Head>
        <title>Duc Duchy Home</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
      </Head>

      <MediaQuery query="(min-device-width: 1224px)">
        <HeaderButton page="home" name="Home" iconName="fas fa-home"/>
        <HeaderButton page="projects_works" name="Projects/Works" iconName="fas fa-project-diagram"/>
        <HeaderButton page="secret" name="Secret" iconName="fas fa-user-secret"/>

        <HeaderStyle/>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 1224px)">
        <HeaderButton page="projects_works" name="Projects/Works"/>

        <HeaderStyle/>
      </MediaQuery>
    </div>
  )
}

export default Header
