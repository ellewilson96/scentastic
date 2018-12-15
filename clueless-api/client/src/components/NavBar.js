import React from 'react';
import './NavBar.css'
import alex from '../alex-trebek.jpg'

export default function NavBar(){

    return (
      <div>
        <header>
          <nav>
             <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">By Category</a></li>
               <li><a href="#">Random</a></li>
             </ul>
             <img src={alex} className="alex" alt="iconic" />
             <div className="title">Clueless Trivia</div>
             <div className="jservice">powered by <a href="http://jservice.io">jService</a></div>
         </nav>
       </header>
      </div>
    )
}