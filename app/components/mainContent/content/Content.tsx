"use client"

import { useRef, useState } from "react";
import styles from "./Content.module.css";
import ReloadIcon from "./reloadIcon/ReloadIcon";
import CrossIcon from "./crossIcon/CrossIcon";
import WhileLoad from "./whileLoad/WhileLoad";

export default function Content() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [disabled,setDisabled] = useState<boolean>(false);
  const [reload,setReload] = useState<boolean>(false);

  const handleLeftInput = () => {
    if (leftRef.current) setLeftText(leftRef.current.innerText);
  };

  const handleRightInput = () => {
    if (rightRef.current) setRightText(rightRef.current.innerText);
  };

  const compare = () => {
    if (leftText === "" || rightText === "") return ; 
    setDisabled(true);
    setTimeout(() => {
        const oldWords = leftText.split(/\s+/).filter(Boolean);
        const newWords = rightText.split(/\s+/).filter(Boolean);
      
        const leftHTML = oldWords
          .map((word) =>
            !newWords.includes(word)
              ? `<span style="background-color:#ffcccc">${word}</span>&nbsp;`
              : word + " "
          )
          .join("");
      
        const rightHTML = newWords
          .map((word) =>
            !oldWords.includes(word)
              ? `<span style="background-color:#ccffcc">${word}</span>&nbsp;`
              : word + " "
          )
          .join("");
      
        if (leftRef.current) leftRef.current.innerHTML = leftHTML;
        if (rightRef.current) rightRef.current.innerHTML = rightHTML;

        setDisabled(false);
        if (reload) return
        else{
            setReload(true)
        }
    },5000)
  };
  

  return (
    <div className={styles.content}>
      
    <div className={styles.contentWrap}>
        <div className={styles.leftBox}>
          <div
            ref={leftRef}
            className={styles.editable}
            contentEditable
            suppressContentEditableWarning
            data-placeholder="დაიწყე წერა..."
            onInput={handleLeftInput}
          ></div>
        </div>

        <CrossIcon className={styles.icon}/>

        <div className={styles.rightBox}>
          <div
            ref={rightRef}
            className={styles.editable}
            contentEditable
            suppressContentEditableWarning
            data-placeholder="დაიწყე წერა..."
            onInput={handleRightInput}
          ></div>
        </div>
        
        { disabled &&  <WhileLoad />}
      </div>

        

        <button 
        onClick={compare}
        disabled={disabled}
        >
            { reload &&<ReloadIcon /> }
            შედარება
        </button>
    </div>
  );
}
