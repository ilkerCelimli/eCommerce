import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "src/assets/images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "src/assets/images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "src/assets/images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "src/assets/images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "src/assets/images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "src/assets/images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "src/assets/images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "src/assets/images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "src/assets/images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "src/assets/images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "src/assets/images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
