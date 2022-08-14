import React from 'react'

function Header() {
    return (
        <header className='bg-stone-900 w-full h-[70px] flex items-center pl-[22px]'>
            <img src="./assets/react logo.png" style={{ height: "20px", width: "20px" }} />
            <p className='text-sky-300 font-bold px-3 text-[22px]'>ReactFacts</p>
        </header>
    )
}

export default Header