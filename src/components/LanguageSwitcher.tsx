import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'fr', name: 'Français', flag: 'fr' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      {/* Version mobile - Menu déroulant */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 ${
            isOpen ? 'bg-base-200' : 'hover:bg-base-200'
          }`}
        >
          <img 
            src={`https://flagcdn.com/w40/${currentLanguage.flag}.png`}
            srcSet={`https://flagcdn.com/w80/${currentLanguage.flag}.png 2x`}
            alt={currentLanguage.name} 
            className="w-7 h-5 object-cover rounded-sm shadow-sm"
          />
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-base-200 rounded-lg shadow-lg py-2 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-base-300 transition-colors ${
                  i18n.language === lang.code ? 'bg-base-300' : ''
                }`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
                  alt={lang.name} 
                  className="w-7 h-5 object-cover rounded-sm shadow-sm"
                />
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Version desktop - Boutons côte à côte */}
      <div className="hidden md:flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`p-1.5 rounded-lg transition-all duration-300 hover:scale-110 ${
              i18n.language === lang.code 
                ? 'ring-2 ring-accent bg-base-200' 
                : 'hover:bg-base-200'
            }`}
            title={lang.name}
          >
            <img 
              src={`https://flagcdn.com/w40/${lang.flag}.png`}
              srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
              alt={lang.name} 
              className="w-7 h-5 object-cover rounded-sm shadow-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 