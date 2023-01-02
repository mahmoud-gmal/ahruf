



// react core
import React, { useState , useEffect, useRef, useCallback } from "react";
import  { useRouter } from "next/router";
// nextjs components
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./../src/context/AuthContext";

// custom components
import Meta from "../src/components/Meta";


// styles
import styles from "./../styles/pages/profile.module.css";

// bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTable, faBookBookmark, faBook, faCommentAlt, faPaperPlane, faFilePdf} from "@fortawesome/free-solid-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";


// tabs
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import Fancybox from "../src/components/Fancybox.js";

// custom nav tabs
const Tab = ({ children }) => {
  const { onClick, isActive } = useTabState();
  return (
    <li onClick={onClick} className={`${isActive ? styles.active : "inactive"} tab`}>
      {children}
    </li>
  );
};

// custom tab content
const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <>{children}</> : null;
};

// import "emoji-mart/css/emoji-mart.css";


// https://codesandbox.io/s/flamboyant-lucy-sgs1ys?file=/src/App.tsx


// hook-form & yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  message: Yup.string()
    .required("هذا الحقل مطلوب")

});

// emoji-picker-react
// import dynamic from 'next/dynamic';

// const Picker = dynamic(
//   () => {
//     return import('emoji-picker-react');
//   },
//   { ssr: false }
// );
// import Picker from 'emoji-picker-react';

// package 2
import dynamic from 'next/dynamic';
import axios from "axios";
import withAuth from "../src/components/auth/withAuth";
import { LoopCircleLoading  } from "react-loadingg";

export const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);




 const Profile = () =>{

  const router = useRouter()

// lang
  const { locale, locales, asPath } = useRouter();
  const [messages, setMessages] = useState([]);
  const { current: myArray } = useRef(["one", "two", "three"]);
  const [lessonsTable, setLessonsTable] = useState([]);
  const [lessonsHistory, setLessonsHistory] = useState([]);

  const [studentName, setStudentName] = useState("");

  const [loading, setLoading] = useState(true);



  const { token,tokenChanged } = useAuth();

  useEffect(() => {

// student
  axios.get(
    `${process.env.NEXT_PUBLIC_API_URI}student`,
    {headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token ? token : localStorage.getItem('token')}`,
            'Accept-Language': locale
            }   
        }
  )
  .then((response) => {
      // console.log(response.data.data);
      setStudentName(response.data.data.student_name);
    },
    (error) => {
      // if token changed so become unathoried request
      if(error.response.status == 401){
        // router.push('/login')
        tokenChanged();
      }
      console.log(error.response);
    }
  );
// student/lessons
  axios.get(
    `${process.env.NEXT_PUBLIC_API_URI}student/lessons`,
    {headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token ? token : localStorage.getItem('token')}`,
            'Accept-Language': locale
            }   
        }
  )
  .then((response) => {
      // console.log(response.data.data);
      setLoading(false);
      setLessonsTable(response.data.data);
    },
    (error) => {
      console.log(error);
    }
  );

// student/lessons
axios.get(
  `${process.env.NEXT_PUBLIC_API_URI}student/history`,
  {headers: {
          "Content-type": "Application/json",
          "Authorization": `Bearer ${token ? token : localStorage.getItem('token')}`,
          'Accept-Language': locale
          }   
      }
)
.then((response) => {
    setLessonsHistory(response.data.data);
  },
  (error) => {
    console.log(error);
  }
);


}, [])







// time in am/pm format 12h
const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ' <br/><span> ' + ampm + '</span>';
  return strTime;
}

  // date
  const date = new Date();
  const month = date.toLocaleString('en-US', {month: 'short'});
  const day = date.getDate()



// Chat form
const [messageInput, setMessageInput] = useState("");
// emojj btn
const [emojiVisible, setEmojiVisible] = useState(false);
const onEmojiClick = (event, emojiObject) => {
    setMessageInput((messageInput) => messageInput + emojiObject.emoji);
};

// useEffect(() => {
//   onEmojiClick;
// }, [messageInput]);


// validition
const { register,handleSubmit,reset, formState: { errors }} = useForm({
  resolver: yupResolver(validationSchema)
});
// console.log(lessonsHistory);


// const logResult = useCallback(() => {

