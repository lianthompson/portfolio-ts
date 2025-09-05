"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';
import cn from 'classnames';
import JobCard from "./jobCard";
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

      // Retrieve all help sections
      const sections = Array.from(document.querySelectorAll("section[id]"));

      const options = {
        // threshold: 0,
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
    })

  }, []);

  // Once a scrolling event is detected, iterate all elements
  // whose visibility changed and highlight their navigation entry
  const scrollHandler = (entries) => {
    entries.forEach(entry => {
      const section = entry.target;
      const sectionId = section.id;

      if (entry.intersectionRatio >= .6 && entry.isIntersecting && entry.boundingClientRect.top <= 400) {
        setActiveId(sectionId)
      }
    });
  }

  const experienceRef = useCallback(node => {
    if (node !== null) {
      window.location.hash.includes("experience") && node.scrollIntoView({behavior: 'smooth'})
    }
  }, []);

  const aboutRef = useCallback(node => {
    if (node !== null) {
      window.location.hash.includes("about") && node.scrollIntoView({behavior: 'smooth'})
    }
  }, []);

  const faqRef = useCallback(node => {
    if (node !== null) {
      window.location.hash.includes("faq") && node.scrollIntoView({behavior: 'smooth'})
    }
  }, []);

  const handleNavClick = (item) => {
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
            <div className={styles.description}>Freelance web developer open to work. I build mobile first responsive web pages.</div>
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
                    className={cn(styles.nav, { [styles.selected]: activeId == `#${item}`})}
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
                  I specialize in bringing designs to life by creating reusable components and pixel perfect UI. I enjoy being part of the entire development cycle - from collaborating with stakeholders and users on how to make the best user experience, re-iterating, and shipping it. I'm happiest when the end users are happy.
                </div>
                <div>
                  In my most recent role as a Software Engineer on the Cloud Platform team at <a href="https://corporate.ford.com/articles/products/ford-and-google-to-accelerate-auto-innovation.html" target="_blank" className={styles.link}>Ford Motor Company</a>, I developed and maintained features for an internal Console management app and Developer Portal utilizing a shared component library.
                </div>
                <div>
                  Throughout my career I've had the opportunity to build software with teams and companies of all sizes, from five person startups working directy with founders to a large team of nine. I've also participated in hackathons and <a href="https://devpost.com/software/sendput?_gl=1*1m0uf9n*_gcl_au*MjExMTMwNTIzMC4xNzU1MzYyODAx*_ga*MTE5OTk2MzcwMC4xNzU1MzYyODAx*_ga_0YHJK3Y10M*czE3NTUzNjI4MDEkbzEkZzEkdDE3NTUzNjI4MjYkajM1JGwwJGgw" target="_blank" className={styles.link}>placed in the final top 10</a> at ETHGlobal SF in 2018.
                </div>
                <div>
                  Meanwhile, when I'm not pushing to GitHub, you can find me climbing, weaving, walking, and giggling. But more often than not I'm hanging out with my partner and our two cats.
                </div>
              </section>

              <section className={styles.section} id="#experience" ref={experienceRef}>
                <div id="mobileExperience" className={styles.nav_mobile}>EXPERIENCE</div>
                <JobCard
                  start={"MAY 2025"}
                  end={"PRESENT"}
                  title={"Freelance Web Developer"}
                  description={"Building frontend websites and staying up to date with technologies. This site was built with TypeScript, Next.js, & Sass"} />
                <JobCard
                  start={"MAY 2023"}
                  end={"MAY 2025"}
                  title={"Software Engineer II | Ford Motor Company"}
                  description={"Own feature development throughout entire development process. Maintain and develop critical components across two internal applications used by developers and support teams. Ensure REST api best practices across teams."} />
                <JobCard
                  start={"JULY 2019"}
                  end={"MAY 2023"}
                  title={"Software Engineer II | Autonomic"}
                  description={"Implement new features and bug fixes. Mentor incoming team members and interns through pair programming, code review, and 1:1s."} />
                <JobCard
                  start={"JULY 2018"}
                  end={"MARCH 2019"}
                  title={"Jr Software Engineer | Colark"}
                  description={"Build and deploy new components with React, GatsbyJS, Git, GraphQL, and Figma for colark.com"} />
                <JobCard
                  start={"JAN 2018"}
                  end={"JUNE 2019"}
                  title={"Software Engineer Apprentice | Techtonica"}
                  description={"Completed Techtonica's inaugural Fullstack Web Developer apprenticeship with 10 other women. Six month full-stack web development program learning MERN stack."} />
              </section>
              <section className={styles.section} id="#faq" ref={faqRef}>
                <div id="mobileFaq" className={styles.nav_mobile}>FAQ</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
              </section>
            </div>
        </main>
      </div>
    );
  }

}
