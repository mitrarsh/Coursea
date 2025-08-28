import React from 'react'

const NavContainer = () => {
  return (
    <div className='bg-white p-8 '>
      <div className="search">
        <img src="assets/icons/search-normal.svg" alt="" />
      </div>
      <div className="notif">
        <img src="assets/icons/notif.svg" alt="" />
      </div>
      <div className="profilePic w-[5rem] h-[5rem] rounded-full overflow-hidden flex justify-center">
        <img src="assets/images/prof.avif" alt="" />
      </div>
    </div>
  )
}

export default NavContainer