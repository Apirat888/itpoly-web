import React, { useEffect, useState } from 'react';
import './Service.css';


function Service() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // เพิ่ม delay เล็กน้อย
  }, []);

  return (
    <div className={`service-page ${isVisible ? 'fade-in' : ''}`}>
      <h1>บริการแผนกไอที</h1>
      <p>
        ยินดีต้อนรับสู่ <strong>แผนกเทคโนโลยีสารสนเทศ</strong> ของเรา ที่ซึ่งมุ่งมั่นในการพัฒนาศักยภาพของนักศึกษาให้ก้าวสู่ความเป็นผู้นำในยุคดิจิทัล 
        พร้อมสร้างอนาคตที่ยั่งยืนไปพร้อมกับเทคโนโลยีที่เปลี่ยนแปลงโลก
      </p>
      <p>
        เรานำเสนอหลักสูตรที่ทันสมัย ครอบคลุมทั้งระดับ <strong>ปวช.</strong> และ <strong>ปวส.</strong> ซึ่งออกแบบมาเพื่อตอบสนองต่อความต้องการของ 
        อุตสาหกรรมและเตรียมนักศึกษาให้พร้อมสู่โลกการทำงาน
      </p>

      <section className="highlights">
        <h2>ทำไมต้องเลือกเรียนกับเรา?</h2>
        <ul>
          <li>
            <strong>คณาจารย์ผู้เชี่ยวชาญ:</strong> ทีมคณาจารย์ที่มีประสบการณ์และความชำนาญ พร้อมถ่ายทอดความรู้ในเชิงลึก
          </li>
          <li>
            <strong>สื่อการเรียนที่ทันสมัย:</strong> การเรียนการสอนที่เน้นการปฏิบัติจริง พร้อมใช้เทคโนโลยีล่าสุด
          </li>
          <li>
            <strong>โอกาสในการฝึกงาน:</strong> เชื่อมโยงนักศึกษากับบริษัทชั้นนำเพื่อพัฒนาทักษะในสายงาน
          </li>
          <li>
            <strong>บรรยากาศที่เป็นมิตร:</strong> วิทยาลัยที่มุ่งเน้นการสนับสนุนการเรียนรู้ในทุกๆ ด้าน
          </li>
        </ul>
      </section>

      <section className="course-offerings">
        <h2>หลักสูตรของวิทยาลัย</h2>
        <p>เลือกหลักสูตรที่ตรงกับความสนใจของคุณ:</p>
        <div className="course-buttons">
          <a
            href="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="course-button"
          >
            หลักสูตร
          </a>
          <a
            href="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="course-button"
          >
            หลักสูตร
          </a>
          <a
            href="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="course-button"
          >
            หลักสูตร
          </a>
          <a
            href="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="course-button"
          >
            หลักสูตร
          </a>
        </div>
      </section>

      <section className="future-ready">
        <h2>พร้อมสร้างอนาคตที่สดใส</h2>
        <p>
          ร่วมเป็นส่วนหนึ่งกับเราในการก้าวข้ามขีดจำกัดของการเรียนรู้ 
          พร้อมพัฒนาทักษะที่จำเป็นเพื่อก้าวสู่ความสำเร็จในสายงานเทคโนโลยีสารสนเทศ
        </p>
      </section>
    </div>
  );
}

export default Service;
