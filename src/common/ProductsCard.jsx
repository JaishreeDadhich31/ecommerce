import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { toast } from 'react-toastify';

export default function ProductsCard() {

  const [data, setData] = useState({});
  const [currentindex , setcurrentindex] = useState("")

  const param = useParams()
  console.log(param.slug);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${param.slug}`)
      .then((result) => {
        // console.log(result.data)
        setData(result.data)
      })
      .catch(() => {
        toast.error('Some Issue Occar !!')
      })

  }, [param.id])

  return (
    <>
      <div>
        {/* <!-- Product layout --> */}
        <div className="data-layout">
          {/* <!-- Product images --> */}
          <div className="data-images">
            <div className="main-image">
              <img src={currentindex} alt={data.title} id="main-data-image" />
            </div>
            <div className="image-thumbnails">
              {
                data.images?.map((img, index) => {
                  return (
                    <button
                      key={index}
                      className={`thumbnail-btn ${img === currentindex ? "active" : ""}`}
                      onClick={() => setcurrentindex(img)}
                    >
                      <img src={img} alt={data.title} />
                    </button>
                  );
                })
              }
            </div>
          </div>

          {/* <!-- Product details --> */}
          <div className="product-details">
            <h1 className="product-title">{data.title}</h1>
            <div className="rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="reviews-count">(Rating : {data.rating})</span>
            </div>

            <p className="product-description">Description : {data.description}</p>

            <div className="product-price">
              <span className="current-price">${data.price}</span>
              <span className="original-price">${data.price}</span>
            </div>

            {/* <!-- Action buttons --> */}
            <div className="actions">
              <button className="btn btn-primary" id="add-to-cart">Add to Cart</button>
              <button className="btn btn-outline">Buy Now</button>
            </div>

            {/* <!-- Product actions --> */}
            <div className="product-actions">
              <button className="action-btn">
                <i className="fas fa-heart"></i>
                <span>Save</span>
              </button>

              <div className="divider"></div>

              <button className="action-btn">
                <i className="fas fa-share-alt"></i>
                <span>Share</span>
              </button>
            </div>

            {/* <!-- Shipping info --> */}
            <div className="shipping-info">
              <h4 className="shipping-title">Shipping</h4>
              <p className="shipping-text">Free shipping on orders over $50</p>
              <p className="shipping-text">Estimated delivery: 3-5 business days</p>
            </div>
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div className="tabs">
          <div className="tab-buttons">
            <button className="tab-btn active" data-tab="details">Details</button>
            <button className="tab-btn" data-tab="reviews">Reviews</button>
            <button className="tab-btn" data-tab="questions">Questions</button>
          </div>

          <div className="tab-content">
            {/* <!-- Details tab --> */}
            <div className="tab-pane active" id="details-tab">
              <div className="max-w-3xl">
                <p>{data.description}</p>

                <div className="mt-4">
                  <h3 className="font-medium mb-2">Features:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Made with 80% organic cotton and 20% recycled polyester</li>
                    <li>Ribbed cuffs and hem</li>
                    <li>Regular fit</li>
                    <li>Machine washable</li>
                    <li>Imported</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Reviews tab --> */}
            <div className="tab-pane" id="reviews-tab">
              <div className="reviews-container">
                <div className="reviews-summary">
                  <div className="reviews-card">
                    <div className="average-rating">{data.rating}</div>
                    <div className="reviews-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* <div class="total-reviews">{data.reviews.length}</div> */}

                    <div className="rating-bars">
                      {/* <div class="rating-bar">
                                            <div class="star-label">5 ★</div>
                                            <div class="bar-container">
                                                <div class="bar-fill" style="width: 76%"></div>
                                            </div>
                                            <div class="bar-count">184</div>
                                        </div>

                                        <div class="rating-bar">
                                            <div class="star-label">1 ★</div>
                                            <div class="bar-container">
                                                <div class="bar-fill" style="width: 1%"></div>
                                            </div>
                                            <div class="bar-count">2</div>
                                        </div> */}
                    </div>
                  </div>

                  <div className="write-review">
                    <button className="btn btn-outline w-100">Write a Review</button>
                  </div>
                </div>

                <div className="reviews-list">
                  <div className="reviews-header">
                    <h3 className="reviews-title">Customer Reviews</h3>
                    <select className="sort-select">
                      <option>Most Recent</option>
                      <option>Highest Rating</option>
                      <option>Lowest Rating</option>
                    </select>
                  </div>

                  {/* <!-- Review items --> */}
                  <div className="review-item">
                    <div className="review-header">
                      <img className="reviewer-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="James Donner's profile" />
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">James Donner</h4>
                        <div className="reviewer-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>

                    <div class="review-content">
                      A simple classic look but makes this outfit seem real and beautiful, the material is soft, but when worn it often wrinkles because of sitting for too long.
                    </div>

                    <div class="review-actions">
                      <button class="review-action">
                        <i class="fas fa-thumbs-up"></i>
                        <span>8</span>
                      </button>
                      <button class="review-action">
                        <i class="fas fa-comment"></i>
                        <span>2</span>
                      </button>
                      <span class="review-date">March 15, 2025</span>
                    </div>
                  </div>

                  <div class="review-item">
                    <div class="review-header">
                      <img class="reviewer-avatar" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" alt="Ray Hawkins's profile" />
                      <div class="reviewer-info">
                        <h4 class="reviewer-name">Ray Hawkins</h4>
                        <div class="reviewer-stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                    </div>

                    <div class="review-content">
                      Great classic style like promised and the fitting is just right!
                    </div>

                    <div class="review-actions">
                      <button class="review-action">
                        <i class="fas fa-thumbs-up"></i>
                        <span>2</span>
                      </button>
                      <button class="review-action">
                        <i class="fas fa-comment"></i>
                        <span>0</span>
                      </button>
                      <span class="review-date">February 2, 2025</span>
                    </div>
                  </div>

                  <div class="review-item">
                    <div class="review-header">
                      <img class="reviewer-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Brooklyn Simmons's profile" />
                      <div class="reviewer-info">
                        <h4 class="reviewer-name">Brooklyn Simmons</h4>
                        <div class="reviewer-stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                    </div>

                    <div class="review-content">
                      Love the material, it's so comfortable. Bought two pcs.
                    </div>

                    <div class="review-actions">
                      <button class="review-action">
                        <i class="fas fa-thumbs-up"></i>
                        <span>1</span>
                      </button>
                      <button class="review-action">
                        <i class="fas fa-comment"></i>
                        <span>0</span>
                      </button>
                      <span class="review-date">January 18, 2025</span>
                    </div>
                  </div>

                  <div class="text-center mt-4">
                    <button class="btn btn-outline">Load More Reviews</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Questions tab --> */}
            <div class="tab-pane" id="questions-tab">
              <div className='text-center' style={{ padding: '2rem 0' }}>
                {/* <i class="fas fa-comment fa-3x mb-3" style={{ color: '#e5e7eb' }}></i>
                            <h3 style="font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">Have questions about this product?</h3>
                            <p style="color: #6b7280; margin-bottom: 1rem;">Ask the community or share your knowledge</p>
                            <button class="btn btn-outline">Ask a Question</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
