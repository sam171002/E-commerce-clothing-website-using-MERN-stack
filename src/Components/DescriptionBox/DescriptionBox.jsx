import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce webpage is a website that allows people to buy and sell goods or services online.
            E-commerce stands for electronic commerce, and it is a type of business that relies on the internet
            and digital platforms. Some examples of e-commerce websites are Amazon, eBay, Shopify, and Etsy.
            E-commerce websites can offer many benefits, such as global reach, lower costs, convenience,
            and flexibility. However, they also face some challenges, such as security, competition, and 
            customer service.
            </p>
            <p>After a customer makes a purchase, the online retailer delivers the order via shipping, store pickup,
            or local delivery in the case of physical products, or digitally for digital products like PDFs, virtual 
            courses, or online consultations.</p>
        </div>
    </div>
  )
}

export default DescriptionBox