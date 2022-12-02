import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "../../../assets/images/category/cat1.png",
      cateName: "Apple",
    },
    {
      cateImg: "src/assets/images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "src/assets/images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "src/assets/images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "src/assets/images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "src/assets/images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
