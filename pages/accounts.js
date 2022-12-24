import Meta from "../src/components/Meta";
import { useRouter } from "next/router";
// styles
import styles from "./../styles/pages/accounts.module.css"
import { Container } from "react-bootstrap";




const Accounts = () => {

  // lang
const { locale, locales, asPath } = useRouter();


  return (
    <>
      <Meta title="Ahruf | Accounts" />

      <main className={styles.main_content}>
        <Container>
            <div className={styles.account}>
                <h3>مركز أحرف لبرامج محو الأمية</h3>
                <p> مصرف الراجحي</p>
                <div className={styles.item}>
                    <span className={styles.item_txt}>رقم الايبان</span>
                    <span className={styles.item_num}>SA1180000336608016128782</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.item_txt}>رقم الحساب</span>
                    <span className={styles.item_num}>336608016128782</span>
                </div>
            </div>
        </Container>
      </main>
    </>
  );
};

export default Accounts;
