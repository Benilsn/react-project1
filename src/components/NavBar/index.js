import React from 'react';
import './NavBar.css';

function NavBar(){
    return (
        <header>
        <nav class="menu">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">List Model</a>
                    <ul>
                        <li><a href="">Item 1 </a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4 </a></li>
                        <li><a href="#">Item 5</a></li>
                        <li><a href="#">Item 6</a></li>
                    </ul>
                </li>
            </ul>
            <li><a href="">Sign in</a></li>
        </nav>
    </header>
    
    )

}

export default NavBar;