import React from 'react'

function Navigation() {
    return (
        <div>
            <nav className="container">
                <div className="logo">
                    <img src="/images/brand_logo.png" alt='logo' />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Conatct</li>
                </ul>
                <button>Login</button>


            </nav>
        </div>
    )
}

export default Navigation
