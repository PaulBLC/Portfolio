const Formulaire = () => {
  return (
    <div id="Contact" className="min-h-[70vh] flex items-center justify-center p-5 md:px-[15%]">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-8">Contactez-moi</h2>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Nom</span>
            </label>
            <input 
              type="text" 
              placeholder="Votre nom" 
              className="input input-bordered w-full" 
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="input input-bordered w-full" 
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea 
              className="textarea textarea-bordered w-full h-32" 
              placeholder="Votre message"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-accent w-full">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

export default Formulaire