import Meta from "../src/components/Meta";
import { useRouter } from "next/router";
// styles
import styles from "./../styles/pages/accounts.module.css"
import { Container } from "react-bootstrap";




const Accounts = () => {

  // lang
const { locale } = useRouter();


  return (
    <>
      <Meta title="Ahruf | Accounts" />

      <main className={styles.main_content}>
        <Container>
            <div className={styles.account}>
                <h3> {locale == "en" ? "Ahruf Center for literacy programs" : "مركز أحرف لبرامج محو الأمية "}</h3>
                <p> {locale == "en" ? "Al Rajhi Bank" : "مصرف الراجحي"}</p>
                <div className={styles.item}>
                    <span className={styles.item_txt}> {locale == "en" ? "IBAN number" : "رقم الايبان"}</span>
                    <span className={styles.item_num}>SA1180000336608016128782</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.item_txt}>{locale == "en" ? "account number" : " رقم الحساب"}</span>
                    <span className={styles.item_num}>336608016128782</span>
                </div>
            </div>
        </Container>
      </main>
    </>
  );
};

export default Accounts;
