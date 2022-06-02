import React from 'react'
import { useNavigate } from 'react-router-dom'

const Loose = () => {
    const youLoose = "Your Pokemon is died!!!"
    console.log("Loose");
    const navigate = useNavigate()
    const newGame = () =>{
        navigate("/")
    }
  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 ">
            <img
                src= "./banner.png"
                alt="banner"
              />
            </div>
            </div>
            <div className="row d-flex justify-content-center">
          <div className="col-4 text-center ">
            <h1 className="d py-5  "> {youLoose} </h1>
        <button className='btn newGame' onClick={newGame}><h4>New fight</h4></button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Loose;