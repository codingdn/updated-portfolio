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
        <title>Daneil Nguyen&apos;s Personal Portfolio</title>
        <meta name="description" content="Here's more about me!!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        <div className={styles.sections}>
          <div id="header" className="float-container">
            <div className="float-child">
              <h2 className={styles.intro}>Hi There!! I&apos;m</h2>
              <h1 className={styles.name}>Daneil Nguyen</h1>
              <h2 className={styles.subtext}>
                Aspiring Software Developer. Eternal Learner.
              </h2>
              <div id="social-links" className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/daneil-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="iconColors" sx={{ fontSize: 50 }} />
                </a>
                <a
                  href="https://github.com/codingdn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="iconColors" sx={{ fontSize: 50 }} />
                </a>
                <a
                  href="mailto: dn11601@gmail.com.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon className="iconColors" sx={{ fontSize: 50 }} />
                </a>
              </div>
            </div>
            <div className="float-child">
              <Image
                src={myPic}
                alt="Picture of me"
                width="389px"
                height="356px"
                layout="fixed"
              />
            </div>
          </div>
        </div>

        <br />

        <div id="about" className={styles.sections}>
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
                that I haven???t watched yet.
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

        <div id="experience" className={styles.sections}>
          <h2 className={styles.sectionHeaders}>Experience</h2>
          <Experience />
        </div>

        <div id="projects" className={styles.sections}>
          <h2 className={styles.sectionHeaders}>Projects</h2>
          <Projects />
        </div>

        <div id="contact" className={styles.sections}>
          <h2 className={styles.sectionHeaders}>Contact</h2>
          <h3 className={styles.contactText}>
            Want to get into contact with me?
          </h3>
          <br />
          <h3 className={styles.contactText}>
            Whether this be an opportunity or just a simple question, feel free
            to contact me at:
          </h3>
          <br />
          <h3 className={styles.email}>
            <u><a href="mailto: dn11601@gmail.com.com">dn11601@gmail.com</a></u>
          </h3>
        </div>
      </main>
    </div>
  );
}
