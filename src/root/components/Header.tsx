import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import ModalGeneral from "../../shared/components/ModalGeneral";

const Nav = () => {
  let Links = [
    { name: "ABOUT", link: "#about" },
    { name: "PRICING", link: "#pricing" },
    { name: "CONTACT", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);
  const [isModal, setModal] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 ${
        scrolling || open ? "bg-white" : ""
      }`}
    >
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div
          onClick={() => scrollToTop()}
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <span
            className={`${
              scrolling || open ? "text-black" : "text-white"
            } text-3xl mr-1`}
          >
            <AiFillInstagram />
          </span>
          <span
            className={`${scrolling || open ? "text-black" : "text-white"}`}
          >
            Home
          </span>
        </div>

        <div
          data-testid="menu"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[50px] bg-white" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
              onClick={() => scrollToSection(link.link)}
            >
              <span className="text-gray-800 font-bold hover:text-gray-400 duration-500 cursor-pointer">
                {link.name}
              </span>
            </li>
          ))}
          <button
            onClick={() => {
              setModal(true);
              document.body.style.overflow = "hidden";
            }}
            className="hover:border-1 border-2 border-cyan-300 text-cyan-300 py-2 px-6 rounded-lg md:ml-8 hover:bg-cyan-400 hover:text-white
    duration-500"
          >
            Login
          </button>
        </ul>
      </div>

      <ModalGeneral
        isOpen={isModal}
        onClose={() => {
          setModal(false);
          document.body.style.overflow = "unset";
        }}
        message="Hi ini Adalah Login Pop Up"
      />
    </header>
  );
};

export default Nav;
