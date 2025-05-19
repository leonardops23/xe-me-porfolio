import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Introduction = () => {
    return (
        <section className="">
            <div className="text-center mt-20 flex flex-col gap-3">
                <h3 className="text-xl mb-3">Hello, I'm</h3>
                <h1 className="text-4xl font-bold">Ivan Pacheco🧑🏻‍💻</h1>
                <span className="text-gray-500">Full Stack Developer</span>
                <img src="https://avatars.githubusercontent.com/u/181615706?v=4"
                    alt="Avatar"
                    className="w-44 h-44 rounded-full mx-auto mt-6"
                />
                <div className="flex flex-col w-1/2 md:flex-row gap-4 justify-center mt-10 mx-auto">
                    {/* Botones de la libreria de next */}
                    <Link className={buttonVariants()} href="#">
                        <Mail className="mr-2" />
                        Contacta conmigo
                    </Link>
                    <Link className=
                        {buttonVariants({ variant: "outline" })} 
                        href="./cv-ivan-pacheco.pdf"
                        target="_blank"
                        download="cv-ivan-pacheco.pdf"
                        >
                        Descargar CV
                        <Download className="mr-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
