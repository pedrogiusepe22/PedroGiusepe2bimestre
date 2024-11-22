'use client';

import React, { useState } from 'react';
import ContactForm from './components/ContactForm'; // Ajuste o caminho conforme necessário
import Testimonials from './components/Testimonials'; // Ajuste o caminho conforme necessário
import Footer from './components/Footer'; // Ajuste o caminho conforme necessário

const Page = () => {
  const [currentPage, setCurrentPage] = useState<'contact' | 'testimonials'>('contact');

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>{currentPage === 'contact' ? 'Fale Conosco' : 'Depoimentos'}</h1>
        <div>
          <button
            onClick={() => setCurrentPage('contact')}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid #333',
              background: currentPage === 'contact' ? '#333' : '#fff',
              color: currentPage === 'contact' ? '#fff' : '#333',
              cursor: 'pointer',
            }}
          >
            Contato
          </button>
          <button
            onClick={() => setCurrentPage('testimonials')}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid #333',
              background: currentPage === 'testimonials' ? '#333' : '#fff',
              color: currentPage === 'testimonials' ? '#fff' : '#333',
              cursor: 'pointer',
            }}
          >
            Depoimentos
          </button>
        </div>
      </header>

      <main>
        {currentPage === 'contact' ? <ContactForm /> : <Testimonials />}
      </main>

      <Footer />
    </div>
  );
};

export default Page;
