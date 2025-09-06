"use client"
import styles from "./TopBar.module.css";
import Select from "../content/select/Select";

export default function TopBar() {

    return(
        <div className={styles.topBar}>
            <div className={styles.menu}>
                <div className={styles.selectWrap}>
                <Select />
                <label className={styles.customCheckbox}>
                    <input type="checkbox" />
                    <span className={styles.checkbox}></span>
                    <span className={styles.checkTitle}>
                        ფორმატის შენარჩუნება
                    </span>
                </label>
                </div>
                </div>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ახლის გახსნა
            </button>
        </div>
    )
}
