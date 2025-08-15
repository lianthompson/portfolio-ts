"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from "./page.module.scss";

const nav = ["ABOUT", "EXPERIENCE", "FAQ"];

export default function Home() {

  const pathname = usePathname();
  const router = useRouter();

  const [hash, setHash] = useState('');

  useEffect(() => {
        if (typeof window !== 'undefined') {
      setHash(window.location.hash);
        }
    const handleHashChange = () => {
      setHash(window.location.hash.toUpperCase())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashChange', handleHashChange);
    }
  }, [])

  const handleNavClick = (item) => {
    setHash(item)
    router.push(`${pathname}/#${item.toLowerCase()}`)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className={styles.container}>
          <div className={styles.nav_container}>
            {nav.map((item, i)=> {
              return <li key={i} className={styles.nav} onClick={()=> handleNavClick(item.toLowerCase())}><div className={styles.dash}></div> {item}</li>
            })}
          </div>
          <div>
            {hash.includes("about") && <div className={styles.section}>
               <div className={styles.text}>
                I specialize in bringing designs to life by creating reusable components and pixel perfect UI. I enjoy being part of the entire development cycle - from collaborating with stakeholders and users on how to make the best user experience, re-iterating, and shipping it. I'm happiest when the end users are happy.
              </div>
              <div>
                In my most recent role as a Software Engineer on the Cloud Platform team at Ford Motor Company, I developed and maintained features for an internal Console management app and Developer Portal utilizing a shared component library.
              </div>
              <div>
                Throughout my career I've had the opportunity to build software with teams and companies of all sizes, from five person startups working directy with founders to a large team of nine. I've also participated in hackathons and placed in the final top 10 at #ETHSF in 2018.
              </div>
              <div>
                When I'm not pushing to GitHub or reading an O'Reilly book, you can find me climbing, weaving, walking, and giggling, all while waiting for the next ACOTAR book to come out. But more often than not I'm hanging out with my partner and our two cats.
              </div>
            </div>}
            {hash.includes("experience") && <div className={styles.section}>experience lalalalal</div>}
            {hash.includes("faq") && <div className={styles.section}>faq lalalalal</div>}
          </div>
        </div>
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
