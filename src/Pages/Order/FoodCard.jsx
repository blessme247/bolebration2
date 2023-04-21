import React from 'react'

const FoodCard = ({foodImage, foodName, price, addFoodFunc}) => {
  return (
    <div className='foodCard'>
        <img src={foodImage} alt="food" />
        <div className="foodName">{foodName}</div>
        <div className="more">
            <div className="price">{price}</div>
            <button onClick={addFoodFunc} className='orderBtn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default FoodCard