"use client"
import Content from "./content/Content";
import styles from "./MainContent.module.css";
import TopBar from "./topBar/TopBar";


const MainContent = () => {
    return(
        <main className={styles.baseWrap}>
            <div className={styles.mainWrap}>
                <div className={styles.secondaryWrap}>
                    <TopBar />
                    <Content />
                </div>
            </div>
        </main>
    )
}

export default MainContent;