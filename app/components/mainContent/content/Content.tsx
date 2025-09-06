"use client"
import styles from "./Content.module.css";

export default function Content() {
    return(
        <div className={styles.content}>
            <div className={styles.contentWrap}>
                <div className={styles.leftBox}>
                    <textarea placeholder="დაიწყე წერა..."/>
                </div>

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                <path d="M16 5.33325V26.6666" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6654 10.6666L16.0001 5.33325L21.3347 10.6666" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3347 21.3307L16.0001 26.6654L10.6654 21.3307" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className={styles.rightBox}>
                    <textarea placeholder="დაიწყე წერა..."/>
                </div>
            </div>
            <button>
                შედარება
            </button>
        </div>
    )
};