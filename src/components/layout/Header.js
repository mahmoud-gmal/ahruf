import Image from "next/image";
import Link from "next/Link";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";


import { Container, Row, Col } from "react-bootstrap";
import styles from './Header.module.css'


const Header = () => {


  return (
    <>

<header>
  <Container>
    <Row className="align-items-center">

  {/* LOGO */}
  <Col md={2}>
    <div className={styles.logo}>
      <Link href="/"><a>
        <Image  alt="logo" src="/Logo.png" width="200" height="66" layout="responsive"/>
          </a></Link>
    </div>
  </Col>
    
  {/* Navbar */}
   <Col md={6}>
      <div className={styles.main_navbar}>
        <ul className={`d-flex justify-content-center`}>
          <li><Link href="/">من نحن</Link></li>
            <li>
              <Link href="/"><a className={styles.menu}>البرامج المتاحة
              <ul className={styles.menu_dropdown}>
                <li><Link href="/">من نحن</Link></li>
                <li><Link href="/">من نحن</Link></li>
                <li><Link href="/">من نحن</Link></li>
             </ul>
              </a></Link>

            </li>

          <li><Link href="/">باقات الاشتراك</Link></li>
          <li><Link href="/">اتصل بنا</Link></li>
        </ul>
      </div>
    </Col>

    {/* Left side */}
    <Col md={4}>
      <div className="left_side d-flex align-items-center justify-content-center">
        <div className={`${styles.lang}`}>
          <Link href="/"><><FontAwesomeIcon icon={faLanguage} /> <span>english</span></></Link>
        </div>
        <div className={styles.btns}>
          <Link href="/"><a className={`special_btn ${styles.btn_log}`}>دخول ولي الامر</a></Link>
          <Link href="/"><a className="special_btn">انضم الينا</a></Link>
        </div>
      </div>
    </Col>

      </Row>
   </Container>
</header>
    </>
  );
};

export default Header;
