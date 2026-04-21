import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

const inputClass = `
  w-full px-4 py-2.5 rounded-lg text-sm text-[#EDEDEF] placeholder-[#8A8F98]/60
  bg-[#0a0a0c] border border-white/[0.08]
  outline-none transition-all duration-200
  focus:border-[#5E6AD2]/60 focus:ring-2 focus:ring-[#5E6AD2]/20
`.trim();

const labelClass = "block text-xs font-medium text-[#8A8F98] mb-1.5 tracking-wide";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3262ec0b-0e3b-4b46-b026-35e285330e7b");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        (event.target as HTMLFormElement).reset();
        await Swal.fire({
          title: t('form.success.title'),
          text: t('form.success.text'),
          icon: "success",
          background: '#0a0a0c',
          color: '#EDEDEF',
          confirmButtonColor: '#5E6AD2',
        });
      } else {
        throw new Error("Send error");
      }
    } catch {
      await Swal.fire({
        title: t('form.error.title'),
        text: t('form.error.text'),
        icon: "error",
        background: '#0a0a0c',
        color: '#EDEDEF',
        confirmButtonColor: '#5E6AD2',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative py-14 md:py-20 border-t border-white/[0.06] px-5 md:px-[10%]"
    >
      {/* Accent glow behind form */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5E6AD2]/30 to-transparent" />

      <div className="max-w-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-[#5E6AD2] tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gradient-headline">
            {t('form.title')}
          </h2>
          <div className="mt-4 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-[#5E6AD2]/50 to-transparent" />
        </div>

        {/* Form card */}
        <div
          className="rounded-2xl border border-white/[0.06] p-6 md:p-8"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.4)',
          }}
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className={labelClass}>{t('form.name')}</label>
              <input
                type="text"
                name="name"
                placeholder={t('form.namePlaceholder')}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>{t('form.email')}</label>
              <input
                type="email"
                name="email"
                placeholder={t('form.emailPlaceholder')}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>{t('form.message')}</label>
              <textarea
                name="message"
                placeholder={t('form.messagePlaceholder')}
                className={`${inputClass} h-32 resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: '#5E6AD2',
                boxShadow: '0 0 0 1px rgba(94,106,210,0.5), 0 4px 16px rgba(94,106,210,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
              onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = '#6872D9'; }}
              onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.background = '#5E6AD2'; }}
            >
              <Send className="w-4 h-4" />
              {isLoading ? t('form.sending') : t('form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
