import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useAuth } from "./../../context/AuthContext";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./../../../styles/layout/Header.module.css";

import { motion } from 'framer-motion';
import axios from "axios";
import getFromStorage from "../localstorage";




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






const Header = () => {

  const { token, logout, displayName } = useAuth();
  const [programsList, setProgramsList] = useState([]);
const { locale, locales, asPath, router } = useRouter();



const handleLogout =  async () =>{

  
  try {
    await logout();
    // router.push('/')
  } catch (error) {
    if(error){
      console.log(error.response);
    }
  }


}


const [status, setStatus] = useState(false);

// mobile menu 
const handleClick = () =>{
  setStatus(!status)
}

// update html attr direction and lang
useEffect(() => {
  let dir = locale == "ar" ? "rtl" : "ltr";
  let lang = locale == "ar" ? "ar" : "en";
  document.querySelector("html").setAttribute("dir", dir);
  document.querySelector("html").setAttribute("lang", lang);
}, [locale]);


const [localToken, setLocalToken] = useState(null);
useEffect(() => {
  // const localToken = typeof window !== "undefined" ? localStorage.getItem('token') : null;
  setLocalToken(localStorage.getItem('token'))
}, [localToken, token])


useEffect(() => {

// nav programs
axios.get(
  `${process.env.NEXT_PUBLIC_API_URI}nav-programs`,
  {headers: {
          "Content-type": "Application/json",
          'Accept-Language': locale
          }   
      }
)
.then((response) => {
  setProgramsList(response.data.data);
  // console.log(response.data.data)
  },
  (error) => {
    console.log(error);
  }
);

}, [locale])


  return (

    <>

      <div className={`${styles.header} ${styles.desktop_mode}`}>
        <Container>
          <Row className="align-items-center">
            {/* LOGO */}
            <Col md={2}>
              <div className={styles.logo}>                  
                <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src={locale == "ar" ? '/assets/Logo.png': '/assets/logo-en.svg'}
                      width="200"
                      height="66"
                      // layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            
            {/* Navbar */}
            <Col md={5}>
              <div className={styles.main_navbar}>
                <ul className={`d-flex justify-content-center`}>
                  <li>
                    <Link href="/about">{locale == "en" ? "About" : "من نحن "}</Link>
                  </li>
                  <li className={styles.drop}>
                    <Link href="/programs">
                      <a className={styles.menu}>{locale == "en" ? "available programs" : "البرامج المتاحة "}<FontAwesomeIcon icon={faCaretDown} /></a>
                    </Link>
                    <ul className={styles.menu_dropdown}>
                    {programsList.programs &&
                  programsList.programs.map((item, i) => (
                      <li key={item.id}>
                        <Link href={`/programs?id=${i +1}`}>{item.title}</Link>
                      </li>
                  ))}

                    </ul>
                  </li>

                  <li>
                    <Link href="/#packages">{locale == "en" ? "Subscription prices" : "اسعار الاشتراك"}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{locale == "en" ? "Contact" : "اتصل بنا "}</Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Left side */}
            <Col md={5}>
              <div className="left_side d-flex align-items-center justify-content-end">
                <div className={`${styles.lang}`}>
                {locales.map((l, i) => {
                  if(l !== locale)
                return (
                  <Link href={asPath} locale={l} key={i}><a><FontAwesomeIcon icon={faLanguage} /><span>{l == "en" ? "English" : "Arabic"}</span></a></Link>
                  // <Link href={`${l == "en" ? "/en": "/"}`} locale={l} key={i}><a><FontAwesomeIcon icon={faLanguage} /><span>{l == "en" ? "English" : "Arabic"}</span></a></Link>
                );
              })}

                 
                </div>
                <div className={styles.btns}>
                {token || localToken ? 
                (<><Link href="/profile">
              <a className={`special_btn ${styles.btn_log}`}>
                <span>{locale == "en" ? "Student profile" : "بروفايل الطالب"}</span>
              </a>
              </Link>
            <Link href="/" >
              <a className="special_btn" onClick={handleLogout}><span>{locale == "en" ? "logout" : "تسجيل خروج "}</span></a>
            </Link></>) 
              : (
                  <><Link href="/login">
                    <a className={`special_btn ${styles.btn_log}`}>
                     <span>{locale == "en" ? "Student entry" : "دخول الطالب"}</span>
                    </a>
                  </Link>
                  <Link href="https://ahrufedu.com/Dashboards/parent/login">
                    <a className="special_btn"><span>{locale == "en" ? "Parent entry" : "دخول ولي الامر "}</span></a>
                  </Link></>
                )}

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




      {/*----------- Start Mobile mode -----------------*/}
      <div className={`${styles.header} ${styles.mobile_mode}`}>
        <Container>
          <Row className="align-items-center">
            {/* LOGO */}
            <Col xs={6}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src={locale == "ar" ? '/assets/Logo.png': '/assets/logo-en.svg'}
                      width="200"
                      height="66"
                      // layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            
            {/* Navbar */}
            <Col xs={6}>
              <div className={styles.main_navbar}>
                <div className={styles.menu_toggle}><FontAwesomeIcon icon={faBars} onClick={handleClick}/></div>
                {status && (
                  <motion.ul className={`d-flex flex-direction-column ${styles.mobile_list_nav}`} key={status} variants={variants} animate={'show'} initial="hide">
                <div className={styles.logo_wraper}>
                <Link href="/">
                  <a className={styles.mobile_logo}>
                    <Image
                      alt="logo"
                      src={locale == "ar" ? '/assets/Logo.png': '/assets/logo-en.svg'}
                      width="200"
                      height="66"
                      objectFit="contain"
                      // layout="responsive"
                      // layout="fill"
                      
                    />
                  </a>
                </Link>
                 <div className={styles.close_icon} onClick={handleClick}><FontAwesomeIcon icon={faTimes} /></div>
              </div>

              <li>
                    <Link href="/about">{locale == "en" ? "About" : "من نحن "}</Link>
                  </li>
                  <li className={styles.drop}>
                    <Link href="/programs">
                      <a className={styles.menu}>{locale == "en" ? "available programs" : "البرامج المتاحة "}<FontAwesomeIcon icon={faCaretDown} /></a>
                    </Link>
                    <ul className={styles.menu_dropdown}>
                    {programsList.programs &&
                  programsList.programs.map((item, i) => (
                      <li key={item.id}>
                        <Link href={`/programs?id=${i +1}`}>{item.title}</Link>
                      </li>
                  ))}

                    </ul>
                  </li>

                  <li>
                    <Link href="/#packages">{locale == "en" ? "Subscription prices" : "اسعار الاشتراك"}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{locale == "en" ? "Contact" : "اتصل بنا "}</Link>
                  </li>
                </motion.ul>

                )}
              </div>
            </Col>

          </Row>
        </Container>
      </div>      
      {/*----------- End Mobile mode -----------------*/}


    </>
  );
};

export default Header;
