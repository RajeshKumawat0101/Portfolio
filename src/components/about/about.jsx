import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About</h1>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/MyPhoto.png")}
                    alt="pic with laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="cursor Image"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive sites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="server Image"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in building fast and optimized back-end systems and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="ui Image"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Competitive Programmer</h3>
                            <p>Practicing competitive programming for 2 years, solved more than 900 que.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <CoPresentRoundedIcon className={styles.icon} />
                        <div className={styles.aboutItemText}>
                            <a 
                                href="https://drive.google.com/uc?export=download&id=1RN7wjOgjj8wvInO9hOGztcoSb2Z_dO1s"
                                download="RajeshResume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.resumeLink}
                                
                            >
                                Resume, CV
                            </a>
                            <p>
                                Experienced in MERN STACK Development for 2 years. Worked as a full-stack developer in several projects.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
