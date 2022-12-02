import React from "react"
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const auth = useSelector(state => state.auth)

  //  const navigate = useHistory();

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
          {/* TODO kullanıcı giriş yapılmamışsa Kayıt ve giriş butonları gözükücek. */ }
            {auth.isAuthenticated ? (<div className='icon f_flex width'>
              <i onClick={{/*() => navigate.push("/user") */}} className='fa fa-user icon-circle'></i>
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                </Link>
              </div>
            </div>) : (
                <div className={"d_flex"}>
                <button className='btn btn-primary'style = {{margin:'10px'}}> <Link to = {"/login"}>Giriş yap</Link> </button>
                <button className='btn btn-primary' style = {{margin:'10px'}}> <Link to = {"/register"}>Kayıt ol</Link>  </button>
                </div>
                  ) }
        </div>
      </section>
    </>
  )
}

export default Search
