import React from 'react';

const HospitalHomePage = () => {
  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1588776814546-ec7a001ce8c5?auto=format&fit=crop&w=1600&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      fontFamily: '"Poppins", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    logo: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#00d4ff',
    },
    navLinks: {
      display: 'flex',
      gap: '25px',
      listStyle: 'none',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      padding: '10px 20px',
      borderRadius: '25px',
      background: 'linear-gradient(to right, #00c6ff, #0072ff)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    navLinkHover: {
      transform: 'scale(1.1)',
      boxShadow: '0 0 15px #00c6ff',
    },
    aboutSection: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '80px 30px',
      textAlign: 'center',
      borderRadius: '20px',
      width: '85%',
      maxWidth: '900px',
      marginTop: '160px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    },
    aboutTitle: {
      fontSize: '38px',
      fontWeight: '800',
      marginBottom: '25px',
      color: '#00e0ff',
    },
    aboutText: {
      fontSize: '18px',
      lineHeight: '1.8',
      maxWidth: '800px',
      margin: '0 auto 20px',
      color: '#f5f5f5',
    },
    aboutTextHighlight: {
      color: '#ffce00',
      fontWeight: '700',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>🏥 Vaidyakiya Sahayaka</div>
        <nav style={styles.navLinks}>
          <a href="/register" style={styles.navLink}>Register</a>
          <a href="/loginform" style={styles.navLink}>Login</a>
          <a href="/hospitallist" style={styles.navLink}>Hospitallist</a>
      
        </nav>
      </header>

      <section style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>About Us</h2>
        <p style={styles.aboutText}>
          Welcome to <span style={styles.aboutTextHighlight}>Vaidyakiya Sahayaka Services</span>! We are a platform
          dedicated to providing you with the best healthcare options, connecting you to trusted hospitals and
          medical professionals. Whether you're in need of general care or specialized treatment, we're here to help
          guide you to the right place for your needs.
        </p>
        <p style={styles.aboutText}>
          Our goal is simple — to make healthcare more accessible and to ensure that you receive the best possible
          care with ease. We provide detailed information about hospitals, facilities, and services, helping you make
          informed decisions about your health and well-being.
        </p>
      </section>
    </div>
  );
};

export default HospitalHomePage;
