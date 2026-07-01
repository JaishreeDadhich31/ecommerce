import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'


export default function Header() {

  const [categories, setcategories] = useState([]);


  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((result) => {
        setcategories(result.data);
      })
      .catch(() => {
        toast.error('something went wrong !!')
      })
  }, [])

  return (
    <>
      <div>
        <ToastContainer></ToastContainer>

        <div class="container bg-white">
          <nav class="navbar navbar-expand-md navbar-light bg-white">
            <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
              <div class="collapse navbar-collapse" id="myNav">
                <div class="navbar-nav ms-auto">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>

                  {
                    categories.map((v, i) => {
                      return (
                        (i < 5)
                          ?
                          <Link class="nav-link" to={`/products/${v.slug}`}>{v.name}</Link>
                          :
                          ''
                      )

                    })
                  }

                  {/* <Link class="nav-link" to="/women">Women's</Link> */}
                  <Link class="nav-link" to="/products">AllProducts</Link>

                  {/* <Link class="nav-link" to="#">Kid's</Link>
                  <Link class="nav-link" to="#">Accessories</Link>
                  <Link class="nav-link" to="#">Cosmetics</Link> */}
                  {/* <Link class="nav-link" to="/about-us">AboutUs</Link> */}
                  {/* <Link class="nav-link" to="/contact-us">ContactUs</Link>/ */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
