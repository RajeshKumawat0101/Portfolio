import React from "react";
import styles from "./contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contacts">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:rajeshkumawat01012003@gmail.com">rajeshkumawat01012003@gmail.com</a>                    
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/rajesh-kumawat-88a305222">https://www.linkedin.com/in/rajesh-kumawat-88a305222</a>                    
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/RajeshKumawat0101">https://github.com/RajeshKumawat0101</a>                    
                </li>
            </ul>

        </footer>
    );
}



