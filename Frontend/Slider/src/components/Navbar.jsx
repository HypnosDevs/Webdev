import React from 'react'


const navitems = [
    "Home",
    "Contact",
    "Info"
]

const Navbar = () => {
    return (
        <header>
            <nav>
                {
                    navitems.map((ele, idx) => {
                        return <a href='' key={idx}>{ele}</a>
                    })
                }
            </nav>
        </header>
    )
}

export default Navbar