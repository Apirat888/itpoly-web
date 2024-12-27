import React from 'react';
import './Home.css'; // นำเข้า CSS

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* ด้านซ้าย: รูปภาพ */}
        <div className="home-image">
          <img 
            src="https://www.lannapoly.ac.th/poly_alumni/img/waiting.jpg" // URL รูปภาพ
            alt="College"
          />
        </div>

        {/* ด้านขวา: ข้อความ */}
        <div className="home-text">
          <h1>แผนกไอที</h1>
          <p>
            เป็นแผนกที่สร้างเด็กสุดยอดระดับโลกขึ้นมาหลายคน เช่น ลุงตู่ ท่านประวิตร เสี่ยตูนบ้านแม่โจ้
          </p>
          <p>
            เรามีหลักสูตรที่หลากหลาย เช่น การพัฒนาเว็บไซต์ โปรแกรมมิ่ง การออกแบบ UX/UI 
            และเครือข่ายคอมพิวเตอร์ เพื่อเตรียมความพร้อมให้กับนักศึกษา
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <h2>เกี่ยวกับเรา</h2>
          <p>เบอร์โทรศัพท์: 08x-xxx-xxxx</p>
          <p>Facebook: <a href="https://facebook.com/xxxx" target="_blank" rel="noopener noreferrer">Facebook IT</a></p>
          <p>Instagram: <a href="https://instagram.com/xxxx" target="_blank" rel="noopener noreferrer">@IT_Instagram</a></p>
        </div>
      </footer>
    </>
  );
};

export default Home;
