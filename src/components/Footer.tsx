import { ChartNetwork, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <ChartNetwork className="w-10 h-10" />
                <p className="font-bold">
                    <span className="text-accent">PAUL</span>
                    BLANC
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://linkedin.com/in/paul-blanc-lyon" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer