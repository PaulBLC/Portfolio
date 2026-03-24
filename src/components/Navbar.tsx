import { ChartNetwork, Menu, X } from "lucide-react"
import ThemeSelector from "./ThemeSelector"
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
            <div className="flex justify-between items-center px-5 md:px-[15%] py-3">
                <a href="#" className="flex items-center font-bold text-2xl md:text-3xl">
                    <ChartNetwork className="mr-2" />
                    <span className="text-accent">PAUL</span>
                    BLANC
                </a>

                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="btn btn-sm btn-ghost">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitcher />
                    <ThemeSelector />
                    <button
                        className="btn btn-ghost btn-sm md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-base-100/95 backdrop-blur-md border-t border-base-300 px-5 pb-4">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="btn btn-ghost btn-sm w-full justify-start"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar