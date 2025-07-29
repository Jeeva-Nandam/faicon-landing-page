import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div className={styles.app}>
    <Navbar />
    <Home />
    <Footer />
  </div>
);

export default App;