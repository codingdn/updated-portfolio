import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../images/icons/logo.png";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto px-2 py-6 md:py-8 float-container-header">
      <div className="float-child">
        <Link href="#header" scroll={false}>
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
        <Link href="#about" scroll={false}>
          <button>
            <a>About</a>
          </button>
        </Link>
        <Link href="#experience" scroll={false}>
          <button>
            <a>Experience</a>
          </button>
        </Link>
        <Link href="#projects" scroll={false}>
          <button>
            <a>Projects</a>
          </button>
        </Link>
        <Link href="#contact" scroll={false}>
          <button>
            <a>Contact</a>
          </button>
        </Link>
        <button className="resume-button">
          <a href="https://drive.google.com/file/d/1ks4cc_6NgRBpCGqORmz6W9LW97fbnT3c/view?usp=sharing">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
