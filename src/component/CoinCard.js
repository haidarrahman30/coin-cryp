import React, {useState} from 'react'
import Logo from '../logo.png';

const CoinCard = () => {

    const [element, setElement] = useState(true);
     const [darkMode, setDarkMode] = useState(true);

    const detailsHandler = () => {
        setElement(!element);
      };


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        {/* Card */}
        <div className={darkMode ? "dark-mode" : "light-mode"}   >
        <div className="container cards ms-5 py-5">
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
  )
}

export default CoinCard