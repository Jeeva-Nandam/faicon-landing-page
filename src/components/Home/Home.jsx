import React from "react";
import styles from "./Home.module.css";
import appleIcon from "../../assets/apple.png";
import androidIcon from "../../assets/android.png";
import Search from "../Search/Search";
const Home = () => (
  <main className={styles.container}>
    <Search />
    <section className={styles.purpose}>
      <h1 className={styles.heading}>Purpose of the App</h1>
      <p className={styles.desc}>
        Welcome to Pioneering CMS, your digital assistant for streamlined cleaning management.
        To get started, we’ve made the onboarding process smooth, secure, and compliant. Each step ensures accurate user verification, safety, and readiness for field operations.
      </p>
    </section>

    <section className={styles.platforms}>
      <div className={styles.platformCard}>
        <img src={appleIcon} alt="iOS" className={styles.platformIcon} />
        <div className={styles.flexbox}>
          <div className={styles.platformTitle}>For iOS</div>
          <div className={styles.cmsTitle}>Pioneering CMS</div>
          
        </div>
        <button className={styles.installButton}>Install</button>
      </div>
      <div className={styles.platformCard}>
        <img src={androidIcon} alt="Android" className={styles.platformIcon} />
        <div>
          <div className={styles.platformTitle}>For Android</div>
          <div className={styles.cmsTitle}>Pioneering CMS</div>
          
        </div>
        <button className={styles.installButton}>Install</button>
      </div>
    </section>

    {/* <section className={styles.howItWorks}>
      <h2>How it Works</h2>
      <ul className={styles.steps}>
        <li>
          <span className={styles.stepTitle}>Registration:</span> Lorem Ipsum is simply dummy text
        </li>
        <li>
          <span className={styles.stepTitle}>Sign In:</span> Lorem Ipsum is simply dummy text
        </li>
        <li>
          <span className={styles.stepTitle}>Sign Out:</span> Lorem Ipsum is simply dummy text
        </li>
      </ul>
    </section> */}
    <section className={styles.howItWorks}>
  <h2>How it Works</h2>
  <div className={styles.steps}>
    <div className={styles.stepCard}>
      <div className={styles.iconWrapper}>
        <i className="fas fa-user-plus"></i>
      </div>
      <div>
        <div className={styles.stepTitle}>Registration</div>
        <p className={styles.stepText}>Lorem Ipsum is simply dummy text</p>
      </div>
    </div>

    <div className={styles.stepCard}>
      <div className={styles.iconWrapper}>
        <i className="fas fa-sign-in-alt"></i>
      </div>
      <div>
        <div className={styles.stepTitle}>Sign In</div>
        <p className={styles.stepText}>Lorem Ipsum is simply dummy text</p>
      </div>
    </div>

    <div className={styles.stepCard}>
      <div className={styles.iconWrapper}>
        <i className="fas fa-sign-out-alt"></i>
      </div>
      <div>
        <div className={styles.stepTitle}>Sign Out</div>
        <p className={styles.stepText}>Lorem Ipsum is simply dummy text</p>
      </div>
    </div>
  </div>
</section>

  </main>
);

export default Home;
