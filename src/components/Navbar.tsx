import { ChartNetwork } from "lucide-react"
import ThemeSelector from "./ThemeSelector"

const Navbar = () => {
    return (
        <div className="md:fixed top-0 left-0 right-0 w-full flex justify-center md:justify-between items-center p-1 md:p-4">
            <a href="#"
                className="flex items-center  font-bold  text-3xl md:text-4xl"
            >
                <ChartNetwork className="mr-2" />
                <span className="text-accent">PAUL</span>
                BLANC
            </a>

            <div className="flex items-center gap-4">
                <ul
                    className="hidden md:flex space-x-4">
                    <li>
                        <a href="#Home"
                            className="btn btn-sm btn-ghost"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#About"
                            className="btn btn-sm btn-ghost"
                        >
                            À propos
                        </a>
                    </li>

                    <li>
                        <a href="#Experiences"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes expériences
                        </a>
                    </li>


                    <li>
                        <a href="#Projects"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes projets
                        </a>
                    </li>

                </ul>
                <ThemeSelector />
            </div>

        </div>
    )
}

export default Navbar