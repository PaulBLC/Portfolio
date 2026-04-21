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
    { code: 'fr', name: 'Français', flag: 'fr' },
  ];

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      {/* Mobile — dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.05] transition-all duration-200"
          aria-label="Select language"
        >
          <img
            src={`https://flagcdn.com/w40/${current.flag}.png`}
            srcSet={`https://flagcdn.com/w80/${current.flag}.png 2x`}
            alt={current.name}
            className="w-5 h-3.5 object-cover rounded-sm"
          />
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div
            className="absolute top-full right-0 mt-2 rounded-xl border border-white/[0.06] py-1 min-w-[140px] z-50"
            style={{
              background: 'rgba(10,10,12,0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-2.5 w-full px-3 py-2 text-sm transition-colors duration-150 ${
                  i18n.language === lang.code
                    ? 'text-[#EDEDEF] bg-white/[0.06]'
                    : 'text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.04]'
                }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
                  alt={lang.name}
                  className="w-5 h-3.5 object-cover rounded-sm"
                />
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop — flag buttons */}
      <div className="hidden md:flex items-center gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            title={lang.name}
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              i18n.language === lang.code
                ? 'bg-[#5E6AD2]/15 ring-1 ring-[#5E6AD2]/40'
                : 'hover:bg-white/[0.05] opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={`https://flagcdn.com/w40/${lang.flag}.png`}
              srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
              alt={lang.name}
              className="w-5 h-3.5 object-cover rounded-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
