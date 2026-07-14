"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';
import cn from 'classnames';
import JobCard from "./jobCard";
import { JOBS_LIST, FAQ_LIST } from "./constants";
import styles from "./page.module.scss";

const nav = ["about", "experience", "faq"];
const icons = ["LinkedIn"]

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  const [hash, setHash] = useState('');
  const [innerHeight, setInnerHeight] = useState(0);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    setInnerHeight(window.innerWidth);
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
      setActiveId(window.location.hash);
    }

    window.addEventListener("load", () => {

      // Retrieve all sections
      const sections = Array.from(document.querySelectorAll("section[id]"));

      const options = {
        threshold: [0, .02, .05, .10, .15, .25, .5, .75, 1],
        trackVisibility: true,
        delay: 300,
        scrollMargin: '228px',
        root: null,
        rootMargin: '-1px 0px 0px 0px', // Trigger just before reaching top
      }

      // Creates a new scroll observer
      const observer = new IntersectionObserver(scrollHandler, options);

      //noinspection JSCheckFunctionSignatures
      sections.forEach(section => observer.observe(section));
    });
  }, []);

  // Once a scrolling event is detected, iterate all elements
  // whose visibility changed and highlight their navigation entry
  const scrollHandler = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: any) => {
      const section = entry.target;
      const sectionId = section.id;

      if (entry.intersectionRatio >= .6 && entry.isIntersecting && entry.boundingClientRect.top <= 300 && entry.boundingClientRect.bottom > 200) {
        setActiveId(sectionId)
      }
    });
  }

  const experienceRef = useCallback((node: any) => {
    if (node !== null) {
      window.location.hash.includes("experience") && node.scrollIntoView({ behavior: 'smooth' })
    }
  }, []);

  const aboutRef = useCallback((node: any) => {
    if (node !== null) {
      window.location.hash.includes("about") && node.scrollIntoView({ behavior: 'smooth' })
    }
  }, []);

  const faqRef = useCallback((node: any) => {
    if (node !== null) {
      window.location.hash.includes("faq") && node.scrollIntoView({ behavior: 'smooth' })
    }
  }, []);

  const handleNavClick = (item: string) => {
    setHash(item);
    router.push(`${pathname}/${item}`);
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: 'smooth' });
  }


  if (innerHeight !== 0) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.header_container}>
            <div className={styles.title_container} onClick={() => handleNavClick("")}>
              <div className={styles.title}>Lian Thompson</div>
              <div className={styles.subtitle}>Frontend Engineer</div>
            </div>
            <div className={styles.description}>I build mobile first responsive web pages. <div className={styles.resume_container}>View my<a className={styles.resume} href={"/Lian_Thompson_Resume.pdf"} target="_blank">résumé<div className={styles.dash_small}></div><Image className={styles.arrow} src="/icons8-right-arrow-24.png" alt="resume" height={16} width={16} /></a></div></div>
            <div className={styles.icon_container}>
              <a href={"https://github.com/lianthompson"} target="_blank"><Image src="/icons8-github.svg" alt="github" height={22} width={22} /></a>
              <a href={"https://www.instagram.com/littleorphanliannie/"} target="_blank"><Image src="/icons8-instagram.svg" alt="instagram" height={22} width={22} /></a>
              <a href={"https://www.linkedin.com/in/lianthompson/"} target="_blank"><Image src="/icons8-linkedin.svg" alt="linkedin" height={22} width={22} /></a>
            </div>
            <div className={styles.nav_container}>
              {nav.map((item, i) => {
                return (
                  <Link
                    scroll={false}
                    href={`#${item}`}
                    key={i}
                    className={cn(styles.nav, { [styles.selected]: activeId == `#${item}` })}
                    onClick={() => handleNavClick(`#${item}`)}>
                    <div className={styles.dash}></div> {item}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.container}>
            <section className={styles.section} id="#about" ref={aboutRef}>
              <div id="myHeader" className={styles.nav_mobile}> ABOUT</div>
              <div className={styles.text}>
                I specialize in bringing designs to life by creating reusable components and pixel perfect UI. I enjoy being part of the entire development cycle - from collaborating with key stakeholders and users on how to make the best user experience, iterating, and shipping it. I'm happiest when end users are happy.
              </div>
              <div>
                In my current role at Williams Sonoma I work on the brand frontend development team for <a href="https://www.pbteen.com" target="_blank" className={styles.link}>Pottery Barn Teen</a> and <a href="https://www.dormify.com" target="_blank" className={styles.link}>Dormify</a>. I collaborate with designers and site managers to deliver brand specific style and config updates.
              </div>
              <div>
                Previously, as a Software Engineer on the Platform Experience team at <a href="https://www.ford.com/" target="_blank" className={styles.link}>Ford Motor Company</a>, I developed and maintained features for an internal Console management app and Developer Portal both utilizing a shared component library.
              </div>
              <div>
                During my career I've had the opportunity to build software with teams and companies of all sizes, from five person startups working directy with founders to a large team of nine. I've also participated in hackathons and <a href="https://devpost.com/software/sendput?_gl=1*1m0uf9n*_gcl_au*MjExMTMwNTIzMC4xNzU1MzYyODAx*_ga*MTE5OTk2MzcwMC4xNzU1MzYyODAx*_ga_0YHJK3Y10M*czE3NTUzNjI4MDEkbzEkZzEkdDE3NTUzNjI4MjYkajM1JGwwJGgw" target="_blank" className={styles.link}>placed in the final top 10</a> at ETHGlobal SF in 2018.
              </div>
              <div>
                Meanwhile, when I'm not pushing to GitHub, you can find me climbing, crafting, or walking. But more often than not I'm hanging out with my partner and our two cats.
              </div>
            </section>
            <section className={styles.section} id="#experience" ref={experienceRef}>
              <div id="mobileExperience" className={styles.nav_mobile}>EXPERIENCE</div>
              {JOBS_LIST.map((job, idx) => {
                return <JobCard key={idx} link={`${job[0]}`} jobs={job[1] as []}/>
              })}
            </section>
            <section className={styles.section} id="#faq" ref={faqRef}>
              <div id="mobileFaq" className={styles.nav_mobile}>FAQ</div>
              {FAQ_LIST.map((item, idx ) => {
                return <div className={styles.question_section} key={idx}>
                    <div className={styles.question}>{item.question}</div>
                    <div>{item.answer}</div>
                  </div>
              })}
            </section>
            <footer className={styles.footer}>
              Built with <a href={"https://nextjs.org/"} target="_blank" className={styles.link}>Next.js</a> and <a href={"https://sass-lang.com/"} target="_blank" className={styles.link}>Sass</a> in <a href={"https://code.visualstudio.com/"} target="_blank" className={styles.link}>Visual Studio Code</a>. Deployed with <a href={"https://vercel.com/"} target="_blank" className={styles.link}>Vercel</a>. All icons are courtesy of <a href={"https://icons8.com/"} target="_blank" className={styles.link}>Icons8</a>.
              </footer>
          </div>
        </main>
      </div>
    );
  }

}
