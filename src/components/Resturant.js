import React, { useState } from 'react'
import './styles.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
   "All",
  ...new Set( //... is called spread operator ,new Set()->used to get unique value
    Menu.map((currEle) => {
       return currEle.category;
  }),
  ),
 
];

console.log(uniqueList);

const Resturant = () => {

   const [menuData,setMenuData] = useState(Menu); //used to manage the state
   const [menuList,setMenuList] = useState(uniqueList);

   const filterItem = (category) =>{

      if(category === "All"){
        setMenuData(Menu);
        return;
      }

       const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
       });
       setMenuData(updatedList);

   };

  return (
    <>
       <Navbar filterItem = {filterItem} menuList={menuList} />
       <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Resturant
