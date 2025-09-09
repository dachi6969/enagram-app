import TextIcon from "../desktopSidebar/textIcon/TextIcon";
import styles from "./Subheader.module.css";

const Subheader = () => {
    return(
        <div className={styles.subHeader}>
        <div className={styles.staticDropdown}>
            <TextIcon className={styles.dropdownLogo}/>
            
                ტექსტის შედარება
                
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1676_807)">
            <path d="M4.3225 4.66772L7 7.33939L9.6775 4.66772L10.5 5.49022L7 8.99022L3.5 5.49022L4.3225 4.66772Z" fill="#132450" fillOpacity="0.7"/>
            </g>
            <defs>
            <clipPath id="clip0_1676_807">
            <rect width="14" height="14" fill="white" transform="matrix(-1 0 0 1 14 0.000732422)"/>
            </clipPath>
            </defs>
            </svg>

        </div>
    </div>
    )
}

export default Subheader;