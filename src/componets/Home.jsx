import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Productsdetails from '../common/Productsdetails';
import Header from '../common/Header';
import Footer from "../common/Footer.jsx"

export default function Home() {

  const [data, setData] = useState([]);
  const [womenproducts, setwomenProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/mens-shirts?limit=4')
      .then((result) => {
        // console.log(result.data.products)
        setData(result.data.products)
      })
      .catch(() => {
        toast.error('Some Issue Occar !!')
      })

  }, [])


  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/womens-bags?limit=4')
      .then((result) => {
        // console.log(result.data.products)
        setwomenProducts(result.data.products)
      })
      .catch(() => {
        toast.error('Some Issue Occar !!')
      })

  }, [])
  return (
    <>

      <Header />
      <div className='container'>
        <div class="row">
          {
            data.map((value, index) => {
              return (
                <Productsdetails key={index} product={value} />
              )
            })
          }
        </div>
      </div>

      <div className='container'>
        <div class="row">
          {
            womenproducts.map((value, index) => {
              return (
                <Productsdetails key={index} product={value} />
              )
            })
          }
        </div>
      </div>
      <Footer />


    </>
  )
}
