"use client"
import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import Subheader from "../subHeader/Subheader";
import styles from "./MobileSidebar.module.css";


const MobileSidebar = () => {
    return(
    <div>
        <div className={styles.header}>
            <div>
                <Logo className={styles.mobileLogo}/>
            </div>
            <div>
                <MenuIcon className={styles.menuIcon}/>
            </div>
        </div>
        <Subheader />
    </div>
    )
}


export default MobileSidebar;