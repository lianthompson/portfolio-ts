"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import cn from 'classnames';
import useScreenSize from "./useScreenSize";
import JobCard from "./jobCard";
import styles from "./page.module.scss";

const nav = ["about", "experience", "faq"];
const icons = ["LinkedIn"]

export default function Home() {

  const pathname = usePathname();
  const router = useRouter();

  const [hash, setHash] = useState('');
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    setInnerHeight(window.innerWidth);
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
    }
    const handleHashChange = () => {
      setHash(window.location.hash.toUpperCase())
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashChange', handleHashChange);
    }
  }, [])

  const handleNavClick = (item) => {
    setHash(item);
    router.push(`${pathname}/${item}`);
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  const screenSize = useScreenSize();

  if (innerHeight !== 0) {
    const bodyStyles = window && window.getComputedStyle(document.body);
    const mobile = bodyStyles.getPropertyValue('--breakpoint-xs');
    const mobileLs = bodyStyles.getPropertyValue('--breakpoint-sm');
    const tablet = bodyStyles.getPropertyValue('--breakpoint-md');
    const tabletLs = parseInt(bodyStyles.getPropertyValue('--breakpoint-lg'));
    const desktop = bodyStyles.getPropertyValue('--breakpoint-xl');

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
            {/* <div className={styles.nav_container}>
            {nav.map((item, i) => {
              return <li key={i} className={cn(styles.nav, { [styles.selected]: hash.includes(item) })} onClick={() => handleNavClick(item.toLowerCase())}><div className={styles.dash}></div> {item}</li>
            })}
          </div> */}
          </div>
          <div className={styles.content_container}>
            <div className={styles.nav_container}>
              {screenSize >= tabletLs && nav.map((item, i) => {
                return (
                  <Link
                    scroll={false}
                    href={`#${item}`}
                    key={i}
                    className={cn(styles.nav, { [styles.selected]: hash.includes(item) })}
                    onClick={() => handleNavClick(`#${item}`)}>
                    <div className={styles.dash}></div> {item}
                  </Link>
                )
              })}
              {/* {screenSize < tabletLs && nav.map((item, i) => {
            return <li key={i} className={cn(styles.nav_mobile, { [styles.selected]: hash.includes(item) })} onClick={() => handleNavClick(item.toLowerCase())}><div className={styles.dash_mobile}></div> {item}</li>
          })} */}
            </div>
            <div className={styles.container}>
              <div className={styles.section} id="#about">
                {screenSize < tabletLs && <div className={cn(styles.nav_mobile, { [styles.selected]: hash.includes("about") })} onClick={() => handleNavClick("about")}><div className={styles.dash_mobile}></div> ABOUT</div>}
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
              </div>

              <div className={styles.section} id="#experience">
                {screenSize < tabletLs && <div className={cn(styles.nav_mobile, { [styles.selected]: hash.includes("experience") })} onClick={() => handleNavClick("experience")}><div className={styles.dash_mobile}></div>EXPERIENCE</div>}
                <JobCard
                  start={"May 2025"}
                  end={"Present"}
                  title={"Freelance Web Developer"}
                  description={"Building frontend websites and staying up to date with technologies. This site was built with TypeScript, Next.js, & Sass"} />
                <JobCard
                  start={"May 2023"}
                  end={"May 2025"}
                  title={"Software Engineer II, Cloud Platform Engineering | Ford Motor Company"}
                  description={"Own feature development throughout entire development process. Maintain and develop critical components across two internal applications used by developers and support teams. Ensure REST api best practices across teams."} />
                <JobCard
                  start={"July 2019"}
                  end={"May 2023"}
                  title={"Software Engineer II, Transportation Mobility Cloud | Autonomic"}
                  description={"Implement new features and bug fixes. Mentor incoming team members and interns through pair programming, code review, and 1:1s."} />
                <JobCard
                  start={"July 2018"}
                  end={"March 2019"}
                  title={"Jr Software Engineer | Colark"}
                  description={"Build and deploy new components with React, GatsbyJS, Git, GraphQL, and Figma for colark.com"} />
                <JobCard
                  start={"January 2018"}
                  end={"June 2019"}
                  title={"Software Engineer Apprentice | Techtonica"}
                  description={"Completed Techtonica's inaugural Fullstack Web Developer apprenticeship with 10 other women. Six month full-stack web development program learning MERN stack."} />
              </div>
              <div className={styles.section} id="#faq">
                {screenSize < tabletLs && <div className={cn(styles.nav_mobile, { [styles.selected]: hash.includes("faq") })} onClick={() => handleNavClick("faq")}><div className={styles.dash_mobile}></div>FAQ</div>}
                <div className={styles.question}>Tell me about yourself briefly</div>
                <div>I have a little over 6 years experience in software development focusing on frontend UI. My most recent role was at Ford Motor Company. I worked on an internal Console management app using Javascript, React, where I did a little bit of everything from bug fixes, feature implementation, and documentation. Before that I was at a company called Autonomic that made a transportation API that was acquired by Ford where I was the 60th hire. Before that I worked on a small startup of four and I also worked at Cruise as an autonomous vehicle operator.</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}
