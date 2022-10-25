import Image from "next/image";

import Meta from "../src/components/Meta";
import Link from "next/link";
import { useState } from "react";






export const getStaticProps = async () => {
    // fetching data from CPT works
    const worksRes = await fetch(`https://safwa-tech.com/wp-json/wp/v2/work`);
    const worksData = await worksRes.json();

    if (!worksData) {
      return {
        notFound: true,
      };
    }
    return {
      props: { works: worksData}, // will be passed to the page component as props
      revalidate : 60  //In seconds
    };
  };




export default function Works({ works }) {

console.log(works)

  const trimWords = (str, no_words) =>  {
    return str.split(" ").splice(0,no_words).join(" ");
}

const convertHtmlToString = (htmlString) =>  {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "")
}

  return (
    <>
      	<Meta title="مجتمع صفوة التقني |  اعمالنا " />
      <section className="blogs-page body-inner">
        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    <div className="title wow animate__animated animate__bounceInDown">
                        <h3>أعمالنا</h3>
                    </div>
                </div>
				
                  {works &&
                    works.map((post, index) => (
                     
           
                <div key={index} className="col-md-4 col-sm-12 wow animate__animated animate__zoomInDown">
                    <div className="blog-block">
                        <div className="img-block">
                            <Link  href={`/works/${post.id}`}><a className="img">
                           <Image alt={post.title.rendered} src={post.featured_image} width="100%" height="100%" objectFit="cover" objectPosition="bottom" layout="responsive" /> </a></Link>
                        </div>
                        <div className="details">
                            <div className="date">{post.formatted_date}</div>
                            <Link  href={`/works/${post.id}`} className="name"><a className="name" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a></Link>
                            <p>
                            {trimWords(convertHtmlToString(post.content.rendered), 18)}
                            </p>
                        </div>
                    </div>
                </div>
          
					 ))}
				
				
				
            </div>
        </div>
    </section>
    </>
  );
}
