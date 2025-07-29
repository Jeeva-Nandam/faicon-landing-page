// import React from "react";
// import styles from "./Footer.module.css";
// import logo from "../../assets/Logo.png";

// const Footer = () => (
//   <footer className={styles.footer}>
//     <div className={styles.companySection}>
//       <img src={logo} alt="Fiacon Logo" className={styles.logo} />
//       <p>
//         Fiacon Cleaning Services Group is a privately owned, Australian company, established in Sydney in 1993, as a reliable, commercial cleaning company. Fiacon now provides an extensive range of cleaning and property services for approximately 120 commercial businesses with 270 sites nationally large, and small, providing a cost-efficient, high-quality, and consistently reliable product.
//       </p>
//     </div>

//     <div className={styles.contactSection}>
//       <h4>GET IN TOUCH</h4>
//       <p>1300 389 5...</p>
//       <p>Unit 10, 160 Hartley Rd, Smeaton Grange NSW 2567, Australia</p>
//       <p>
//         <a href="mailto:info@fiaconcleaningservices.com.au" className={styles.email}>info@fiaconcleaningservices.com.au</a>
//       </p>
//     </div>

//     <div className={styles.hoursSection}>
//       <h4>Hours of Operations</h4>
//       <p>24 Hours a day</p>
//       <p>7 Day's a week</p>
//     </div>

//     <div className={styles.serviceSection}>
//       <h4>CLEANING SERVICES</h4>
//       <ul>
//         <li>Commercial Cleaning Sydney</li>
//         <li>Office Cleaning Sydney</li>
//         <li>Warehouse Cleaning Sydney</li>
//         <li>Factory Cleaning Sydney</li>
//         <li>Medical Cleaning Sydney</li>
//         <li>School Cleaning Sydney</li>
//         <li>Gym Cleaning Sydney</li>
//         <li>Childcare Cleaning Sydney</li>
//       </ul>
//     </div>

//     <div className={styles.siteLinks}>
//       <h4>SITE LINKS</h4>
//       <ul>
//         <li>About Us</li>
//         <li>Our Charity</li>
//         <li>Services</li>
//         <li>Contact</li>
//         <li>Sitemap</li>
//       </ul>
//     </div>

//     <div className={styles.quoteSection}>
//       <button className={styles.quoteButton}>GET ONSITE QUOTE NOW</button>
//       <span className={styles.or}>… or Call 1300 389 5…</span>
//       <div className={styles.socialLinks}>
//         <span className={styles.socialIcon}><i className="fab fa-facebook-f"></i></span>
//         <span className={styles.socialIcon}><i className="fab fa-twitter"></i></span>
//         <span className={styles.socialIcon}><i className="fab fa-instagram"></i></span>
//       </div>
//     </div>

//     <div className={styles.paymentSection}>
//       <img src="/assets/visa.png" alt="Visa" />
//       <img src="/assets/mastercard.png" alt="Mastercard" />
//       <img src="/assets/amex.png" alt="American Express" />
//       <img src="/assets/bank.png" alt="Bank Deposit" />
//     </div>

//     <div className={styles.bottomNote}>
//       <p>
//         Fiacon Property Services Proprietary Services trading as Fiacon Cleaning Services Sydney. Partnered with <span className={styles.partner}>REACTIVE</span>
//       </p>
//     </div>
//   </footer>
// );

// export default Footer;

import React from "react";
import styles from "./Footer1.module.css";
import logo from "../../assets/Logo.png";
import payments from "../../assets/payments.png";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.leftColumn}>
      <img src={logo} alt="Fiacon Logo" className={styles.logo} />
      <p className={styles.description}>
        Fiacon Cleaning Services Group is a privately owned, Australian company, established in Sydney in 1993, as a reliable, commercial cleaning company. Fiacon now provides an extensive range of cleaning and property services for approximately 120 commercial businesses with 270 sites nationally large, and small, providing a cost-efficient, high-quality, and consistently reliable product.
      </p>
    </div>

    <div className={styles.rightColumn}>
      <div className={styles.sectionGroup}>
        <div className={styles.contactSection}>
          <h4>GET IN TOUCH</h4>
          <p>📞 1300 389 5...</p>
          <p>📍 Unit 10, 160 Hartley Rd, Smeaton Grange NSW 2567, Australia</p>
          <p>📧 <a href="mailto:info@fiaconcleaningservices.com.au" className={styles.email}>info@fiaconcleaningservices.com.au</a></p>
          <h4>Hours of Operations</h4>
          <p>24 Hours a day</p>
          <p>7 Day's a week</p>
        </div>

        <div className={styles.serviceSection}>
          <h4>CLEANING SERVICES</h4>
          <ul>
            <li>Commercial Cleaning Sydney</li>
            <li>Office Cleaning Sydney</li>
            <li>Warehouse Cleaning Sydney</li>
            <li>Factory Cleaning Sydney</li>
            <li>Medical Cleaning Sydney</li>
            <li>School Cleaning Sydney</li>
            <li>Gym Cleaning Sydney</li>
            <li>Childcare Cleaning Sydney</li>
          </ul>
        </div>

        <div className={styles.siteLinks}>
          <h4>SITE LINKS</h4>
          <ul>
            <li>About Us</li>
            <li>Our Charity</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <button className={styles.quoteButton}>GET ONSITE QUOTE NOW</button>
        <p className={styles.or}>... Or Call 1300 389 5...</p>
        
        <div className={styles.socialLinks}>
          <span className={styles.socialIcon}><i className="fab fa-facebook-f"></i></span>
          <span className={styles.socialIcon}><i className="fab fa-twitter"></i></span>
          <span className={styles.socialIcon}><i className="fab fa-instagram"></i></span>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <img src={payments} alt="Visa" />
        {/* <img src="/assets/mastercard.png" alt="Mastercard" />
        <img src="/assets/amex.png" alt="American Express" />
        <img src="/assets/bank.png" alt="Bank Deposit" /> */}
      </div>
    </div>

    <div className={styles.bottomNote}>
      <p>
    Fiacon Property Services Proprietary Services trading as Fiacon Cleaning Services Sydney. Partnered with 
    <span className={styles.reactive}> REACTIVE <span className={styles.it}>IT</span></span>
  </p>
    </div>
  </footer>
);

export default Footer;
