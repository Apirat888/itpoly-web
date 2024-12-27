import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is not valid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Here you can add logic to send the form data to a server
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://www.lannapoly.ac.th/web/assets/logo_lannapoly-CnawhWXg.png"
        alt="LannaPoly Logo"
        style={styles.logo}
      />
      <h1 style={styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            rows="4"
            required
          />
          {errors.message && <span style={styles.error}>{errors.message}</span>}
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>

      <div style={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>Phone: <a href="tel:+6653213061" style={styles.contactLink}>0 5321 3061</a></p>
        <p>Email: <a href="mailto:lannapoly@lannapoly.ac.th" style={styles.contactLink}>lannapoly@lannapoly.ac.th</a></p>
      </div>

      <div style={styles.mapContainer}>
        <h2>Our Location</h2>
        <iframe
          title="LannaPoly Location"
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.302528444268!2d98.9949025!3d18.7951343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da0d4e72f7a76b%3A0x542e9bc1b22a5757!2sLannaPoly!5e0!3m2!1sen!2sth!4v1678887369138!5m2!1sen!2sth"
          style={styles.map}
          allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '30px',
    background: 'linear-gradient(135deg, #f0f8ff, #e9f2ff)',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px',
    animation: 'fadeIn 1s ease-out',
  },
  logo: {
    display: 'block',
    margin: '0 auto 20px',
    width: '150px',
    height: 'auto',
    animation: 'fadeIn 1.5s ease-out',
  },
  header: {
    fontSize: '2.5rem',
    color: '#003366',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: 'bold',
    borderBottom: '4px solid #0056b3',
    display: 'inline-block',
    paddingBottom: '10px',
    animation: 'slideInFromTop 1s ease-out',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideInFromLeft 1s ease-out',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '1.2rem',
    color: '#003366',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  submitButton: {
    padding: '12px 20px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#0056b3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  contactInfo: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '1.2rem',
    animation: 'fadeIn 2s ease-out',
  },
  contactLink: {
    color: '#0056b3',
    textDecoration: 'none',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '5px',
  },
  mapContainer: {
    marginTop: '30px',
    animation: 'fadeIn 2.5s ease-out',
  },
  map: {
    border: '0',
    borderRadius: '10px',
  },
};

// Animations
const keyframes = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${keyframes}</style>`);

export default Contact;
