import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de inscrição
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos do Econverse.</p>
          </div>
          
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  INSCREVER
                </button>
              </div>
              
              <div className={styles.formFooter}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                    required
                  />
                  <span className={styles.checkboxText}>Aceito os termos e condições</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
