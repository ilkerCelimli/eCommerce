import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 000 000 00 00 </label>
            <i className='fa fa-envelope'></i>
            <label>ornek-mail@ornek-mail.com</label>
          </div>
          <div className='right row RText'>
            <label>Destek</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
