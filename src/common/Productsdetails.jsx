import React from 'react'
import { Link } from 'react-router'

export default function Productsdetails({ product }) {
    console.log(product)
    return (
        <>

            <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <Link to={`/product-Card/${product.id}`} onClick={`/product/${product.id}`}>
                    <div class="product"> <img src={product.thumbnail} />
                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div class="tag bg-red">{product.category}</div>
                    <div class="title pt-4 pb-1">{product.tags}</div>
                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                    <div class="price">{product.price}</div>
                </Link>
            </div>

        </>
    )
}
