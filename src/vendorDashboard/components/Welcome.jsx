import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")

  return (
    <div className='welcomeSection'>
        <h2>Welcome {firmName}</h2>
        <div className="landingImage">
          <img src='https://sugbo.ph/wp-content/uploads/2018/11/Top-of-Cebu-Restaurant-2-1024x576.jpg' alt='welcome' className="res-view" />
        </div>
    </div>
  )
}

export default Welcome