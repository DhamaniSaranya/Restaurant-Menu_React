import React from 'react'

function Navbar({filterItem, menuList}) {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {
                menuList.map((currEle)=> {
                    return (
                        <button className='btn-group__item' 
                            onClick= {() => filterItem(currEle)}>
                            {currEle}
                        </button>
                    )
                })
            }
        </div>
      </nav>
    </>
  )
}

export default Navbar;