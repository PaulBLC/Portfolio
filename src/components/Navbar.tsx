import { ChartNetwork, Menu, X } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#Home", label: t('navigation.home') },
        { href: "#About", label: t('navigation.about') },
        { href: "#Experiences", label: t('navigation.experiences') },
        { href: "#Projects", label: t('navigation.projects') },
        { href: "#Contact", label: t('navigation.contact') },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
            style={{ background: 'rgba(5,5,6,0.85)', backdropFilter: 'blur(20px)' }}
        >
            <div className="flex justify-between items-center px-5 md:px-[10%] py-4 md:py-5">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 flex items-center justify-center group-hover:bg-[#5E6AD2]/30 transition-all duration-200">
                        <ChartNetwork className="w-5 h-5 text-[#5E6AD2]" />
                    </div>
                    <span className="font-semibold text-xl tracking-tight">
                        <span className="text-[#5E6AD2]">PAUL</span>
                        <span className="text-[#EDEDEF]">BLANC</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="flex items-center gap-3">
                    <ul className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="px-3 py-1.5 text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:block w-px h-4 bg-white/10" />

                    <LanguageSwitcher />

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.05] transition-all duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    className="md:hidden border-t border-white/[0.06] px-5 pb-4 pt-3"
                    style={{ background: 'rgba(5,5,6,0.97)', backdropFilter: 'blur(20px)' }}
                >
                    <ul className="flex flex-col gap-0.5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="flex items-center px-3 py-2 text-sm text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.05] rounded-lg transition-all duration-200 w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-white/[0.06]">
                        <a
                            href="#Contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: '#5E6AD2',
                                boxShadow: '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3)',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#6872D9')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#5E6AD2')}
                        >
                            {t('navigation.contact')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
