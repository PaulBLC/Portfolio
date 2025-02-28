import { useEffect, useState } from 'react';

const themes = [
    "dracula",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro"
];

const ThemeSelector = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52">
                {themes.map((t) => (
                    <li key={t}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={t}
                            value={t}
                            onChange={(e) => setTheme(e.target.value)}
                            checked={theme === t}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeSelector; 