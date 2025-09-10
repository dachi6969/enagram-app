"use client"
import { useEffect, useState } from "react";
import CircleIcon from "../circleIcon/CircleIcon";
import styles from "./WhileLoad.module.css";


const WhileLoad = () => {
    const [percentage,setPercentage] = useState<number>(0);

    useEffect(() => {
      const percent = setInterval(() => {
        setPercentage(prev => {
          if (prev >= 100) {
            clearInterval(percent);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    
      return () => clearInterval(percent);
    }, []);
    
    return(
    <div className={styles.baseWrap}>
        <div className={styles.loader}>
          <CircleIcon />
          <div className={styles.processWrap}>
              <div>Converting...Tank you for your patience</div>
              <div className={styles.fillingWrap}>
                  {percentage}%
                  <div className={styles.filling}></div>
              </div>
          </div>
        </div>
      </div>
    )
};


export default WhileLoad;