import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/icons/logo.png";
import { slide as Menu } from "react-burger-menu";

//https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
//https://www.npmjs.com/package/react-burger-menu

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Navbar() {
  const size = useWindowSize();

  console.log(size);

  return (
    <div className="mx-auto px-2 py-6 md:py-8 float-container-header">
      <div className="float-child">
        <Link href="#header" scroll={false} passHref={true}>
          <Image
            src={logo}
            alt="Logo"
            width="97px"
            height="66px"
            layout="fixed"
          />
        </Link>
      </div>
      {size.width > 1360 ? (
        <div className="flex md:flex-row justify-between float-child">
          <Link href="#about" scroll={false} passHref={true}>
            <button className="header-hover">About</button>
          </Link>
          <Link href="#experience" scroll={false} passHref={true}>
            <button className="header-hover">Experience</button>
          </Link>
          <Link href="#projects" scroll={false} passHref={true}>
            <button className="header-hover">Projects</button>
          </Link>
          <Link href="#contact" scroll={false} passHref={true}>
            <button className="header-hover">Contact</button>
          </Link>
          <button className="resume-button header-hover">
            <a
              href="https://drive.google.com/file/d/1ks4cc_6NgRBpCGqORmz6W9LW97fbnT3c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      ) : (
        <div className="float-child">
          <Menu right>
            <Link
              href="#about"
              scroll={false}
              passHref={true}
              className="menu-item"
            >
              <button>
                <a>About</a>
              </button>
            </Link>
            <Link
              href="#experience"
              scroll={false}
              passHref={true}
              className="menu-item"
            >
              <button>
                <a>Experience</a>
              </button>
            </Link>
            <Link
              href="#projects"
              scroll={false}
              passHref={true}
              className="menu-item"
            >
              <button>
                <a>Projects</a>
              </button>
            </Link>
            <Link
              href="#contact"
              scroll={false}
              passHref={true}
              className="menu-item"
            >
              <button>
                <a>Contact</a>
              </button>
            </Link>
            <button>
              <a
                href="https://drive.google.com/file/d/1ks4cc_6NgRBpCGqORmz6W9LW97fbnT3c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </Menu>
        </div>
      )}
    </div>
  );
}
