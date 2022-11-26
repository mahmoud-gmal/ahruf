import Meta from "../src/components/Meta";
import Image from "next/image";
import Link from "next/Link";

// styles
import styles from "./../styles/pages/contact.module.css";
// bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//hook-form & yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(".الاسم مطلوب")
    .min(3, "يجب ألا يقل عن 3 أحرف"),
  email: Yup.string()
    .required(".البريد الالكتروني مطلوب")
    .email(".البريد إلكتروني غير صالح"),
  contactReason: Yup.string()
    .required(".برجاء تحديد سبب التواصل")
    .oneOf(["reason_1", "reason_2"]),
  message: Yup.string()
    .required(". الرسالة مطلوبة")


});



const Contact = () => {



  const { register,handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = (data) =>{
    console.log(data);
  //   let url = "http://localhost:4000/things/register";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(formData)
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result));
  //  };

  }  


  return (
    <>
      <Meta title="Ahruf | Contact" />


      <main className={styles.main_content}>
        <h2> تواصل معنا </h2>


          <Container>
            <Row>

            <Col md={6}>
              <div className={styles.info}>
                <p>تأكد من أنك لم تحصل على إجابة أسئلتك قبل التواصل معنا من هلال زيارة</p>
                <Link href="/"> الأسئلة الشائعة </Link>
              </div>

                <div className={styles.info_contact}>
                  <h3>بيانات التواصل</h3>
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
                </div>
              </Col>

              <Col md={6}>
                  <div className={styles.form_wrapper}>
                    <h3>راسلنا الان</h3>
                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group controlId="nameID">
                    <Form.Label> الاسم </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="الاسم" 
                      {...register("name")} isInvalid={!!errors.name}/>
                    {errors.name?.message && (<Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>)}
                  </Form.Group>

                  <Form.Group controlId="emailID">
                  <Form.Label> البريد الإلكترونى </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@test.com" 
                    {...register("email")} isInvalid={!!errors.email}/>
                  {errors.email?.message && (<Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>)}
                </Form.Group>

                    <Form.Group controlId="reasonID">
                      <Form.Label>  سبب التواصل </Form.Label>
                      <Form.Control as="select" name="reason" {...register("contactReason")} isInvalid={!!errors.contactReason}>
                        <option> أختر السبب </option>
                        <option value="reason_1">سبب اول </option>
                        <option value="reason_2">سبب ثانى </option>
                    </Form.Control>
                    {errors.contactReason?.message && (<Form.Control.Feedback type="invalid">{errors.contactReason?.message}</Form.Control.Feedback>)}
                    </Form.Group>

                    <Form.Group controlId="meesageID">
                      <Form.Label>  الرسالة </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={6}
                        placeholder="اكتب هنا" 
                        {...register("message")} isInvalid={!!errors.message}/>
                      {errors.message?.message && (<Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>)}
                    </Form.Group>



                    <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>
                    <Button type="submit" className='special_btn' style={{display: 'block',width: '100%'}}> <span> إرسال </span> </Button>     
                    </div>

                    </Form>
                  </div>
                
              </Col>


            </Row>
          </Container>
      
      </main>
    </>
  );
};

export default Contact;
