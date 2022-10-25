import { useRouter } from 'next/router';
import { server } from '../../../config';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";

import Meta from '../../../src/components/Meta'
import Image from "next/image";
import placholder from './../../../public/placeholder.png';
const Work = ({ work }) => {


  const { asPath } = useRouter();
  // console.log(asPath); // '/works/123'
// console.log(`http://localhost:3000${asPath}`)
  return (
    <>
      <Meta title = {`مجتمع صفوة التقني | اعمالنا | ${work.title.rendered}`} description={work.excerpt}/>
      <section className="single-post body-inner">
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-sm-12">
                    <div className="single-inner">
                        <div className="img-block">
                            <div className="img">
                            <Image alt={work.title.rendered} src={work.featured_image ? work.featured_image : placholder} width="100%" height="100%" layout="responsive" />
                            </div>
                            <div className="social-post">
                            <FacebookShareButton url={`${server}${asPath}`} title={work.title.rendered} description={work.excerpt} summary={work.excerpt}>
                              <FacebookIcon size={38} round={true} />
                            </FacebookShareButton>

                            <TwitterShareButton url={`${server}${asPath}`} title={work.title.rendered} description={work.excerpt} summary={work.excerpt}>
                              <TwitterIcon size={38} round={true} />
                            </TwitterShareButton>

                            <LinkedinShareButton url={`${server}${asPath}`} title={work.title.rendered} description={work.excerpt} summary={work.excerpt}>
                              <LinkedinIcon size={38} round={true} />
                            </LinkedinShareButton>
                         
                            </div>
                        </div>
                        <div className="text-post">
                            <div className="date">{work.formatted_date}</div>
                            <h3 dangerouslySetInnerHTML={{ __html: work.title.rendered }}></h3>
							
							
					        <div dangerouslySetInnerHTML={{ __html: work.content.rendered }}></div>
							
                        </div>
                    </div>
                </div>
   

            </div>
        </div>
    </section>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://safwa-tech.com/wp-json/wp/v2/work/${context.params.id}`)

  const work = await res.json()

  return {
    props: {
      work,
      revalidate : 60  //In seconds
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://safwa-tech.com/wp-json/wp/v2/work')

  const works = await res.json()

  const ids = works.map((work) => work.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}





export default Work
