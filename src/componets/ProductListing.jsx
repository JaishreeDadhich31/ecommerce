import React, { useEffect, useState } from 'react'
import Productsdetails from '../common/Productsdetails';
import { toast } from 'react-toastify';
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductListing({ product }) {

    const [data, setData] = useState([]);
    const [url, seturl] = useState('https://dummyjson.com/products')

    const param = useParams()
    console.log(param);

    useEffect(() => {
        console.log('hello')
        if (param.slug == undefined) {
            seturl('https://dummyjson.com/products')
        } else {
            seturl('https://dummyjson.com/products/category/' + param.slug)
        }
    } , [param]);

    useEffect(() => {
        axios.get(url)
            .then((result) => {
                // console.log(result.data.products)
                setData(result.data.products)
            })
            .catch(() => {
                toast.error('Some Issue Occar !!')
            })

    }, [url])

    return (
        <>

            <Header />

            <div class="row">
                {
                    data.map((value, index) => {
                        return (
                            <Productsdetails key={index} product={value} />
                        )
                    })
                }
            </div>

            <Footer />

        </>
    )
}
