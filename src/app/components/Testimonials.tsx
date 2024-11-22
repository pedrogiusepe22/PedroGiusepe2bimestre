import React from 'react';
import styles from './Testimonials.module.css'; // Certifique-se de ter esse arquivo de estilo

const testimonialsData = [
  { id: 1, name: 'João Silva', text: 'Ótimo atendimento e suporte incrível!' },
  { id: 2, name: 'Maria Oliveira', text: 'A equipe sempre me ajuda quando preciso. Recomendo muito!' },
  { id: 3, name: 'Carlos Santos', text: 'O serviço superou todas as minhas expectativas.' },
  { id: 4, name: 'Ana Paula', text: 'Excelente experiência, continuarei utilizando.' },
  { id: 5, name: 'Pedro Lima', text: 'Atendimento de primeira qualidade, agradeço pela ajuda!' },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>O que nossos clientes dizem</h2>
      <div className={styles.scrollContainer}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <p className={styles.text}>"{testimonial.text}"</p>
            <p className={styles.name}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
