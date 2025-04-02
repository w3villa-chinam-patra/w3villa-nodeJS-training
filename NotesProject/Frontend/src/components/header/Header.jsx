import React from 'react'

function Header() {
  return (
    <div className='bg-cyan-700 py-2 px-8 text-white'>
        <div className='container flex justify-between items-center mx-auto'>
            <div className='text-3xl'>
                <img src="/notes.png" alt="logo" className='h-12'/>
                Notes</div>
            <img className='h-12' src="/public/user.png" alt="user"/>
        </div>
    </div>
  )
}

export default Header