import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Giao Hàng Toàn Quốc",
      decs: "Chúng tôi cung cấp mức giá cạnh tranh cho sản phẩm hơn 100 triệu của chúng tôi ở bất kỳ phạm vi nào.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Thanh Toán An Toàn",
      decs: "Thanh Toán An Toàn, Nhanh Chóng, Tiện lợi khi mua hàng của chúng tôi",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Mua sắm với sự tự tin ",
      decs: "Những sản phẩm chất lượng vừa túi tiền giúp bạn tự tin mua sắm",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Hộ trợ 24/7 ",
      decs: "Luôn hộ trợ khách hàng ở mọi lúc",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
