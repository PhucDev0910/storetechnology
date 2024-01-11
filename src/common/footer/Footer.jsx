import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>PhucDev</h1>
            <p>Demo Shop</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Uy Tín</li>
              <li>Chất Lượng</li>
              <li>Tiết Kiếm</li>
              <li>Điều khoản và điều kiện</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer care</h2>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Làm thế nào để mua?</li>
              <li>Theo dõi đơn hàng của bạn </li>
              <li>Mua hàng doanh nghiệp & số lượng lớn</li>
              <li>Trả lại & Hoàn tiền</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>AnGiang</li>
              <li>Email: exampleShop@gmail.com</li>
              <li>Phone: +84 0353656511</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
