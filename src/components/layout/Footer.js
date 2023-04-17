import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faPlaneUp,} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styles from "./../../../styles/layout/Footer.module.css";

const Footer = () => {
  const { locale } = useRouter();


// back to top
const [visible, setVisible] = useState(false)
  
const toggleVisible = () => {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 300){
    setVisible(true)
  } 
  else if (scrolled <= 300){
    setVisible(false)
  }
};

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <div className={styles.footer}>
      <button class="up" onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>
        <FontAwesomeIcon icon={faPlaneUp} />
        </button>
        <Container>
          <Row>
            <Col className={styles.item} md={6} lg={4}>
              <div className={styles.logo_footer}>
                <Link href="/">
                  <>
                    <Image
                      alt="logo"
                      src={locale == "ar" ? '/assets/Logo.png': '/assets/logo-en.svg'}
                      width="265"
                      height="88"
                      objectFit="contain"
                    />
                  </>
                </Link>
              </div>
            </Col>
            <Col className={styles.item} md={6} lg={4}>
              <ul className={styles.contact_info}>
                <li>
                  <a href="tel:9660545862672">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>(+966) 0545862672</span>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=9660545862672">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>(+966) 0545862672</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ahrufedu.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>info@ahrufedu.com</span>
                  </a>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FontAwesomeIcon icon={faTwitter} />
                      <span>@ahrufedu1</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FontAwesomeIcon icon={faInstagram} />
                      <span>@ahruf_edu</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className={styles.item} md={6} lg={4}>
              <ul className={styles.links}>
                <li>
                  <Link href="/about">{locale == "en" ? "About" : "من نحن "}</Link>
                </li>
                <li>
                  <Link href="/contact">{locale == "en" ? "Contact" : "اتصل بنا "}</Link>
                </li>
                <li>
                  <Link href="/terms">{locale == "en" ? "Terms and Conditions" : "الشروط والأحكام"}</Link>
                </li>
                <li>
                  <Link href="/programs">{locale == "en" ? "Our training programmes" : "برامجنا التدريبية"}</Link>                  
                </li>
                <li>
                  <Link href="/accounts">{locale == "en" ? "Accounts" : "الحسابات"}</Link>
                </li>
              </ul>
            </Col>

            {/* copyrights */}
            <hr className="mt-4" style={{  border: '0.8px solid #F3f3f3'}}/>

            <Col md={6} className="pt-4 pb-4">
              <div className={styles.copyrights}>
                <p> {locale == "en" ? "All rights reserved to Letters Platform Academy" : "جميع الحقوق محفوظة لدى اكاديمية منصة احرف "}</p>
              </div>
            </Col>
            <Col md={6} className="pt-4 pb-4">
              <div className={styles.company_logo}>
               <Image alt=".." src="/assets/elryad.png"width="18" height="18"
                      // layout="responsive"
                  />
                  <h4> {locale == "en" ? "Elryad Web Design" : "تصميم شركة الرياض "}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    </>
  );
};

export default Footer;
