import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h4>Links úteis</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Entre em contato</h4>
          <p>Email: pedrogiusepe22@gmail.com</p>
          <p>Telefone: (45) 99149-2330</p>
        </div>

        <div className={styles.social}>
          <h4>Redes sociais</h4>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
