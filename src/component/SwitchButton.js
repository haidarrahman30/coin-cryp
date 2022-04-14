import React from 'react'

const SwitchButton = () => {
  return (
    <div className="container form-check form-switch mt-5 ">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label">Staked Only</label>
    </div>
  )
}

export default SwitchButton