import React, { useEffect, useState } from 'react';
import './Service.css'; // นำเข้าไฟล์ CSS

function Service() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ตั้งค่าให้เนื้อหาปรากฏหลังจากโหลดหน้า
    setTimeout(() => setIsVisible(true), 100); // เพิ่ม delay เล็กน้อย
  }, []);

  return (
    <div className={`service-page ${isVisible ? 'fade-in' : ''}`}>
      <h1>บริการแผนกไอที</h1>
      <p>ยินดีต้อนรับสู่แผนกไอที เราเปิดสอนหลากหลายหลักสูตรสำหรับนักศึกษา ปวช. และ ปวส.</p>

      <section>
        <h2>หลักสูตรสำหรับระดับ ปวช.</h2>
        <ul>
          <li>พื้นฐานการเขียนโปรแกรม (Basic Programming)</li>
          <li>การออกแบบกราฟิก (Graphic Design)</li>
          <li>พื้นฐานเครือข่ายคอมพิวเตอร์ (Basic Networking)</li>
        </ul>
      </section>

      <section>
        <h2>หลักสูตรสำหรับระดับ ปวส.</h2>
        <ul>
          <li>การพัฒนาเว็บและแอปพลิเคชัน (Web & Application Development)</li>
          <li>การออกแบบและสร้างกราฟิกขั้นสูง (Advanced Graphic Design)</li>
          <li>การจัดการเครือข่ายและความปลอดภัย (Network Management & Security)</li>
        </ul>
      </section>

      <section>
        <h2>รายละเอียดหลักสูตร</h2>
        <h3>การเขียนโค้ด (Coding)</h3>
        <p>เรียนรู้การเขียนโค้ดด้วยภาษาโปรแกรมยอดนิยม เช่น Python, JavaScript และ C++</p>

        <h3>การออกแบบกราฟิก (Graphic Design)</h3>
        <p>สร้างสรรค์ผลงานด้วยโปรแกรม Adobe Photoshop, Illustrator และ Canva</p>

        <h3>การจัดการเครือข่าย (Networking)</h3>
        <p>ศึกษาการตั้งค่าและจัดการระบบเครือข่าย รวมถึงการแก้ไขปัญหาด้านเครือข่าย</p>
      </section>
    </div>
  );
}

export default Service;
