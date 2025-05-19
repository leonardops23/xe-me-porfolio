import { itemsNavbar } from "@/data/data";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  return (
        <nav className="fixed z-20 flex flex-col w-full items-center mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-4 py-1
                dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full
            ">
                {
                    itemsNavbar.map((item) => (
                        <div
                            className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400
                                px-3 py-2 rounded-full transition duration-150 ease-in-out" 
                            key={item.id}>
                            <Link href={item.link}>
                                {item.icon}
                            </Link>
                        </div>
                    ))
                }
                <ModeToggle/>  
            </div>
        </nav>
    );
};

export default Navbar;
