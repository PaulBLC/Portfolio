import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

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
          title: "Succès!",
          text: "Votre message a été envoyé avec succès.",
          icon: "success",
          confirmButtonColor: "hsl(var(--a))" // Utilise la couleur accent de votre thème
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      // Afficher l'alerte d'erreur
      await Swal.fire({
        title: "Erreur!",
        text: "Une erreur est survenue lors de l'envoi du message.",
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
        <h2 className="text-4xl font-bold text-center mb-8">Contactez-moi</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Nom</span>
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Votre nom" 
              className="input input-bordered w-full" 
              required
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="votre@email.com" 
              className="input input-bordered w-full" 
              required
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea 
              name="message"
              className="textarea textarea-bordered w-full h-32" 
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-accent w-full ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;