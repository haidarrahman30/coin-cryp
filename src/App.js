import './App.css';
import React, {useState}  from 'react'
import CoinCard from './component/CoinCard';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import SwitchButton from './component/SwitchButton';
import Logo from './logo.png';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [element, setElement] = useState(true);

  const detailsHandler = () => {
    setElement(!element);
  };


  return (
    
        <div className="container-fluid" style={{ backgroundColor: darkMode ? "#1A1919" : "white", color: darkMode? "white" : "black" }}>
        <div className={darkMode ? "dark-mode" : "light-mode"} style={{ backgroundColor: darkMode ? "#1A1919" : "white", color: darkMode? "white" : "black" }}>

        {/* Navbar */}
        <header id="header" className="fixed-top d-flex align-items-center" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
        <div className="container-fluid d-flex align-items-center justify-content-between" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>

          <div className="logo" >
            <h1 style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}><a href=""><span>Coincryp</span></a></h1>
          </div>


          <nav id="navbar"  className={isNavExpanded ? "navbar-mobile expanded" : "navbar" } style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
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
              <li><a className="getstarted " href="#about" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Connect Wallet</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
        </header>

        {/* Switch Toogle Button */}
        <div className={darkMode ? "dark-mode" : "light-mode"}  style={{ backgroundColor: darkMode ? "#1A1919" : "white", color: darkMode? "white" : "black", paddingTop: '150px' }}>
          <div className="container">
            <div className="row m-auto">
            <div className="col-md-6 col-sm-6">
            <div className="switch-checkbox">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"> </span>
              </label>
              <span className='ms-2 ' style={{ color: darkMode ? "white" : "black", fontSize: '20px' }}>Staked Only</span>
            </div>
            </div>
            <div className="col-md-6 col-sm-6">
            <ul className="nav nav-pills rounded-pill">
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="#" style={{ backgroundColor: darkMode ? "#353538" : "#EE7843", color: darkMode? "white" : "white" }}>Live</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-light rounded-pill" href="#" style={{ marginLeft: '-10px',color: darkMode? "black" : "#EE7843" }}>Finished</a>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </div>


        {/*Coin Card */}
        <div className="row  align-items-start">
          <div className="col-md-4 col-sm-12">
            <div className={darkMode ? "dark-mode" : "light-mode"}   >
              <div className="container cards py-5">
                <div className="card" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }} >
                    <div className="row m-2 mt-3">
                    <div className="col-sm-6">
                    <img src={ Logo } alt="logo-coin" style={{width: '60px', marginLeft: '10px'}}/>
                    </div>
                    <div className="col-sm-6">
                    <div className="title text-right">
                            <h4 style={{ color: darkMode ? "#0B5ED7" : "black", fontWeight: 'bold' }}>SPY-BUSD</h4>
                            <button className="btn btn-primary">Core</button>
                            <button className="btn py-auto" style={{ background: '#42BFDD', color: 'white'}}>300</button>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-2 m-2">
                        <div className="col-sm-12 desc">
                            <p>APY : <span>842 %</span> </p>
                            <p>Earn : <span>SPY + Fees </span> </p>
                          <p> Harvest Lockup: <span>12 Hours</span></p>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12 col-md-12 col-lg-12 earn">
                            <p> <span style={{ color: '#0B5ED7'}}>SPY</span> EARNED</p>
                            <h4 className='disabled text-secondary'>0.000</h4> <button className="col-sm-10 btn btn-secondary disabled ">Harvest</button>
                            <p><span style={{ color: '#0B5ED7'}}>SPY-BUSD</span> STAKED</p>
                        </div>
                        <button className='btn col-sm-12 col-lg-12 col-md- btn-primary m-auto mb-3 py-2' style={{ borderRadius: '10px'}}>Connect Wallet</button>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                        <div className="col-sm-12">
                        <a onClick={detailsHandler} className="m-auto text-center" href='#'> 
                        { element ? ( <p>Details <i className="bi bi-caret-down-fill"></i></p> ) :  (
                                      <div className="container m-auto">
                                      <p>Hide <i className="bi bi-caret-up-fill py-5"></i></p>

                                      <p>Total Liquidity: <span className="text-right"> $800,000 </span> </p>
                                      <p>Get More Info </p>
                                  </div>
                        )} </a>
                        </div>
                    </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="col-md-4 col-sm-12 m-auto">
            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <div className="container cards py-5">
                <div className="card" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }} >
                    <div className="row m-2 mt-3">
                    <div className="col-sm-6">
                    <img src={ Logo } alt="logo-coin" style={{width: '60px', marginLeft: '10px'}}/>
                    </div>
                    <div className="col-sm-6">
                    <div className="title text-right">
                            <h4 style={{ color: darkMode ? "#0B5ED7" : "black", fontWeight: 'bold' }}>SPY-BUSD</h4>
                            <button className="btn btn-primary">Core</button>
                            <button className="btn py-auto" style={{ background: '#42BFDD', color: 'white'}}>300</button>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-2 m-2">
                        <div className="col-sm-12 desc">
                            <p>APY : <span>842 %</span> </p>
                            <p>Earn : <span>SPY + Fees </span> </p>
                          <p> Harvest Lockup: <span>12 Hours</span></p>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12 col-md-12 col-lg-12 earn">
                            <p> <span style={{ color: '#0B5ED7'}}>SPY</span> EARNED</p>
                            <h4 className='disabled text-secondary'>0.000</h4> <button className="col-sm-10 btn btn-secondary disabled ">Harvest</button>
                            <p><span style={{ color: '#0B5ED7'}}>SPY-BUSD</span> STAKED</p>
                        </div>
                        <button className='btn col-sm-12 col-lg-12 col-md- btn-primary m-auto mb-3 py-2' style={{ borderRadius: '10px'}}>Connect Wallet</button>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                        <div className="col-sm-12">
                        <a onClick={detailsHandler} className="m-auto text-center" href='#'> 
                        { element ? ( <p>Details <i className="bi bi-caret-down-fill"></i></p> ) :  (
                                      <div className="container m-auto">
                                      <p>Hide <i className="bi bi-caret-up-fill py-5"></i></p>

                                      <p>Total Liquidity: <span className="text-right"> $800,000 </span> </p>
                                      <p>Get More Info </p>
                                  </div>
                        )} </a>
                        </div>
                    </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="col-md-4 col-sm-12 m-auto">
            <div className={darkMode ? "dark-mode" : "light-mode"}   >
              <div className="container cards py-5">
                <div className="card" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }} >
                    <div className="row m-2 mt-3">
                    <div className="col-sm-6">
                    <img src={ Logo } alt="logo-coin" style={{width: '60px', marginLeft: '10px'}}/>
                    </div>
                    <div className="col-sm-6">
                    <div className="title text-right">
                            <h4 style={{ color: darkMode ? "#0B5ED7" : "black", fontWeight: 'bold' }}>SPY-BUSD</h4>
                            <button className="btn btn-primary">Core</button>
                            <button className="btn py-auto" style={{ background: '#42BFDD', color: 'white'}}>300</button>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-2 m-2">
                        <div className="col-sm-12 desc">
                            <p>APY : <span>842 %</span> </p>
                            <p>Earn : <span>SPY + Fees </span> </p>
                          <p> Harvest Lockup: <span>12 Hours</span></p>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12 col-md-12 col-lg-12 earn">
                            <p> <span style={{ color: '#0B5ED7'}}>SPY</span> EARNED</p>
                            <h4 className='disabled text-secondary'>0.000</h4> <button className="col-sm-10 btn btn-secondary disabled ">Harvest</button>
                            <p><span style={{ color: '#0B5ED7'}}>SPY-BUSD</span> STAKED</p>
                        </div>
                        <button className='btn col-sm-12 col-lg-12 col-md- btn-primary m-auto mb-3 py-2' style={{ borderRadius: '10px'}}>Connect Wallet</button>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black" }}>
                        <div className="col-sm-12">
                        <a onClick={detailsHandler} className="m-auto text-center" href='#'> 
                        { element ? ( <p>Details <i className="bi bi-caret-down-fill"></i></p> ) :  (
                                      <div className="container m-auto">
                                      <p>Hide <i className="bi bi-caret-up-fill py-5"></i></p>

                                      <p>Total Liquidity: <span className="text-right"> $800,000 </span> </p>
                                      <p>Get More Info </p>
                                  </div>
                        )} </a>
                        </div>
                    </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        

        {/* Footer */}
        <footer style={{ backgroundColor: darkMode ? "#353538" : "white", color: darkMode? "white" : "black", paddingTop: '20px' }}>
        <div className="container-fluid text-center m-auto">
          {/* Toogle Dark mode Light Mode  */}
        <div >
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

        <div className="social-links mt-3 " >
                <a href="#" className="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" className="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" className="telegram"><i class="bi bi-telegram"></i></a>
              </div>

        </div>
        </footer>
        </div>
          
  
  </div>


     
  );
}

export default App;
