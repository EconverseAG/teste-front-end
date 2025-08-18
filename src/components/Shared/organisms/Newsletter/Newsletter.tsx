import React, { useState } from 'react';
import styles from './Newsletter.module.scss';
import { Toast } from '../../atoms';

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'error' as 'success' | 'error' | 'warning'
  });

  const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
    setToast({
      isVisible: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', acceptTerms: false });
    setErrors({ name: '', email: '' });
  };

  const validateName = (name: string): string => {
    if (!name.trim()) return 'Nome é obrigatório';
    if (name.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'E-mail é obrigatório';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'E-mail inválido';
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    
    if (nameError || emailError) {
      setErrors({
        name: nameError,
        email: emailError
      });
      return;
    }

    if (!formData.acceptTerms) {
      showToast('Você deve aceitar os termos e condições', 'warning');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      showToast('Inscrição realizada com sucesso!', 'success');
      clearForm();
    } catch (error) {
      showToast('Erro ao realizar inscrição. Tente novamente.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      required
                    />
                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Digite seu e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      required
                    />
                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`${styles.subscribeButton} ${isSubmitting ? styles.submitting : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        ENVIANDO...
                      </>
                    ) : (
                      'INSCREVER'
                    )}
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

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
        duration={4000}
      />
    </>
  );
};

export default Newsletter;
