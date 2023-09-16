import React from 'react'


const Navbar = ({filterItem , menuList}) => {
  
  return (
    <>
        <nav>
           <div className='navbar'>
             <div className='btn-group'>
                  {
                    menuList && menuList.map((currEle) => {
                      return(
                        <button
                        className='btn-group__item'
                         onClick={()=>filterItem(currEle)}
                          key={currEle}
                        >  {currEle}
                       </button>
                      )
                    })
                  }         
             </div>
           </div>
        </nav>
    </>
  )
}

export default Navbar;
