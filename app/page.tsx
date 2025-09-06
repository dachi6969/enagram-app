"use client"
import MainContent from "./components/mainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
