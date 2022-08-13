import React, { useState } from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/Auth/AuthReducers.js";

const Navbar = () => {
  //const history = useHistory();

  const auth = useSelector(state => state.auth);

  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(auth))
  }
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            { window.location.href.endsWith("user") ? (null ) : (
                <h4>
                  Categories <i className='fa fa-chevron-down'></i>
                </h4>
            ) }

          </div>
          {auth.isAuthenticated ? (
              <div className='navlink'>
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                  {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
                  <li>
                    <Link className = {"links"} to='/'>home</Link>
                  </li>

                  <li>
                    <Link className = {"links"} to='/user'>user account</Link>
                  </li>

                  <li>
                    <Link className = {"links"} to='/track'>track my order</Link>
                  </li>
                  <li>
                    <Link className = {"links"} to='/contact'>contact</Link>
                  </li>
                    <li>
                    <button onClick={handleLogout} className={"btn-primary"}>Çıkış yap</button>
                    </li>
                </ul>

                <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                  {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                </button>
              </div>
          ) : null}

        </div>
      </header>
    </>
  )
}

export default Navbar
