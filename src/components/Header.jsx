import { IconMenu2 } from "@tabler/icons-react";
import { LogoIcon } from "../components/Svgs";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <header className="z-50 fixed p-5 lg:p-0 transition-all flex justify-between w-full items-center lg:py-10  ">
      <Link to={"/"} className="lg:ml-20">
        <LogoIcon />
      </Link>
      <nav>
        <div className="hidden fixed xl:block left-40 top-[5.4rem] border-b  opacity-20 transition-all z-50 w-[37%] "></div>
        <div
          className={`h-full fixed lg:static backdrop-blur-xl top-0 transition-all z-50  duration-300 w-[67%] bg-white/5 sm:right-0 sm:w-fit sm:h-fit  lg:w-full sm:p-2 lg:px-20 rounded-l-lg  ${
            isMenuShow ? "right-0 " : "-right-full "
          }`}
        >
          <button
            className="absolute right-5 top-5  sm:hidden"
            onClick={() => setIsMenuShow(false)}
          >
            <IconX size={30} className="text-secondary" />
          </button>
          <div className="w-full h-full flex flex-col justify-center gap-5 pb-60 sm:pb-0 px-8 transition-all sm:flex-row lg:gap-16 lg:p-3 lg:py-1 lg:px-4 z-50 ">
            <Link
              onClick={() => setIsMenuShow(false)}
              to={"/"}
              className="flex gap-3 uppercase font-barlowCondensed text-white font tracking-widest text-lg font-light sm:py-5   "
            >
              <span className="font-bold sm:hidden lg:inline-block transition-all">
                00
              </span>
              Home
            </Link>
            <Link
              onClick={() => setIsMenuShow(false)}
              to={"/destination"}
              className="flex gap-3 uppercase font-barlowCondensed text-white font tracking-widest text-lg font-light sm:py-5  "
            >
              <span className="font-bold sm:hidden lg:inline-block transition-all">
                01
              </span>
              Destination
            </Link>
            <Link
              onClick={() => setIsMenuShow(false)}
              to={"/crew"}
              className="flex gap-3 uppercase font-barlowCondensed text-white font tracking-widest text-lg font-light sm:py-5  "
            >
              <span className="font-bold sm:hidden lg:inline-block transition-all">
                02
              </span>
              Crew
            </Link>
            <Link
              onClick={() => setIsMenuShow(false)}
              to={"/technology"}
              className="flex gap-3 uppercase font-barlowCondensed text-white font tracking-widest text-lg font-light sm:py-5   "
            >
              <span className="font-bold sm:hidden lg:inline-block transition-all">
                03
              </span>
              Technology
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsMenuShow(true)}
          className="sm:hidden flex justify-center items-center"
        >
          <IconMenu2 size={40} className="text-secondary" />
        </button>
      </nav>
    </header>
  );
};
export default Header;
