import { useState } from "react";
import styles from "./Select.module.css";

type Language = "ქართული" | "english";

const selectLangs: Language[] = ['ქართული','english'];


const Select = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [selected,setSelected] = useState<Language>("ქართული")
    return(
        <div
        className={styles.customSelect}
        onClick={() => setIsOpen(!isOpen)}
        style={{
            borderColor: isOpen ? "#4571E4" : "#E0E0E0",
        }}
        >
        <span>{selected}</span>

        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
        >
            <path
            d="M12 15L7.75696 10.757L9.17196 9.34302L12 12.172L14.828 9.34302L16.243 10.757L12 15Z"
            fill="#51555B"
            />
        </svg>

        {isOpen && (
            <div className={styles.dropdown}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {selectLangs.map((lang: Language, i: number) => (
                <div key={i} style={{ display: "flex", gap: "4px" }} onClick={() => setSelected(lang)}>
                    <div className={styles.dropdownCheckbox}>
                    <input type="checkbox" />
                    <span
                        className={styles.checkMark}
                        style={{
                        backgroundColor:
                            selected === lang ? "#4D78DA" : "transparent",
                        borderColor: selected === lang ? "#4D78DA" : "#E0E0E0",
                        }}
                    />
                    </div>
                    <span>
                        {lang}
                    </span>
                </div>
                ))}
            </div>
            </div>
        )}
        </div>
    )
}

export default Select;