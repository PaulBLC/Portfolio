import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3262ec0b-0e3b-4b46-b026-35e285330e7b"); // Remplacez par votre clé Web3Forms

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        // Réinitialiser le formulaire
        (event.target as HTMLFormElement).reset();
        
        // Afficher l'alerte de succès
        await Swal.fire({
          title: t('form.success.title'),
          text: t('form.success.text'),
          icon: "success",
          confirmButtonColor: "hsl(var(--a))" // Utilise la couleur accent de votre thème
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      // Afficher l'alerte d'erreur
      await Swal.fire({
        title: t('form.error.title'),
        text: t('form.error.text'),
        icon: "error",
        confirmButtonColor: "hsl(var(--er))" // Utilise la couleur error de votre thème
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Contact" className="min-h-[70vh] flex items-center justify-center p-5 md:px-[15%]">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-8">{t('form.title')}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">{t('form.name')}</span>
            </label>
            <input 
              type="text" 
              name="name"
              placeholder={t('form.namePlaceholder')} 
              className="input input-bordered w-full" 
              required
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">{t('form.email')}</span>
            </label>
            <input 
              type="email" 
              name="email"
              placeholder={t('form.emailPlaceholder')} 
              className="input input-bordered w-full" 
              required
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">{t('form.message')}</span>
            </label>
            <textarea 
              name="message"
              className="textarea textarea-bordered w-full h-32" 
              placeholder={t('form.messagePlaceholder')}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-accent w-full ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? t('form.sending') : t('form.send')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;