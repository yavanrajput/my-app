import React from 'react'
import './Relatedproduct.css'
import data_product from '../assests/data'
import Item from '../Item/Item'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
          {data_product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      
    </div>
  )
}

export default Relatedproduct
