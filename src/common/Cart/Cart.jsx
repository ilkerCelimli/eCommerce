import React, {useState} from "react"
import "./style.css"
import {sellProductModel} from "../../models/SellProductModel.js";

import {useDispatch, useSelector} from "react-redux";
import {addToCart as add} from "../../store/cart/CartReducer.js";


const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const selector = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [model,setModel] = useState([])
   // const history = useHistory();
  const  handlePayment = (location, state) =>  {
   return CartItem.map(i => {

        const f = {
          ...sellProductModel,
        productId: i.id,

      }

       dispatch(add(f))


    })

  }
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>

              <button className={"btn-primary"} onClick={() => {
                handlePayment(); // history.push("/payment")
              }}> Ödeme ekranı </button>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
