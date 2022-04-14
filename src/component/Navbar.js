import React, {useState} from 'react'


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
     
      <div className="container-fluid">
        <header id="header" className="fixed-top d-flex align-items-center" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
        <div className="container d-flex align-items-center justify-content-between" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>

          <div className="logo" >
            <h1 style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}><a href=""><span>Coincryp</span></a></h1>
          </div>

          <nav id="navbar" className="navbar" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
            <ul>
              <li className="dropdown" ><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}><span>Trade</span> </a>
                <ul style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>Echange</a></li>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>Liquidity</a></li>
                </ul>
              </li>
              <li className="dropdown"style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }} ><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}><span>Earn</span> </a>
                <ul style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>Farms</a></li>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>The Auto</a></li>
                </ul>
              </li>
              <li><a className="nav-link " href="#contact" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>Refferal</a></li>
              <li className="dropdown"><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }} > <span>NFTs</span> </a>
                <ul style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>NFTs</a></li>
                  <li><a href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>Marketplace</a></li>
                </ul>
              </li>

              <li><a className="nav-link " href="#" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>$500</a></li>
              <li><a className="getstarted " href="#about">Connect Wallet</a></li>
            </ul>
          </nav>
        </div>
        </header>
      </div>
  )
}

export default Navbar
