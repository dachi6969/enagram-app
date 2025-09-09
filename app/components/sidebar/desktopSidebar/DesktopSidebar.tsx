
import Logo from "../Logo/Logo";
import styles from "./DesktopSidebar.module.css";
import User from "./user/User";
import CheckIcon from "./checkIcon/CheckIcon";
import MicIcon from "./micIcon/MicIcon";
import PdfIcon from "./pdfIcon/PdfIcon";
import TextIcon from "./textIcon/TextIcon";
import VoiceIcon from "./voiceIcon/VoiceIcon";
import ArrowIcon from "./arrowIcon/ArrowIcon";
import { JSX } from "react";

type MenuItem = {
    icon: JSX.Element;
    title: string | JSX.Element;
  };

const menuItems: MenuItem[] = [
{
    icon: <CheckIcon />,
    title: 'მართლმწერი'
},
{
    icon: <TextIcon />,
    title: 'ტექსტის შედარება'
},
{
    icon: <MicIcon />,
    title: (
        <>
            ხმა <ArrowIcon /> ტექსტი
        </>
    )
},
{
    icon: <VoiceIcon />,
    title: (
        <>
            ტექსტი <ArrowIcon /> ხმა
        </>
    )
},
{
    icon: <PdfIcon />,
    title: 'PDF კონვერტაცია'
}
];
    const DesktopSidebar = () => {
    const selected = 'ტექსტის შედარება';
    return(
        <div className={styles.mainWrap}>
            <div className={styles.backwardIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 14.1666L5 9.99992L9.16667 5.83325" stroke="white" strokeOpacity="0.5" 
                strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 14.1666L10.8333 9.99992L15 5.83325" stroke="white" strokeOpacity="0.5" 
                strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={styles.menuWrap}>
                <Logo className={styles.desktopLogo}/>
                <div className={styles.menu}>
                    {
                    menuItems.map((item,i) =>  (
                        <div 
                        key={i} 
                        className={`${styles.item} ${item.title === selected ? styles.activeItem : ""}`}
                        >
                            
                            {item.icon} {item.title} 

                            {item.title === selected && 
                                <>
                                    <div className={styles.topPenetration}>
                                        <div className={styles.top}></div>
                                    </div>

                                    <div className={styles.botPenetration}>
                                        <div className={styles.bottom}></div>
                                    </div>
                                </>
                            }

                        </div>
                    ))
                    }
                </div>
            </div>

            <User />
        </div>
    )
}

export default DesktopSidebar;