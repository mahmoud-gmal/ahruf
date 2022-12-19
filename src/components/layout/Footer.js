import Link from "next/Link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styles from "./../../../styles/layout/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <Row>
            <Col className={styles.item} md={6} lg={4}>
              <div className={styles.logo_footer}>
                <Link href="/">
                  <>
                    <Image
                      alt="logo"
                      src="/assets/Logo.png"
                      width="265"
                      height="88"
                      objectFit="contain"
                    />
                  </>
                </Link>
              </div>
            </Col>
            <Col className={styles.item} md={6} lg={3}>
              <ul className={styles.contact_info}>
                <li>
                  <a href="tel:9660548762583">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>9660548762583</span>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=966200545862672">
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
            <Col className={styles.item} md={6} lg={3}>
              <ul className={styles.links}>
                <li>
                  <Link href="/">من نحن</Link>
                </li>
                <li>
                  <Link href="/">برامجنا التدريبية</Link>
                </li>
                <li>
                  <Link href="/">باقات الاشتراك</Link>
                </li>
                <li>
                  <Link href="/">الاسئلة الشائعة</Link>
                </li>
                <li>
                  <Link href="/">اتصل بنا</Link>
                </li>
              </ul>
            </Col>
            <Col className={styles.item} md={6} lg={2}>
              <ul className={styles.links}>
                <li>
                  <Link href="/">الشروط والاحكام</Link>
                </li>
                <li>
                  <Link href="/">برامجنا التدريبية</Link>
                </li>
              </ul>
            </Col>
            {/* copyrights */}
            <hr className="mt-4" style={{  border: '0.8px solid #F3f3f3'}}/>

            <Col md={6} className="pt-4 pb-4">
              <div className={styles.copyrights}>
                <p>جميع الحقوق محفوظة لدى اكاديمية منصة احرف</p>
              </div>
            </Col>
            <Col md={6} className="pt-4 pb-4">
              <div className={styles.company_logo}>
               <Image alt=".." src="/assets/elryad.png"width="18" height="18"
                      // layout="responsive"
                  />
                  <h4>تصميم شركة الرياض</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    </>
  );
};

export default Footer;
