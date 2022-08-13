import {useEffect, useReducer, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Footer from "./common/footer/Footer.jsx";
import Pages from "./pages/Pages.jsx";
import Cart from "./common/Cart/Cart.jsx";
import Data from "./components/Data.js";
import Sdata from "./components/shops/Sdata.js";
import Header from "./common/header/Header.jsx";
import {Login} from "./components/auth/Login";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import {Register} from "./components/auth/Register.jsx";
import {UserProfile} from "./components/user/UserProfile";
import {Payment} from "./components/payment/Payment";
import {useSelector,useDispatch} from "react-redux";
import {NotFoundPage} from "./pages/404Pages";
import {login} from "./store/Auth/AuthReducers.js";
import {Orders} from "./components/AdminDashboard/Orders";
import {Sidebar} from "./components/AdminDashboard/Sidebar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Products} from "./components/AdminDashboard/Products.jsx";
function App() {

    const [CartItem, setCartItem] = useState([])
  const {productItems} = Data;
  const {shopItems} = Sdata;
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id)

        if (productExit) {
            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
        } else {
            // but if the product doesnt exit in the cart that mean if card is empty
            // then new product is added in cart  and its qty is initalize to 1
            setCartItem([...CartItem, { ...product, qty: 1 }])
        }
    }


    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id)


        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id))
        } else {

            setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
        }
    }


  return (
    <>

            <Switch>
                <Route path='/' exact>
                    <Header CartItem={CartItem} />
                    <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
                </Route>
                <Route path='/cart' exact>

                    <Header CartItem={CartItem} />
                    <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
                </Route>

                <Route path={"/login"}>
                    <Login/>
                </Route>

                <Route path ={"/register"}>
                    <Register/>
                </Route>

                <Route path={"/404"} component={NotFoundPage}/>


                            <Route path = {"/user"}>
                                <Header CartItem={CartItem} />
                                <UserProfile/>
                            </Route>

                            <Route path = {"/payment"}>
                                <Payment/>
                            </Route>

                <Route path={"/orders"}>
                    <div className={"dashboard-container"}>
                        <Sidebar/>
                        <div className='dashboard-body'>
                            <Orders/>
                        </div>
                    </div>
                </Route>

                <Route path={"/products"}>
                    <div className={"dashboard-container"}>
                        <Sidebar/>
                        <div className='dashboard-body'>
                            <Products/>
                        </div>
                    </div>
            </Route>

                    <Route path = {"*"}>
                        <Redirect to={"/404"}/>
                    </Route>
                </Switch>


        {window.location.href.endsWith("user") || window.location.href.endsWith("orders") || window.location.href.endsWith("404") ? null : <Footer/>}
        <ToastContainer position={"top-right"}  />

    </>
  )
}

export default App
