import React, { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // ใช้ state ในการจัดการ hover

  const services = [
    { icon: '🎨', text: 'Graphic Design & Video Editing (กราฟิกตัดต่อ)' },
    { icon: '💻', text: 'Computer Assembly & Maintenance (ช่างประกอบและบำรุงรักษาคอมพิวเตอร์)' },
    { icon: '🌐', text: 'Networking & IT Infrastructure (เน็ตเวิร์กและโครงสร้างพื้นฐานไอที)' },
    { icon: '💾', text: 'Programming & Software Development (การเขียนโปรแกรมและพัฒนาซอฟต์แวร์)' },
    { icon: '📈', text: 'Digital Marketing (การตลาดดิจิทัล)' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>LannaPoly Vocational Courses</h1>
      <h2 style={styles.subHeader}>Vocational Education Programs (ปวช & ปวส)</h2>
      <ul style={styles.list}>
        {services.map((service, index) => (
          <li
            key={index}
            className="service-item"
            style={{
              ...styles.listItem,
              ...(hoveredIndex === index ? styles.hoveredItem : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span style={styles.icon}>{service.icon}</span> {service.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(135deg, #ffffff, #e9f2ff)',
    borderRadius: '15px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    animation: 'fadeIn 1s ease-out',
  },
  header: {
    fontSize: '3rem',
    color: '#003366',
    textAlign: 'center',
    marginBottom: '15px',
    fontWeight: 'bold',
    borderBottom: '4px solid #0056b3',
    display: 'inline-block',
    paddingBottom: '10px',
  },
  subHeader: {
    fontSize: '1.8rem',
    color: '#003366',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: '500',
    animation: 'slideIn 1s ease-out',
  },
  list: {
    fontSize: '1.2rem',
    color: '#444444',
    lineHeight: '1.8',
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '20px',
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
    transform: 'scale(1)',
    animation: 'scaleIn 0.5s ease-out',
  },
  hoveredItem: {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#e9f2ff',
    color: '#003366',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '10px',
    color: '#0056b3',
  },
};

export default Services;
