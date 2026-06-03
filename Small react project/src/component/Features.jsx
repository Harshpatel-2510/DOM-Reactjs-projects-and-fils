import React from 'react'

const Features = () => {
  return (

    <div className="features" data-aos="fade-left">

      <div className="card">
        <h1><i className="ri-flashlight-line"></i></h1>
        <h2>Fast Extraction</h2>

        <p>
          Extract website data instantly using
          powerful AI automation.
        </p>
      </div>

      <div className="card">
        <h1><i className="ri-robot-2-fill"></i></h1>
        <h2>AI Powered</h2>

        <p>
          Forget XPath and selectors.<br />
          AI handles everything.
        </p>
      </div>

      <div className="card">
        <h1><i className="ri-lock-2-line"></i></h1>
        <h2>Secure API</h2>

        <p>
          Enterprise-grade API security
          for developers.
        </p>
      </div>

    </div>

  )
}

export default Features