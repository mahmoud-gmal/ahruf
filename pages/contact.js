import Meta from "../src/components/Meta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// styles
import styles from "./../styles/pages/contact.module.css";
// bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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


// const formik = useFormik({

//   initialValues = {
//     name: "",
//     email: "",
//     contactReason: "",
//     message: "",
//   },

//   validationSchema = Yup.object().shape({
//     name: Yup.string().required(".الاسم مطلوب").min(3, "يجب ألا يقل عن 3 أحرف"),
//     email: Yup.string()
//       .required(".البريد الالكتروني مطلوب")
//       .email(".البريد إلكتروني غير صالح"),
//     contactReason: Yup.string().required(".برجاء تحديد سبب التواصل"),
//     message: Yup.string().required(". الرسالة مطلوبة"),
//   }),

//   onSubmit: values => {
//     // handleSubmit(values);
//     onSubmit = (values) => {


//       const data = {
//         name: values.name,
//         email: values.name,
//         reason: values.contactReason,
//         message: values.message,
//       };
  
//       let url = `https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/contacts`;
//       fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       })
//         .then((res) => 
//         {
//           if (res.status == 200) {
//             toast.success(`${locale == "en" ? "It Hasn't sent succesfully" : "تم الارسال بنجاح"}`,{}) ;
//             reset();
  
//         }else{
//           toast.error(`${locale == "en" ? "There was a problem sending, try again." : " هناك مشكلة فى الارسال، حاول مرة اخرى"}`,{})
//         }
//         }
  
//         )
//         // .then((result) => console.log(result));
//     };

//   }

// });



// FETCHING DATA FROM API
export const getStaticProps = async ({ locale }) => {
  // contact info
  const socialRes = await fetch(`${process.env.NEXT_PUBLIC_API_URI}main_page/social-accounts`, {
    headers: { "Accept-Language": locale },
  });
  const socialData = await socialRes.json();

  // contact form

  if (!socialData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contactInfo: socialData }, // will be passed to the page component as props
    revalidate: 10, //In seconds
  };
};

const Contact = ({ contactInfo }) => {
  // lang
  const { locale, locales, asPath } = useRouter();



  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`${locale == "en" ? "Name required" : ".الاسم مطلوب"}`).min(3, `${locale == "en" ? "must be at least 3 characters" : "يجب ألا يقل عن 3 أحرف"}`),
    email: Yup.string()
      .required(`${locale == "en" ? "Email is required." : ".البريد الالكتروني مطلوب"}`)
      .email(`${locale == "en" ? "Invalid email." : ".البريد إلكتروني غير صالح"}`),
    contactReason: Yup.string().required(`${locale == "en" ? "Please specify the reason for contacting." : ".برجاء تحديد سبب التواصل"}`),
    message: Yup.string().required(`${locale == "en" ? "Message is required." : ". الرسالة مطلوبة"}`),
  });


  // const initialValues = {
  //   name: "",
  //   email: "",
  //   contactReason: "",
  //   message: "",
  // };


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {


    const data = {
      name: values.name,
      email: values.name,
      reason: values.contactReason,
      message: values.message,
    };

    let url = `${process.env.NEXT_PUBLIC_API_URI}contacts`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => 
      {
        if (res.status == 200) {
          toast.success(`${locale == "en" ? "It Hasn't sent succesfully" : "تم الارسال بنجاح"}`,{}) ;
          reset();

      }else{
        toast.error(`${locale == "en" ? "There was a problem sending, try again." : " هناك مشكلة فى الارسال، حاول مرة اخرى"}`,{})
      }
      }

      )
      // .then((result) => console.log(result));
  };

  return (
    <>
      <Meta title="Ahruf | Contact" />

      <main className={styles.main_content}>
        <h2> {locale == "en" ? "Contact us" : " تواصل معنا "}</h2>

        <Container>
          <Row>
            <Col md={6}>
              <div className={styles.info}>
                <p>
                  {locale == "en"
                    ? "Make sure that you did not get the answer to your questions before contacting us from Hilal Ziyarah"
                    : " تأكد من أنك لم تحصل على إجابة أسئلتك قبل التواصل معنا من هلال زيارة "}
                </p>
                <Link href="/">
                  {locale == "en" ? "common questions" : "الأسئلة الشائعة "}
                </Link>
              </div>

              <div className={styles.info_contact}>
                <h3>
                  {" "}
                  {locale == "en" ? "Contact information" : "بيانات التواصل "}
                </h3>
                <ul className={styles.contact_info}>
                  <li>
                    <a href="tel:9660548762583">
                      <FontAwesomeIcon icon={faPhone} />
                      <span>9660548762583</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${contactInfo.data[0].account}`}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span>{contactInfo.data[0].account}</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:{contactInfo.data[0].account}">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>{contactInfo.data[1].account}</span>
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
                <h3> {locale == "en" ? "Contact us" : "راسلنا الان "}</h3>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="nameID">
                    <Form.Label>
                      {" "}
                      {locale == "en" ? "Name" : "الاسم"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={locale == "en" ? "Name" : "الاسم"}
                      {...register("name")}
                      isInvalid={!!errors.name}
                    />
                    {errors.name?.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group controlId="emailID">
                    <Form.Label>
                      {" "}
                      {locale == "en" ? "Email" : "البريد الإلكترونى "}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@test.com"
                      {...register("email")}
                      isInvalid={!!errors.email}
                    />
                    {errors.email?.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group controlId="reasonID">
                    <Form.Label>
                      {" "}
                      {locale == "en"
                        ? "Reason for communication"
                        : "سبب التواصل "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        locale == "en"
                          ? "Reason for communication"
                          : "سبب التواصل "
                      }
                      {...register("contactReason")}
                      isInvalid={!!errors.contactReason}
                    />
                    {errors.contactReason?.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.contactReason?.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group controlId="meesageID">
                    <Form.Label>
                      {" "}
                      {locale == "en" ? "Message" : "الرسالة"}
                    </Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={6}
                      placeholder={locale == "en" ? "write here" : "اكتب هنا"}
                      {...register("message")}
                      isInvalid={!!errors.message}
                    />
                    {errors.message?.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "25px" }}
                  >
                    <Button
                      type="submit"
                      className="special_btn"
                      style={{ display: "block", width: "100%" }}
                    >
                      {" "}
                      <span> {locale == "en" ? "Send" : "إرسال"}</span>{" "}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
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
      </main>
    </>
  );
};

export default Contact;
