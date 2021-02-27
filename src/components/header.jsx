import React from "react";
import headerStyles from "./header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className={headerStyles}>
        <div className="logowrapper">
          <h1>Anfragen-Liste</h1>
            <button>Log out</button>
        </div>

        <nav>
          <ul>
            <Link to="/anfragen">
              <li>Anfragen</li>
            </Link>
            
            <Link to="/reporting">
              <li>Weitere</li>
            </Link>
            
          </ul>
        </nav>


      </header>

    );
  }
  
  export default Header;