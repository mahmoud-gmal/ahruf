import Image from "next/image";
import Link from "next/Link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useAuth } from "./../../context/AuthContext";
// import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./../../../styles/layout/Header.module.css";

import { motion } from 'framer-motion';

export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.4
    }
  },
  hide: {
    y: -20,
    opacity: 0
  }
};






const Header2 = () => {
  const { displayName } = useAuth();
//   const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : '');
//   const handleWindowSizeChange = () => {
//           setWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     return () => {
//         window.removeEventListener('resize', handleWindowSizeChange);
//     }
// }, []);

// if(width <= 992){
// console.log("width <= 768");
// }


// {blogPosts.posts
//   .filter(p => p.locale === locale)
//   .map((blogPost, i) => {
//     return <BlogCard key={i} blogPost={blogPost} />;
//   })}

const { locale, locales, asPath } = useRouter();

// import './../../../styles/mobile.css'



const [status, setStatus] = useState(false);

const handleClick = () =>{
  setStatus(!status)
}

// update html attr direction and lang
useEffect(() => {
  let dir = locale == "ar" ? "rtl" : "ltr";
  let lang = locale == "ar" ? "ar" : "en";
  document.querySelector("html").setAttribute("dir", dir);
  document.querySelector("html").setAttribute("lang", lang);
  // if(locale == "en"){
  //   import './../../../styles/style-en.css'
  // }
}, [locale]);

  return (

    <>

      <div className={`${styles.header} ${styles.header_2}`}>
        <Container>
          <Row className={`${styles.custom_row} align-items-center `}>
            {/* LOGO */}
            <Col md={2}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src="/assets/Logo.png"
                      width="200"
                      height="66"
                      // layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            
            {/* Navbar */}
            <Col md={5}></Col>

            {/* Left side */}
            <Col md={5}>
              <div className="left_side d-flex align-items-center justify-content-end">
                <div className={`${styles.lang}`}>
                {locales.map((l, i) => {
                  if(l !== locale)
                return (
                  <Link href={asPath} locale={l} key={i}><a><FontAwesomeIcon icon={faLanguage} /><span>{l == "en" ? "English" : "Arabic"}</span></a></Link>
                );
              })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




    </>
  );
};

export default Header2;