// }, []); //logResult is memoized now.


  useEffect(() => {

    axios.get(
      `https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/student/getMessages`,
      {headers: {
              "Content-type": "Application/json",
              "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2EtaWJyYWhlbS5henExLmNvbS9BaHJ1Zi9EYXNoYm9hcmRzL2FwaS9zdHVkZW50L2xvZ2luIiwiaWF0IjoxNjcyNjU0Nzc1LCJleHAiOjE2NzI3NDExNzUsIm5iZiI6MTY3MjY1NDc3NSwianRpIjoiRDR4R25UMElFbnkyazVYZiIsInN1YiI6IjQ1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qbPRZZAEkaxwMMi6keZCUaGPttlrVHHp3V96BmRR4kQ`,
              'Accept-Language': locale
              }   
          }
    )
    .then((response) => {
        // console.log(response.data.data);
        setMessages(response.data.data)
        // setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    
    
    }, [])




const onSubmit = (values) =>{
  // console.log(data);
  const formData = {
    message: values.message,
  }


  // .then((response) => {
  //     // console.log(response.data.message);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );



  
  

  axios.all([
    axios(
      `https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/student/homeworkMessages`,
      {
        method: "post",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2EtaWJyYWhlbS5henExLmNvbS9BaHJ1Zi9EYXNoYm9hcmRzL2FwaS9zdHVkZW50L2xvZ2luIiwiaWF0IjoxNjcyNjU0Nzc1LCJleHAiOjE2NzI3NDExNzUsIm5iZiI6MTY3MjY1NDc3NSwianRpIjoiRDR4R25UMElFbnkyazVYZiIsInN1YiI6IjQ1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qbPRZZAEkaxwMMi6keZCUaGPttlrVHHp3V96BmRR4kQ`,
      },
        data: JSON.stringify(formData)
      }
    ).then( () => {

      axios.get(
        `https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/student/getMessages`,
        {headers: {
                "Content-type": "Application/json",
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2EtaWJyYWhlbS5henExLmNvbS9BaHJ1Zi9EYXNoYm9hcmRzL2FwaS9zdHVkZW50L2xvZ2luIiwiaWF0IjoxNjcyNjU0Nzc1LCJleHAiOjE2NzI3NDExNzUsIm5iZiI6MTY3MjY1NDc3NSwianRpIjoiRDR4R25UMElFbnkyazVYZiIsInN1YiI6IjQ1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qbPRZZAEkaxwMMi6keZCUaGPttlrVHHp3V96BmRR4kQ`,
                'Accept-Language': locale
                }   
            }
      ).then((response) => {
            // console.log(response.data.data);
            setMessages(response.data.data)
            // setLoading(false);
            reset();
          },
          (error) => {
            console.log(error);
          }
        );
    }

    )


  ])








}

  return (
    <>
      <Meta title="ahruf | Profile " />


      <main className="main-content">


{/* profile tabs */}

<div className={styles.profile}>
  <Container>
  <Tabs>
    <Row>


        {/*=============== Nav Bills =====================*/}
      <Col lg={3} className="p-0">
        <div className={styles.nav_content}>
            <ul className={styles.back}>
                <li><Link href="/"><a><FontAwesomeIcon icon={faArrowRight}  color={"#FFF"} width={20}/>  {locale == "en" ? "Back to home" : "رجوع للرئيسية"} </a></Link></li>
                </ul>
                <div className={styles.avatar}>
                <div className="avater_logo">
                    <Image
                        src="/assets/profile/student.png"
                        alt="logo"
                        width="92"
                        height="92"
                        objectFit="contain"
                    />
                </div>
                    <h4 className={styles.avatar_text}>{locale == "en" ? "Hello" : "مرحبا"} {studentName} !</h4>
                </div>   
                  <ul className={styles.profile_nav_list}>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faTable} color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>{locale == "en" ? "school schedule" : " جدول الحصص"}</h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faBookBookmark}  color={"#4269EF"} width={14} height={14} /></div><h3 className={styles.text}>{locale == "en" ? "curricula" : "المناهج"}</h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faBook} color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>{locale == "en" ? "Homework" : "حل الواجب"} </h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faCommentAlt}  color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>{locale == "en" ? "Chat with class" : "شات مع الفصل"} </h3></Tab>
                  </ul>

       </div>
      </Col>


    {/*=============== TAB CONTENT =====================*/}
      <Col lg={9} className="p-0">

    {/*========== class schedule  ==============*/}
      <Panel>
      <div className={`${styles.tab_content} ${styles.class_schedule}`}>

        <Row>
            <Col md={5}>
                <h2 className={styles.table_title}>{locale == "en" ? "school schedule" : " جدول الحصص"}</h2>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
            <div className={styles.full_date}>
                <div className={styles.time}>
                    <span dangerouslySetInnerHTML={{__html: formatAMPM(new Date)}}></span>
                </div>
                <div className={styles.date}>
                  <span>{day}</span><span><br />{month}</span>
                </div>
            </div>
            </Col>
        </Row>

        <div className={styles.days}>

        {loading && (<LoopCircleLoading  color="#4269EF" size="large" />)}

        {lessonsTable &&
                  lessonsTable.map((item, index) => (
            <div key={index} className={styles.day}>
                <div className={styles.day_head}>{item.day}</div>
                <div className={styles.day_body}>
                  <h4> {locale == "en" ? "Not found" : "لا يوجد "}</h4>
                    {/* <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div> */}
                </div>
            </div>
                  ))}


        </div>
        </div>
      </Panel>

    {/*========== curricula ==============*/}
      <Panel>
      <div className={`${styles.tab_content} ${styles.curricula}`}>

      <Row>
            <Col md={5}>
                <h2 className={styles.table_title}> {locale == "en" ? "curricula" : "المناهج"}</h2>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
            <div className={styles.full_date}>
                <div className={styles.time}>
                    <span dangerouslySetInnerHTML={{__html: formatAMPM(new Date)}}></span>
                </div>
                <div className={styles.date}>
                  <span>{day}</span><span><br />{month}</span>
                </div>
            </div>
            </Col>
        </Row>

        <div className={styles.items}>

        {lessonsHistory &&
                  lessonsHistory.map((item) => (
            <div key={item.id} className={styles.item}>
               <div className={styles.image_wrapper}>
                  <Link href={item.zoom_link}>
                    <a className="img">
                      <Image
                        alt=""
                        src="/assets/ccrt.png"
                        width="239"
                        height="149"
                        objectFit="contain"
                      />
                      <i className="fa fa-play"></i>
                    </a>
                    </Link>
               </div>
                <div className={styles.item_des}>
                    <p>{item.title}</p>
                    <div className={styles.day_wrapper}>
                    <Image src="/assets/profile/stopwatch-1.png" alt=".." width="22" height="22" objectFit="contain"/>
                    <span className="day"> {locale == "en" ? "Day" : "يوم"}:</span>
                    <div className="date">{item.date.day} {item.date.month}</div>
                    </div>

                </div>
            </div>
            ))}

        </div>

        </div>

      </Panel>
    {/*========== chatform ==============*/}
      <Panel>
      <div className={`${styles.tab_content} ${styles.chatform}`}>

        <Row>
            <Col md={5}>
                <h2 className={styles.table_title}>  {locale == "en" ? "Homework" : "حل الواجب"}</h2>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
            <div className={styles.full_date}>
                <div className={styles.time}>
                    <span dangerouslySetInnerHTML={{__html: formatAMPM(new Date)}}></span>
                </div>
                <div className={styles.date}>
                  <span>{day}</span><span><br />{month}</span>
                </div>
            </div>
            </Col>
        </Row>

        <div className={styles.items}>


        {messages?.messages &&
              messages?.messages.map((message, i) => (
                
          
       
            <div key={i} className={`${styles.item} ${styles.send}`}>
              <div className={styles.right_side}>

{/* {console.log(message != null && message.type === "IMAGE" && "text and image field")} */}
                {/* text item */}
                {message.message != null && (
                <div className={`${styles.message_wrapper} text`}>
                  <p className={styles.message}>{message.message}</p>
                </div>
                )}

              {/* image item */}
              {message.type === "IMAGE" && message.image &&  (
                <div className={`${styles.message_wrapper} image`} style={{padding: '14px 0px'}}>
                   <Image src={message?.image} alt=".." width="280" height="310" objectFit="contain"/>
                </div>
              )}

              {/* audio item */} 
              {message.type === "AUDIO" || message.type === "VIDEO" && (
              <div className={`${styles.message_wrapper} audio_video`} style={{padding: '14px 0px'}}>
                <audio controls>
                  <source src={message?.image} type="audio/mpeg"/>
                Your browser does not support the audio element.
                </audio>
                </div>
              )}

              {/* PDF item */} 
              {message.type === "FILE"  && (
                <div className={`${styles.message_wrapper} file_pdf`} style={{padding: '14px 0px', background: 'none'}}>
                {/* <iframe src={message.image} width="100%" height="250px"></iframe> */}
                <Link href={message?.image}>
                  <a className="special_btn "><span className="d-flex mr-2">  {locale == "en" ? "Donwload pdf" : "تحميل الملف"}  <FontAwesomeIcon icon={faFilePdf} width="20" style={{marginInlineStart: '10px'}}/> </span></a>
                </Link>
                </div>
              )}


          {message.message === null  && message.image === null  ? ('') : (
          <span className={styles.time}>{message.sent}</span>
           ) }

              </div>

              {message.message === null  &&  message.image === null  ? ('') : (
              <div className={styles.left_side}>
                <Image src="/assets/teacher-2.png" alt=".." width="35" height="35" objectFit="contain"/>
              </div>
              ) }

            </div>


              ))}

  

        </div>


        <div className="emoij-btn d-none">
          <span onClick={() => setEmojiVisible(() => !emojiVisible)}>
            &#128512;
          </span>
          {emojiVisible && <Picker onEmojiClick={onEmojiClick} />}
        </div>


        {/* <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div> */}
        <div className={styles.form_chat}>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Control
                type="text"
                defaultValue={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className={styles.text_input}
                placeholder="اكتب هنا .." 
                {...register("message")} isInvalid={!!errors.message}
                />

            {errors.message?.message && (<Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>)}
            </Form.Group>

            <div className={styles.form_btns}>
            <Button type="submit" className={styles.send_icon}> <FontAwesomeIcon width={46} height={39} color={'#80AEFF'}icon={faPaperPlane} /> </Button>     
            </div>

                </Form>              
            </div>

        </div>

      </Panel>
    {/*========== chatform ==============*/}
      <Panel>
      <div className={`${styles.tab_content} ${styles.chatform}`}>

        <Row>
            <Col md={5}>
                <h2 className={styles.table_title}>{locale == "en" ? "Chat with class" : "شات مع الفصل"} </h2>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
            <div className={styles.full_date}>
                <div className={styles.time}>
                    <span dangerouslySetInnerHTML={{__html: formatAMPM(new Date)}}></span>
                </div>
                <div className={styles.date}>
                  <span>{day}</span><span><br />{month}</span>
                </div>
            </div>
            </Col>
        </Row>

        <div className={styles.items}>


        {messages?.messages &&
              messages?.messages.map((message, i) => (
                
          
       
            <div key={i} className={`${styles.item} ${styles.send}`}>
              <div className={styles.right_side}>

{/* {console.log(message != null && message.type === "IMAGE" && "text and image field")} */}
                {/* text item */}
                {message.message != null && (
                <div className={`${styles.message_wrapper} text`}>
                  <p className={styles.message}>{message.message}</p>
                </div>
                )}

              {/* image item */}
              {message.type === "IMAGE" && message.image &&  (
                <div className={`${styles.message_wrapper} image`} style={{padding: '14px 0px'}}>
                   <Image src={message?.image} alt=".." width="280" height="310" objectFit="contain"/>
                </div>
              )}

              {/* audio item */} 
              {message.type === "AUDIO" || message.type === "VIDEO" && (
              <div className={`${styles.message_wrapper} audio_video`} style={{padding: '14px 0px'}}>
                <audio controls>
                  <source src={message?.image} type="audio/mpeg"/>
                Your browser does not support the audio element.
                </audio>
                </div>
              )}

              {/* PDF item */} 
              {message.type === "FILE"  && (
                <div className={`${styles.message_wrapper} file_pdf`} style={{padding: '14px 0px', background: 'none'}}>
                {/* <iframe src={message.image} width="100%" height="250px"></iframe> */}
                <Link href={message?.image}>
                  <a className="special_btn "><span className="d-flex mr-2">  {locale == "en" ? "Donwload pdf" : "تحميل الملف"}  <FontAwesomeIcon icon={faFilePdf} width="20" style={{marginInlineStart: '10px'}}/> </span></a>
                </Link>
                </div>
              )}


          {message.message === null  && message.image === null  ? ('') : (
          <span className={styles.time}>{message.sent}</span>
           ) }

              </div>

              {message.message === null  &&  message.image === null  ? ('') : (
              <div className={styles.left_side}>
                <Image src="/assets/teacher-2.png" alt=".." width="35" height="35" objectFit="contain"/>
              </div>
              ) }

            </div>


              ))}

  

        </div>


        <div className={styles.form_chat}>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Control
                type="text"
                className={styles.text_input}
                placeholder="اكتب هنا .." 
                {...register("message")} isInvalid={!!errors.message}/>

            {errors.message?.message && (<Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>)}
            </Form.Group>

            <div className={styles.form_btns}>
            <Button type="submit" className={styles.send_icon}> <FontAwesomeIcon width={46} height={39} color={'#80AEFF'}icon={faPaperPlane} /> </Button>     
            </div>

                </Form>              
            </div>

        </div>

      </Panel>





      </Col>




    </Row>
    </Tabs>
  </Container>
</div>



      </main>
    </>
  );
}

export default withAuth(Profile);