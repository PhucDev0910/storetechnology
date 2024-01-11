import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Thời trang",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Điện tử",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Xe",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Nhà & Vườn",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Quà",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Nhạc",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Làm đẹp",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Thú cưng",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Đồ chơi trẻ em",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Cửa hàng",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Sách",
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
