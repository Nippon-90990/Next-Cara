import Link from 'next/link'
import React from 'react'

// { data: { attributes: p, id } }

// const p = product?.data?.[0]?.attributes;

const FeatureProducts = () => {
  return (
    <section id="product1" class="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Morden Design</p>
        <div class="pro-container">
        <Link href={`/Feature Product`}>
          <div class="pro">
            <img src={'/f1.jpg'} alt="" />
            <div class="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$74</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>   {/* <!-- <i class="bi bi-cart cart"> --> */}
          </div>
        </Link>
        </div>
    </section>
  )
}

export default FeatureProducts