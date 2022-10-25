import Link from "next/link";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter,faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <>

<footer>
  <Container>
    <Row>
      <Col md={4}>
        <div className="logo_footer">
          <Link href="/"><>
            <Image  alt="logo" src="/Logo.png" width="100%" height="100%" layout="responsive" />
              <div className="logo_text">
                <h2>اكاديمية احرف</h2>
                <span>نتائج تعليمية اسرع</span>
              </div>
              </></Link>
        </div>        
      </Col>
      <Col md={3}>
        <ul className="contact_info">
          <li><a href="tel:9660548762583"><span>9660548762583</span><FontAwesomeIcon icon={faPhone} style={{width: 20}}/></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=966200545862672"><span>(+966) 0545862672</span><FontAwesomeIcon icon={faWhatsapp} style={{width: 20}}/></a></li>
          <li><a href="mailto:info@ahrufedu.com"><span>info@ahrufedu.com</span><FontAwesomeIcon icon={faEnvelope} style={{width: 20}}/></a></li>
          <li><Link href="/"><><span>@ahrufedu1</span><FontAwesomeIcon icon={faTwitter} style={{width: 20}}/></></Link></li>
          <li><Link href="/"><><span>@ahruf_edu</span><FontAwesomeIcon icon={faInstagram} style={{width: 20}}/></></Link></li>
        </ul>
      </Col>
      <Col md={3}>
        <ul className="links">
          <li><Link href="/">من نحن</Link></li>
          <li><Link href="/">برامجنا التدريبية</Link></li>
          <li><Link href="/">باقات الاشتراك</Link></li>
          <li><Link href="/">الاسئلة الشائعة</Link></li>
          <li><Link href="/">اتصل بنا</Link></li>
        </ul>
      </Col>
      <Col md={2}>
          <ul className="links">
            <li><Link href="/">الشروط والاحكام</Link></li>
            <li><Link href="/">برامجنا التدريبية</Link></li>
          </ul>        
      </Col>

    </Row>
    
  </Container>
</footer>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default Footer;
