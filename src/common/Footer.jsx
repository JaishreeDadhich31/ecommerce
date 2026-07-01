import React from 'react'


export default function Footer() {
  return (
    <>
      <div>
        {/* import React from 'react' */}
      <footer className="bg-dark text-white pt-4 pb-2 ">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Company Name</h6>
              <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="#!" className="text-white" style={{textDecoration:"none"}}>Product A</a>
              </p>
              <p>
                <a href="#!" className="text-white" style={{textDecoration: "none"}}>Product B</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="#!" className="text-white" style={{textDecoration: "none"}}>Your Account</a>
              </p>
              <p>
                <a href="#!" className="text-white" style={{textDecoration: "none"}}>Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            </div>

          </div>

          <div className="mb-4">

            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p>
                  Copyright © 2025 All rights reserved by:
                  <a href="https://getbootstrap.com" style={{textDecoration: "none"}}>
                    <strong className="text-white">Bootstrap</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="#!" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-twitter"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
           </div>
          </div> 
      </div>

    </footer >

      </div>
    </>
  )
}
