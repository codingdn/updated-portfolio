import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Experience from "../components/experience";
import Projects from "../components/projects";

import myPic from "../images/my_picture.png";
import umd from "../images/maryland.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daneil Nguyen's Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        {/** header*/}
        <div id="header" className="float-container">
          <div className="float-child">
            <h2 className={styles.intro}>Hi There!! I'm</h2>
            <h1 className={styles.name}>Daneil Nguyen</h1>
            <h2 className={styles.subtext}>
              Aspiring Software Developer. Eternal Learner.
            </h2>
            <div id="social-links">
              <LinkedInIcon
                className="iconColors"
                sx={{ fontSize: 40 }}
              />
              <GitHubIcon className="iconColors" sx={{ fontSize: 40 }} />
              <EmailIcon className="iconColors" sx={{ fontSize: 40 }} />
            </div>
          </div>
          <div className="float-child">
            <Image
              src={myPic}
              alt="Picture of me"
              width="389px"
              height="356px"
              layout="fixed" // layout="fill", layout="intrinsic"
            />
          </div>
        </div>

        <br />

        {/**About */}
        <div id="about">
          <h2 className={styles.sectionHeaders}>About</h2>
          <div className="float-container">
            <div className="float-child">
              <p className={styles.subtext}>
                I currently attend the University of Maryland, College Park
                pursuing a B.S. in Computer Science along with a minor in
                General Business. I have always had a knack for tinkering with
                things every since childhood and messing around the internet at
                times where I should be practicing how to do long division. A
                decade or so later, I find myself enthralled in all things
                technology related. More specifically, I am passionate about the
                intersection between technology and social good. I want to build
                solutions that will make our lives a tiny bit easier. Outside of
                my academics, I enjoy weight lifting, playing volleyball, and
                catching up on my list of movies that I am too afraid too admit
                that I haven’t watched yet.
              </p>
            </div>
            <div className="float-child">
              <Image
                src={umd}
                alt="college"
                width="324px"
                height="324px"
                layout="fixed"
              />
            </div>
          </div>
        </div>

        {/**Experience */}
        <div id="experience">
          <h2 className={styles.sectionHeaders}>Experience</h2>
          <Experience />
        </div>

        {/**Projects */}
        <div id="projects">
          <h2 className={styles.sectionHeaders}>Projects</h2>
          <Projects />
        </div>

        {/**Contact */}
        <div id="contact">
          <h2 className={styles.sectionHeaders}>Contact</h2>
          <h3 className={styles.contactText}>
            Want to get into contact with me?
          </h3>
          <br />
          <h3 className={styles.contactText}>
            Whether this be an opportunity of just a simple question, feel free
            to contact met at:
          </h3>
          <br />
          <h3 className={styles.email}>dn11601@gmail.com</h3>
        </div>
      </main>
    </div>
  );
}
