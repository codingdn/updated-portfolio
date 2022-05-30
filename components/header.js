import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/icons/logo.png";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
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
      <div className="flex  md:flex-row justify-between float-child">
        <Link href="#about" scroll={false} passHref={true}>
          <button>
            <a>About</a>
          </button>
        </Link>
        <Link href="#experience" scroll={false} passHref={true}>
          <button>
            <a>Experience</a>
          </button>
        </Link>
        <Link href="#projects" scroll={false} passHref={true}>
          <button>
            <a>Projects</a>
          </button>
        </Link>
        <Link href="#contact" scroll={false} passHref={true}>
          <button>
            <a>Contact</a>
          </button>
        </Link>
        <button className="resume-button">
          <a href="https://drive.google.com/file/d/1ks4cc_6NgRBpCGqORmz6W9LW97fbnT3c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
    // <Menu>
    //   <Link href="#about" scroll={false} passHref={true} className="menu-item">
    //     <button>
    //       <a>About</a>
    //     </button>
    //   </Link>
    //   <Link href="#experience" scroll={false} passHref={true} className="menu-item">
    //     <button>
    //       <a>Experience</a>
    //     </button>
    //   </Link>
    //   <Link href="#projects" scroll={false} passHref={true} className="menu-item">
    //     <button>
    //       <a>Projects</a>
    //     </button>
    //   </Link>
    //   <Link href="#contact" scroll={false} passHref={true} className="menu-item">
    //     <button> 
    //       <a>Contact</a>
    //     </button>
    //   </Link>
    //   <button>
    //     <a
    //       href="https://drive.google.com/file/d/1ks4cc_6NgRBpCGqORmz6W9LW97fbnT3c/view?usp=sharing"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Resume
    //     </a>
    //   </button>
    // </Menu>
  );
}
