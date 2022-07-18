import React, { useState } from 'react';
import './style.css';
import MenuApi from './menuApi';
import MenuCard from './MenuCard'
import Navbar from './Navbar';


const uniqueList = [
  ...new Set(
    MenuApi.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];
console.log(uniqueList)

const Menu = () => {

  const [menuData, setMenuData] = useState(MenuApi);
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {

    if (category === "All") {
      setMenuData(MenuApi);
      return;
    }

    const updatedList = MenuApi.filter((currEle) => {
      return currEle.category === category;
    })
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Menu;