import React, {useState} from 'react'


const Footer = () => {

  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <footer style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
    <div class="container text-center m-auto">

      {/* Toogle Dark mode Light Mode  */}
    <div className={darkMode ? "dark-mode" : "light-mode"}  style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black", paddingTop: '20px' }}>
      <div className="container">
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "white" : "black" }}>{darkMode ? "Dark" : "Light"} Mode</span>
      </div>
    </div>

    <div className="social-links mt-3 m-auto" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
            <a href="#" className="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" className="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" className="telegram"><i class="bi bi-telegram"></i></a>
          </div>

    </div>
    </footer>
  )
}

export default Footer