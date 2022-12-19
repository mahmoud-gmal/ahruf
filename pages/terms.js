import Meta from "../src/components/Meta";
import { useRouter } from "next/router";
// styles
import styles from "./../styles/pages/terms.module.css";

// site url
const URL = process.env.NEXT_PUBLIC_API_URI;

// FETCHING DATA FROM API
export const getStaticProps = async ({locale }) => {

  // terms
  const policesRes = await fetch(`${URL}polices`, {headers: {'Accept-Language': locale }});
  const policesData = await policesRes.json();


  if ((!policesData)) {
    return {
      notFound: true,
    };
  }
  return {
    props: { polices: policesData }, // will be passed to the page component as props
    revalidate: 10, //In seconds
  };
};



const Terms = ({polices}) => {

  // lang
const { locale, locales, asPath } = useRouter();


  return (
    <>
      <Meta title="Ahruf | Terms" />

      <main className={styles.main_content}>

         <h2 className={styles.heading}> {locale == "en" ? "Terms and Conditions" : "الشروط والأحكام "}</h2>

        <section className={styles.privacy_section}>

        {polices.data &&
                polices.data.map((item, index) => (
            <>
              <h3 className={styles.sub_heading}>{item.title}</h3>
              <div className={styles.list_dots} dangerouslySetInnerHTML={{ __html: item?.description }}/>
            {(index === polices.data.length-1 || <span className={styles.dashed_line}></span> )}
           </>
           ))}

        </section>
      </main>
    </>
  );
};

export default Terms;
