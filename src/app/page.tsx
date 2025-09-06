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

  interface EntryType {
    entries: []
  }

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
            <div className={styles.description}>I build mobile first responsive web pages. <div className={styles.resume_container}>View my<a className={styles.resume} href={"/LianThompson_Resume_2025.pdf"} target="_blank">résumé<div className={styles.dash_small}></div><Image className={styles.arrow} src="/icons8-right-arrow-24.png" alt="resume" height={16} width={16} /></a></div></div>
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
                In my most recent role as a Software Engineer on the Platform Experience team at <a href="https://www.ford.com/" target="_blank" className={styles.link}>Ford Motor Company</a>, I developed and maintained features for an internal Console management app and Developer Portal both utilizing a shared component library.
              </div>
              <div>
                During my career I've had the opportunity to build software with teams and companies of all sizes, from five person startups working directy with founders to a large team of nine. I've also participated in hackathons and <a href="https://devpost.com/software/sendput?_gl=1*1m0uf9n*_gcl_au*MjExMTMwNTIzMC4xNzU1MzYyODAx*_ga*MTE5OTk2MzcwMC4xNzU1MzYyODAx*_ga_0YHJK3Y10M*czE3NTUzNjI4MDEkbzEkZzEkdDE3NTUzNjI4MjYkajM1JGwwJGgw" target="_blank" className={styles.link}>placed in the final top 10</a> at ETHGlobal SF in 2018.
              </div>
              <div>
                Meanwhile, when I'm not pushing to GitHub, you can find me climbing, weaving, walking, and giggling. But more often than not I'm hanging out with my partner and our two cats.
              </div>
            </section>
            <section className={styles.section} id="#experience" ref={experienceRef}>
              <div id="mobileExperience" className={styles.nav_mobile}>EXPERIENCE</div>
              <JobCard
                link={"https://www.ford.com/"}
                jobs={[
                  {
                    start: "May 2023",
                    end: "May 2025",
                    title: "Software Engineer II",
                    company: "Ford Motor Company",
                    description: "Own feature development throughout entire development process. Maintain and develop critical components across two internal applications used by developers and support teams. Ensure REST API best practices across teams."
                  }
                ]}
              />
              <JobCard
                link={"https://autonomic.com/#:~:text=Home%20%2D%20Autonomic,vehicle%20models%20and%20connectivity%20devices."}
                jobs={[
                  {
                    start: "February 2022",
                    end: "May 2023",
                    title: "Software Engineer II",
                    company: "Autonomic",
                    description: "Implement new features and bug fixes. Mentor incoming team members and interns through pair programming, code review, and 1:1s."
                  },
                  {
                    start: "October 2019",
                    end: "May 2022",
                    title: "Software Engineer",
                    company: "Autonomic",
                    description: "Maintain and enhance components for internal Console management application and Developer Portal."
                  },
                  {
                    start: "July 2019",
                    end: "October 2019",
                    title: "Software Engineer Intern",
                    company: "Autonomic",
                    description: "Contributed to bug fixes and built features for an internal dashboard application for demo-ing services."
                  }
                ]}
              />
              <JobCard
                link={"https://www.linkedin.com/company/colark/about/"}
                jobs={[
                  {
                    start: "July 2018",
                    end: "March 2019",
                    title: "Jr Software Engineer",
                    company: "Colark",
                    description: "Build and deploy company marketing site."
                  }
                ]}
              />
              <JobCard
                link={"https://techtonica.org/"}
                jobs={[
                  {
                    start: "Jan 2018",
                    end: "June 2019",
                    title: "Software Engineer Apprentice",
                    company: "Techtonica",
                    description: "Completed Techtonica's inaugural Fullstack Web Developer apprenticeship with 10 other women. Six month full-stack web development program learning MERN stack."
                  }
                ]}
              />
            </section>
            <section className={styles.section} id="#faq" ref={faqRef}>
              <div id="mobileFaq" className={styles.nav_mobile}>FAQ</div>
              <div className={styles.question}>Explain something that you have a deep amount of knowledge in as simple as you can.</div>
              <div>An API stands for Application Program Interface and it is quite literally the interface between the user or client side of an application and the backend. An easy way to think of this is the waiter at a restaurant taking your order, you are the user/client and delivering it to the kitchen which is the backend. Likewise when the kitchen/backend is done preparing your order or retrieving the data you requested, the API will deliver it back to you.</div>
              <div className={styles.question}>Tell me about a time you've failed at something for work.</div>
              <div>During my internship at Autonomic I was tasked with removing certain items from a list. The for loop I’d written had a bad condition and ended up deleting all the data. Luckily this was in our staging environment and was not pushed to production, but it did not go unnoticed. I didn’t handle the situation perfectly - I told my mentor and he acted so nonchalant about it that I didn’t announce it further. I later had a meeting with my manager and learned that I should have gone to him with what happened so our team could get ahead of the situation and address it to other teams, rather than vice versa.</div>
              <div className={styles.question}>What are you looking for in your next role?</div>
              <div>I’m looking for a role where I can grow and learn as a developer, there’s opportunity for career development, and I can work with smart passionate nice people.</div>
              <div className={styles.question}>Explain a problem you worked on in the past in depth.</div>
              <div>A list table in our console app was displaying incomplete data for connectivity history. The endpoint response showed multiple instances of activity and the UI was inconsistent. It was discovered that the data not being displayed had duplicate timestamps down to the millisecond. On the frontend, because the events did not include unique identifiers, we were generating GUIDs for the table using the timestamp, so the initial fix was for the backend team to update the endpoint to return a timestamp that included nanoseconds. This dragged on so instead we used the index with the timestamp to generate the GUID for the table.</div>
              <div className={styles.question}>What's the biggest bug you deployed to production, and how did you respond?</div>
              <div>A dropdown I added to a lookup page did not show a complete list of items. Users would type or search for a specific group name to add to a table and the selection could not be added if it was not in the list. The problem was api call we were making to populate the list used pagination so we were unable to populate the complete list with good latency for the user. The solution was to switch the dropdown with an input that performed a GET operation when the user clicked ‘Add’ that would populate the table with the response. The tradeoff was that the user would need to have the specific Group ID to lookup vs being able to perform a search.</div>
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
